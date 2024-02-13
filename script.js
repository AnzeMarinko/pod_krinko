const pari_besed = [
    ["miš", "hrček"],
    ["danes", "včeraj"],
    ["oblaki", "nebo"],
    ["čas", "kazalec"],
    ["jabolko", "breskev"],
    ["sonce", "luna"],
    ["pica", "torta"],
    ["bakterija", "virus"],
    ["ptica", "metulj"],
    ["banja", "tuš"],
    ["kladivo", "žebelj"],
    ["Pika Nogavička", "Martin Krpan"],
    ["Avtor", "Bralec"],
    ["Vulkan", "Lava"],
    ["Znanost", "Eksperiment"],
    ["Navigator", "Zemljevid"],
    ["Orkester", "Dirigent"],
    ["Teleskop", "Galaksija"],
    ["Raketa", "Astronavt"],
    ["Plesalec", "Ritem"],
    ["Kovač", "Železo"],
    ["Ocean", "Valovanje"],
    ["Fotograf", "Objektiv"],
    ["Zdravnik", "Bolnik"],
    ["Morski pes", "Plavut"],
    ["Mojster", "Učenec"],
    ["Otok", "Zaliv"],
    ["Slika", "Risba"],
    ["Pustolovec", "Pomorščak"],
    ["Melodija", "Ritem"],
    ["Val", "Plima"],
    ["Okno", "Balkon"],
    ["Dijak", "Mentor"],
    ["Pianist", "Skladatelj"],
    ["Kamnosek", "Kipar"],
    ["Pisanje", "Branje"],
    ["Galaksija", "Planet"],
    ["Oblak", "Nebo"],
    ["Miš", "Hrček"],
    ["Čas", "Kazalec"],
    ["Jabolko", "Breskev"],
    ["Luna", "Zvezda"],
    ["Pica", "Torta"],
    ["Sneg", "Led"],
    ["Olje", "Margerina"],
    ["Origano", "Bazilika"],
    ["Hrast", "Drevo"],
    ["Veselje", "Sreča"],
    ["Cerkev", "Župnija"],
    ["Marija", "Svetnik"],
    ["Družina", "Vzgoja"],
    ["Igra", "Otrok"],
    ["Ključ", "Geslo"],
    ["Balkon", "Terasa"],
    ["Reka", "Jezero"],
    ["Koš", "Gol"],
    ["Kamen", "Pesek"],
    ["Jogurt", "Skuta"],
    ["Dvigalo", "Tekoče stopnice"],
    ["Govor", "Besedilo"],
    ["Knjiga", "Zvezek"],
    ["Pesem", "Pesnik"],
    ["Žica", "Elektrika"],
    ["Škatla", "Zaboj"],
    ["Žarnica", "Stikalo"],
    ["Navodila", "Pravila"],
    ["Šopek", "Tulipan"],
    ["Vrč", "Kozarec"],
    ["Polž", "Deževnik"],
    ["Sok", "Nektar"],
    ["Hitra hrana", "Prigrizki"],
    ["Pas", "Boki"],
    ["Resnica", "Pravica"],
    ["Izkušnje", "Znanje"],
    ["Zrcalo", "Odsev"],
    ["Pirat", "Ladijski zaklad"],
    ["Gora", "Alpinist"],
    ["Kitara", "Glasba"],
    ["Pisatelj", "Roman"],
    ["Senca", "Luč"],
    ["Robot", "Programer"],
    ["Očala", "Vid"],
    ["Čokolada", "Sladkarije"],
    ["Puščava", "Oaza"],
    ["Luna", "Noč"],
    ["Slika", "Čopič"],
    ["Pravljica", "Junak"],
    ["Smeh", "Veselje"],
    ["Zvonec", "Učitelj"],
    ["Riba", "Akvarij"],
    ["Oči", "Pogled"],
    ["Hrana", "Okus"],
    ["Veter", "Jadro"],
    ["Ptica", "Pesem"],
    ["Znanost", "Poskus"],
    ["Dežnik", "Padavine"],
    ["Kopalke", "Rokavčki"],
    ["Vonj", "Smrad"],
    ["Omara", "Predal"],
    ["Budilka", "Alarm"],
    ["Krava", "Koza"],
    ["Zelje", "Želje"],
    ["Stvarnik", "Rojstvo"],
    ["Stolp", "Zid"],
    ["Blisk", "Strela"],
    ["Kitara", "Violina"],
    ["Gozd", "Park"]
]

