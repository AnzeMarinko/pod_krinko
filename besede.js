const pari_besed = [
    ["miš", "hrček"],
    ["danes", "včeraj"],
    ["oblaki", "nebo"],
    ["čas", "kazalec"],
    ["jabolko", "breskev"],
    ["sonce", "luna"],
    ["pica", "torta"],
    ["remi", "tarok"],
    ["opera", "balet"],
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
    ["Gozd", "Park"],
    ["Zmaj", "Vitez"],
    ["Kruh", "Pogača"],
    ["Miza", "Stol"],
    ["Riba", "Krap"],
    ["Obraz", "Maska"],
    ["Vrt", "Gredica"],
    ["Kralj", "Prestol"],
    ["Pismo", "Znamka"],
    ["Sova", "Modrost"],
    ["Jabolko", "Hruška"],
    ["Čevlji", "Nogavice"],
    ["Trava", "Roža"],
    ["Telefon", "Računalnik"],
    ["Slika", "Fotografija"],
    ["Cesta", "Pot"],
    ["Hiša", "Vila"],
    ["Avto", "Motor"],
    ["Ladja", "Čoln"],
    ["Letalo", "Helikopter"],
    ["Knjiga", "Revija"],
    ["Pes", "Mačka"],
    ["Voda", "Led"],
    ["Šotor", "Kamp"],
    ["Padec", "Vzpon"],
    ["Veter", "Nevihta"],
    ["Košara", "Vrečka"],
    ["Roke", "Noge"],
    ["Lestev", "Stopnice"],
    ["Ogrevanje", "Hlajenje"],
    ["Bež", "Rjava"],
    ["Zelenjava", "Sadje"],
    ["Gasilec", "Policist"],
    ["Predjed", "Jed"],
    ["Ročaj", "Kljuka"],
    ["Rokavica", "Šal"],
    ["Kava", "Čaj"],
    ["Med", "Marmelada"],
    ["Vlak", "Tramvaj"],
    ["Šotor", "Kampiranje"],
    ["Plavanje", "Potapljanje"],
    ["Ključavnica", "Kjuč"],
    ["Namaz", "Krema"],
    ["Dim", "Ogenj"],
    ["Lučka", "Svetilka"],
    ["Šola", "Učilnica"],
    ["Torta", "Sladica"],
    ["Regrat", "Puh"],
    ["Potovanje", "Pustolovščina"],
    ["Gora", "Hrib"],
    ["Jesen", "Pomlad"],
    ["Led", "Snežinka"],
    ["Mavrica", "Oblak"],
    ["Poletje", "Sonce"],
    ["Grad", "Dvorec"],
    ["Mornar", "Kapitan"]
    ["Knjigarna", "Knjižnica"],
    ["Letališče", "Letalo"],
    ["Luč", "Sveča"],
    ["Čevapčiči", "Ražnjiči"],
    ["Slon", "Nosorog"],
    ["Ananas", "Kivi"],
    ["Harmonika", "Klavir"],
    ["Sladoled", "Torta"],
    ["Hrib", "Dolina"],
    ["Reka", "Morje"],
    ["Palica", "Palec"],
    ["Ograja", "Ograda"],
    ["Limonada", "Sok"],
    ["Škarje", "Papir"],
    ["Vrtnar", "Cvetličar"],
    ["Detektiv", "Policist"],
    ["Ropot", "Tišina"],
    ["Mlekarna", "Sirarna"],
    ["Čokolada", "Piškoti"],
    ["Zvezek", "Blok"],
    ["Kartica", "Bankovec"],
    ["Televizija", "Radio"],
    ["Otroci", "Igrače"],
    ["Sonce", "Toplota"],
    ["Mleko", "Jogurt"],
    ["Riba", "Raček"],
    ["Cvetlica", "Lonček"],
    ["Pšenica", "Ječmen"],
    ["Kompas", "Sever"],
    ["Knjiga", "Stran"],
    ["Glas", "Pesem"],
    ["Hruška", "Češnja"],
    ["Bazen", "Morje"],
    ["Kip", "Slika"],
    ["Čebelar", "Med"],
    ["Dežnik", "Kaplja"],
    ["Piknik", "Košara"],
    ["Grad", "Trdnjava"],
    ["Luna", "Sen"],
    ["Ključ", "Luknja"],
    ["Žlica", "Zajemalka"],
    ["Odtenek", "Barva"],
    ["Svetloba", "Senca"],
    ["Vetrnica", "Mlin"],
    ["Računalnik", "Tipkovnica"],
    ["Vrata", "Ključavnica"],
    ["Raketa", "Satelit"],
    ["Letalo", "Pilot"],
    ["Kolo", "Čelada"],
    ["Papiga", "Kletka"],
    ["Žaba", "Mlaka"],
    ["Miza", "Pogrinjek"],
    ["Metulj", "Roža"],
    ["Kostanj", "Žir"],
    ["Volk", "Ovca"],
    ["Kožuh", "Zima"],
    ["Jabolko", "Češnja"],
    ["Panda", "Medved"],
    ["Lučka", "Kresničke"],
    ["Vrv", "Lestev"],
    ["Mačka", "Mucka"],
    ["Slika", "Okvir"],
    ["Veter", "Burja"],
    ["Puščava", "Kaktus"]
    ["Cerkev", "Kapela"],
    ["Hostija", "Kelih"],
    ["Župnik", "Škof"],
    ["Sveti Duh", "Sveta Trojica"],
    ["Marija", "Jožef"],
    ["Jezus", "Apostoli"],
    ["Angel", "Prerok"],
    ["Biblija", "Evangelij"],
    ["Križ", "Vstajenje"],
    ["Krst", "Rojstvo"],
    ["Post", "Revščina"],
    ["Oltar", "Sveča"],
    ["Greh", "Odpuščanje"],
    ["Prerok", "Svetnik"],
    ["Nebesa", "Pekel"],
    ["Adam", "Eva"],
    ["Noe", "Barka"],
    ["Zvestoba", "Ljubezen"],
    ["Božič", "Jaslice"],
    ["Abraham", "Obljuba"],
    ["Triglav", "Aljažev stolp"],
    ["Planica", "Smučarski skoki"],
    ["Prešeren", "Zdravljica"],
    ["Piran", "Soline"],
    ["Cviček", "Teran"],
    ["Krka", "Sava"],
    ["Oljka", "Vinograd"],
    ["Kozolec", "Senik"],
    ["Mlin", "Moka"],
    ["Žito", "Kruh"],
    ["Domovina", "Svoboda"]
]