var nPlayersSlider = document.getElementById("nPlayersSlider");
var nPlayersText = document.getElementById("nPlayersText");
var nPlayers = 0;
var nUndercoverSlider = document.getElementById("nUndercoverSlider");
var nUndercoversText = document.getElementById("nUndercoversText");
var nUndercovers = 0;
var nWhitesSlider = document.getElementById("nWhitesSlider");
var nWhitesText = document.getElementById("nWhitesText");
var nWhites = 0;
var isMrMeme = -1;

var hiddenTemplate = document.getElementById("hidden-template").innerHTML;
var namesInput = document.getElementById("namesInput");

function set_number_of_players() {
    nPlayersText.innerHTML = nPlayersSlider.value;
    for (var i = 0; i < Math.max(nPlayersSlider.value, nPlayers); i++) {
        if (i >= nPlayers) {
            namesInput.insertAdjacentHTML("beforeend", hiddenTemplate);
            var last_div = document.getElementById("-1");
            last_div.id = i.toString();
            last_div.querySelector('input[id="m"]').name = last_div.id;
            last_div.querySelector('input[id="f"]').name = last_div.id;
        };
        if (i >= nPlayersSlider.value) {
            var ninp = document.getElementsByClassName("nameInput");
            ninp[0].parentNode.removeChild(ninp[ninp.length - 1]);
        }
    };
    nPlayers = nPlayersSlider.value;
    nUndercoversSlider.value = Math.ceil(nPlayers / 5);
    nUndercoversSlider.max = Math.floor(nPlayers / 3);
    nWhitesSlider.value = Math.floor(nPlayers / 5);
    nWhitesSlider.max = Math.floor(nPlayers / 4);
    set_number_of_undercovers();
    set_number_of_whites();
}

function set_number_of_undercovers() {
    nUndercoversText.innerHTML = nUndercoversSlider.value;
    nUndercovers = nUndercoversSlider.value;
}

function set_number_of_whites() {
    nWhitesText.innerHTML = nWhitesSlider.value;
    nWhites = nWhitesSlider.value;
}

nPlayersSlider.oninput = function () {
    set_number_of_players()
}

nUndercoversSlider.oninput = function () {
    set_number_of_undercovers()
}

nWhitesSlider.oninput = function () {
    set_number_of_whites()
}

function reset_game() {
    nPlayers = 0;
    nUndercovers = nUndercoversSlider.min + 1;
    nWhites = nWhitesSlider.min;
    namesInput.innerHTML = "";
    nPlayersSlider.value = nPlayersSlider.min;
    nUndercoversSlider.value = nUndercovers;
    nWhitesSlider.value = nWhites;
    set_number_of_players();
    set_number_of_undercovers();
    set_number_of_whites();
}
reset_game()

function pravila_igre(mode) {
    if (mode == "none") {
        document.getElementById("navodila").style.display = "none";
        document.getElementById("nastavitve").style.display = "block";
    } else {
        document.getElementById("navodila").style.display = "block";
        document.getElementById("nastavitve").style.display = "none";
    }
}

// logika igre
const deli_igre = Object.freeze({
    IZBIRA_BESED: 0,
    KROG_BESED_IZLOCANJE: 1,
    BELI_UGIBA: 2,
    BELI_ZGRESIL: 3,
    BELI_UGANIL: 4,
    KONEC_IGRE: 5
})

var igralci = [];
var beseda_prebivalci = "";
var beseda_vohuni = "";
var del_igre = deli_igre.IZBIRA_BESED;
var krog_igre = 0;

var ugibajoci_beli = 0;
var zmagovalci = {};

var nerazdeljene_vloge = [];
const randomItem = arr => arr.splice((Math.random() * arr.length) | 0, 1);
var hiddenCardTemplate = document.getElementById("hidden-card-template").innerHTML;
var kartice = document.getElementById("kartice");

function calculateSum(property) {
    const total = igralci.reduce((accumulator, object) => {
        return accumulator + object[property];
    }, 0);
    return total;
}

function prestej_vloge(vloga) {
    const total = igralci.reduce((accumulator, object) => {
        return accumulator + ((object["vloga"] == vloga) & (object["aktiven"]));
    }, 0);
    return total;
}

function change_badge_visibility(mode) {
    for (let element of document.getElementsByClassName("izkljuci")) {
        if (mode == "block") {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    }
}

function overlay_display_mode(element, mode) {
    if (mode == "block") {
        if ((del_igre == deli_igre.IZBIRA_BESED) & (igralci.length != calculateSum("videl_besedo"))) {
            document.getElementById("overlay").style.display = mode;
            document.getElementById("overlay_name").innerHTML = igralci[parseInt(element.id.substring(4))].ime + ":";
            var vloga = igralci[parseInt(element.id.substring(4))].vloga;
            if (vloga == "prebivalec") {
                document.getElementById("overlay_word").innerHTML = beseda_prebivalci;
            } else if (vloga == "vohun") {
                document.getElementById("overlay_word").innerHTML = beseda_vohuni;
            } else {
                document.getElementById("overlay_word").innerHTML = "Ti si gospod v belem ;)";
            }
            igralci[parseInt(element.id.substring(4))].videl_besedo = true;
        }
    } else if (del_igre == deli_igre.BELI_UGIBA) {
        return 0;
    } else if (del_igre == deli_igre.BELI_ZGRESIL) {
        document.getElementById("overlay_izkljucitev").style.display = "none";
        document.getElementById("igra").style.display = "block";
        document.getElementById("overlay_name").innerHTML = "Več sreče prihodnjič &#128549;";
        document.getElementById("overlay_word").innerHTML = "";
        document.getElementById("overlay").style.display = "block";
        setTimeout(function () { del_igre = deli_igre.KROG_BESED_IZLOCANJE; }, 1000);
    } else if (del_igre == deli_igre.KONEC_IGRE) {
        return 0;
    } else {
        document.getElementById("overlay").style.display = mode;
        document.getElementById("overlay_izkljucitev").style.display = mode;
        document.getElementById("overlay_rezultati").style.display = mode;
        document.getElementById("igra").style.display = "block";
        if (del_igre == deli_igre.IZBIRA_BESED) {
            if (igralci.length == calculateSum("videl_besedo")) {
                del_igre = deli_igre.KROG_BESED_IZLOCANJE;
                if (isMrMeme >= 0) {
                    alert(igralci[isMrMeme].ime + " je gospod Nemec.");
                }
                change_badge_visibility("block");
            } else {
                return 0
            }
        }
        var nebeli = [];
        for (var i = 0; i < igralci.length; i++) {
            if (((igralci[i].vloga != "gospod-v-belem") & (igralci[i].aktiven)) | (krog_igre > 0)) {
                nebeli.push(i);
            }
        }
        prvi_namig = igralci[nebeli[Math.floor(Math.random() * nebeli.length)]].ime;
        document.getElementById("navodilo").innerHTML = "Prvi namig poda " + prvi_namig + ".<br>Po enem krogu začnite z izločanjem.";
        if (isMrMeme >= 0) {
            document.getElementById("navodilo").innerHTML += "<br>" + igralci[isMrMeme].ime + " je gospod Nemec.";
        }

        var aktivni_prebivalci = prestej_vloge("prebivalec");
        var aktivni_vohuni = prestej_vloge("vohun");
        var aktivni_beli = prestej_vloge("gospod-v-belem");
        document.getElementById("stanje_prebivalci").innerHTML = "Preostali prebivalci: " + aktivni_prebivalci;
        document.getElementById("stanje_vohuni").innerHTML = "Preostali vohuni: " + aktivni_vohuni;
        document.getElementById("stanje_beli").innerHTML = "Preostali gospodje v belem: " + aktivni_beli;

        if (del_igre == deli_igre.BELI_UGANIL) {
            if (isMrMeme == ugibajoci_beli) {
                igralci[ugibajoci_beli].nove_tocke = 9;
            } else {
                igralci[ugibajoci_beli].nove_tocke = 7;
            }
            del_igre = deli_igre.KONEC_IGRE;
        } else if (aktivni_prebivalci == 1) {
            for (var i = 0; i < igralci.length; i++) {
                if (igralci[i].aktiven) {
                    if (igralci[i].vloga == "vohun") {
                        if (isMrMeme >= 0) {
                            if ((igralci[isMrMeme].vloga == "vohun") & igralci[isMrMeme].aktiven) {
                                igralci[i].nove_tocke = 7;
                            } else {
                                igralci[i].nove_tocke = 5;
                            }
                        } else {
                            igralci[i].nove_tocke = 5;
                        }
                    } else if (igralci[i].vloga == "gospod-v-belem") {
                        if (isMrMeme >= 0) {
                            if ((igralci[isMrMeme].vloga == "gospod-v-belem") & igralci[isMrMeme].aktiven) {
                                igralci[i].nove_tocke = 9;
                            } else {
                                igralci[i].nove_tocke = 7;
                            }
                        } else {
                            igralci[i].nove_tocke = 7;
                        }
                    }
                }
            }
            del_igre = deli_igre.KONEC_IGRE;
        } else if (aktivni_vohuni + aktivni_beli == 0) {
            for (var i = 0; i < igralci.length; i++) {
                if ((igralci[i].aktiven) & (igralci[i].vloga == "prebivalec")) {
                    if (isMrMeme >= 0) {
                        if ((igralci[isMrMeme].vloga == "prebivalec") & igralci[isMrMeme].aktiven) {
                            igralci[i].nove_tocke = 4;
                        } else {
                            igralci[i].nove_tocke = 2;
                        }
                    } else {
                        igralci[i].nove_tocke = 2;
                    }
                }
            }
            del_igre = deli_igre.KONEC_IGRE;
        }
        if ((isMrMeme >= 0) & (del_igre == deli_igre.KONEC_IGRE)) {
            if (igralci[isMrMeme].nove_tocke > 0) {
                alert("Gospod Nemec je v zmagovalni ekipi.");
            }
        }

        if (del_igre == deli_igre.KONEC_IGRE) {
            for (var i = 0; i < igralci.length; i++) {
                igralci[i].tocke += igralci[i].nove_tocke;
            }
            rezultati();
        }
    }
}

function izkljuci(element) {
    var card = element.parentNode;
    var izkljuceni = parseInt(card.id.substring(4));
    change_badge_visibility("none");

    if (igralci[izkljuceni].vloga == "gospod-v-belem") {
        document.getElementById("overlay_text_izkljucitev").innerHTML = igralci[izkljuceni].ime + " je gospod v belem";
    } else {
        document.getElementById("overlay_text_izkljucitev").innerHTML = igralci[izkljuceni].ime + " je " + igralci[izkljuceni].vloga;
    }

    document.getElementById("ugibanje_beli").style.display = "none";
    if (igralci[izkljuceni].vloga == "gospod-v-belem") {
        card.className = "button button_beli";
        document.getElementById("overlay_image").src = "slike/gospod_v_belem.png";
        document.querySelector('input[id="ugibanje"]').value = ""
        document.getElementById("ugibanje_beli").style.display = "block";
        del_igre = deli_igre.BELI_UGIBA;

        ugibajoci_beli = izkljuceni;
    } else if (igralci[izkljuceni].vloga == "vohun") {
        card.className = "button button_agent";
        document.getElementById("overlay_image").src = "slike/pod_krinko.png";
    } else if (igralci[izkljuceni].vloga == "prebivalec") {
        if (igralci[izkljuceni].spol == "m") {
            card.className = "button button_civilist";
            document.getElementById("overlay_image").src = "slike/civilist.png";
        } else {
            card.className = "button button_civilistka";
            document.getElementById("overlay_image").src = "slike/civilistka.png";
        }
    }
    document.getElementById("overlay_izkljucitev").style.display = "block";
    document.getElementById("igra").style.display = "none";

    card.style.opacity = 0.5;
    element.classList.remove("izkljuci_on");
    igralci[izkljuceni].aktiven = false;
}

function start_new_game() {
    nerazdeljene_vloge = [];
    for (var i = 0; i < nPlayers - nUndercovers - nWhites; i++) {
        nerazdeljene_vloge.push("prebivalec");
    }
    for (var i = 0; i < nUndercovers; i++) {
        nerazdeljene_vloge.push("vohun");
    }
    for (var i = 0; i < nWhites; i++) {
        nerazdeljene_vloge.push("gospod-v-belem");
    }
    isMrMeme = document.getElementById("nemec").checked ? Math.max(0, Math.ceil(Math.random() * nPlayers) - 1) : -1;

    for (var i = 0; i < nPlayers; i++) {
        if (i == igralci.length) {
            var name = document.getElementById(i.toString()).querySelector('input[id="name"]').value;
            if (name.length == 0) {
                alert("Dopolni manjkajoča imena!");
                return 0
            }
            igralci.push({
                ime: name,
                spol: document.getElementById(i.toString()).querySelector('input[name="' + i.toString() + '"]:checked').value,
                tocke: 0,
                vloga: randomItem(nerazdeljene_vloge),
                aktiven: true,
                videl_besedo: false,
                nove_tocke: 0,
            })
            kartice.insertAdjacentHTML("beforeend", hiddenCardTemplate);
            var last_div = document.getElementById("card-1");
            last_div.id = "card" + i.toString();
            last_div.querySelector('div[class="name"]').innerHTML = name;
        } else {
            igralci[i].vloga = randomItem(nerazdeljene_vloge);
            igralci[i].aktiven = true;
            igralci[i].videl_besedo = false;
            igralci[i].nove_tocke = 0;
            var last_div = document.getElementById("card" + i.toString());
        }
        last_div.style.opacity = 1;
        if (igralci[i].spol == "m") {
            last_div.className = "button button_neznanec";
        } else {
            last_div.className = "button button_neznanka";
        }
    }
    if (pari_besed.length == 0) {
        alert("Super ste, ostali smo brez besed &#128558;")
    }
    document.getElementById("igra").style.display = "block";
    document.getElementById("menu").style.display = "block";
    document.getElementById("nastavitve").style.display = "none";

    var besedi = randomItem(pari_besed)[0];
    var i = Math.round(Math.random());
    beseda_prebivalci = besedi[i];
    beseda_vohuni = besedi[Math.abs(i - 1)];
    del_igre = deli_igre.IZBIRA_BESED;
    zmagovalci = {};
    change_badge_visibility("none");
    document.getElementById("navodilo").innerHTML = "Vsak igralec naj na skrivaj pogleda svojo besedo.";
    document.getElementById("stanje_prebivalci").innerHTML = "";
    document.getElementById("stanje_vohuni").innerHTML = "";
    document.getElementById("stanje_beli").innerHTML = "";
}

function pojdi_v_nastavitve() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("overlay_rezultati").style.display = "none";
    document.getElementById("overlay_izkljucitev").style.display = "none";
    document.getElementById("igra").style.display = "none";
    document.getElementById("menu").style.display = "none";
    document.getElementById("nastavitve").style.display = "block";
    igralci = [];
    kartice.innerHTML = "";
}

function ugibaj() {
    var poskus = document.querySelector('input[id="ugibanje"]').value.toLowerCase();
    var uspeh = (poskus == beseda_prebivalci.toLowerCase());
    if (uspeh) {
        igralci[ugibajoci_beli].aktiven = true;
        card.style.opacity = 1.0;
        del_igre = deli_igre.BELI_UGANIL;
        change_badge_visibility("none");
        overlay_display_mode("", "none");
    } else {
        del_igre = deli_igre.BELI_ZGRESIL;
        overlay_display_mode("", "none");
    }
}

var hiddenResultTemplate = document.getElementById("hidden-result-template").innerHTML;
var osebe_rezultati = document.getElementById("osebe_rezultati");
var besedi_rezultati = document.getElementById("besedi_rezultati");

function rezultati() {
    var igralci_sortirani = igralci.sort((a, b) => b.tocke - a.tocke);
    osebe_rezultati.innerHTML = "";
    besedi_rezultati.innerHTML = "";
    var max_tock = Math.max(1, igralci_sortirani[0].tocke);

    for (var i = 0; i < igralci_sortirani.length; i++) {
        // spol, vloga, aktiven
        osebe_rezultati.insertAdjacentHTML("beforeend", hiddenResultTemplate);
        var last_div = document.getElementById("result-1");
        last_div.id = "result" + i.toString();
        last_div.querySelector('span[class="name"]').innerHTML = igralci_sortirani[i].ime.toString() + ": " + igralci_sortirani[i].tocke.toString() + " točk" + (igralci_sortirani[i].tocke == 2 ? "i" : (igralci_sortirani[i].tocke < 5 ? "e" : ""));
        last_div.querySelector('progress[id="progress"]').value = igralci_sortirani[i].tocke / max_tock * 100;

        if (igralci_sortirani[i].nove_tocke > 0) {
            last_div.querySelector('span[class="nove_tocke"]').innerHTML = "(+" + igralci_sortirani[i].nove_tocke.toString() + ")";
        }
        if (igralci_sortirani[i].aktiven) {
            last_div.style.opacity = 1;
        } else {
            last_div.style.opacity = 0.5;
        }
        if ((del_igre == deli_igre.KONEC_IGRE) | (!igralci[i].aktiven)) {
            if (igralci[i].vloga == "prebivalec") {
                if (igralci[i].spol == "m") {
                    last_div.className = "button_result button_civilist";
                } else {
                    last_div.className = "button_result button_civilistka";
                }
            } else if (igralci[i].vloga == "vohun") {
                last_div.className = "button_result button_agent";
            } else {
                last_div.className = "button_result button_beli";
            }
        } else {
            if (igralci[i].spol == "m") {
                last_div.className = "button_result button_neznanec";
            } else {
                last_div.className = "button_result button_neznanka";
            }
        }
    }

    if (del_igre == deli_igre.KONEC_IGRE) {
        besedi_rezultati.innerHTML = "Prebivalci: " + beseda_prebivalci + "<br>Vohuni: " + beseda_vohuni;
    }
    document.getElementById("menu_results").style.display = "block";
    document.getElementById("overlay_rezultati").style.display = "block";
    document.getElementById("igra").style.display = "none";
}

// kdo je nemec naj se vidi ob imenu na kartici
