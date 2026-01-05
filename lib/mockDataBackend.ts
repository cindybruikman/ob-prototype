export interface ContentBlock {
  type: "paragraph" | "quote" | "image";
  text?: string;
  imageUrl?: string;
  caption?: string;
}

export interface BackendArticle {
  _id: string;
  author: string;
  title: string;
  teaser: string;
  contentBlocks: ContentBlock[];
  aiSummary: ContentBlock[];
  aiKeyPoints: string[];
  regionName: string;
  theme: string;
  createdAt: string;
  imageUrl?: string;
}

export const backendMockArticles: BackendArticle[] = [
  {
    _id: "ob-1",
    author: "Romee van der Heijden & Storm Roubroeks",
    title: "Dit is wat je wil weten over vogelgriep",
    teaser:
      "Na recente uitbraken van vogelgriep waarbij honderdduizenden kippen zijn geruimd, beantwoorden experts de belangrijkste vragen over het virus, de risico’s en de maatregelen.",
    imageUrl:
      "https://api.omroepbrabant.nl/img/f/768/432/0.50/0.50/cmV2aXNpb25zLzM5Nzk2NTMtMS5qcGc_c2U9MjA0NS0wMS0wMVQxMCUzQTQwJTNBMDBaJnNpZz1Ua1dUMGFidmRCeXF2RUo0JTJGa3dBbnlFVHZtUFpQYjR5JTJGN05aMmRyc2s1cyUzRCZzcD1yJnNwcj1odHRwcyZzcj1iJnN0PTIwMjUtMDEtMDFUMTAlM0E0MCUzQTAwWiZzdj0yMDIwLTEwLTAy",
    contentBlocks: [
      {
        type: "paragraph",
        text: "Op een vleeskuikenbedrijf in Deurne is zaterdag vogelgriep vastgesteld, 162.000 vleeskuikens zullen geruimd moeten worden. Eerder deze maand moesten 80.000 kippen worden geruimd bij een vleeskuikenbedrijf in Uitwijk. Zo moet de verspreiding van vogelgriep worden tegengegaan. In dit artikel beantwoorden we zeven vragen over de vogelgriepuitbraak.",
      },
      {
        type: "paragraph",
        text: "Wat is de vogelgriep? De vogelgriep is een zeer besmettelijk virus en komt bij bijna alle vogelsoorten voor. Besmette vogels worden door het virus erg ziek of gaan dood.",
      },
      {
        type: "paragraph",
        text: "Hoe verspreidt de vogelgriep zich? Het vogelgriepvirus kan zich volgens het RIVM tussen dieren verspreiden door direct contact, door de lucht of via besmet materiaal zoals mest. Wilde vogels spelen vaak een belangrijke rol, omdat zij het virus meenemen tijdens hun trekroutes en zo andere vogels kunnen besmetten.",
      },
      {
        type: "paragraph",
        text: "Is de vogelgriep gevaarlijk voor huisdieren? De NOS meldde eerder dat acht Nederlandse jonge katjes dood zijn gegaan door vogelgriep. Het kan dus wel degelijk dat huisdieren ziek worden.",
      },
      {
        type: "paragraph",
        text: "Volgens de NVWA kun je letten op symptomen zoals koorts, hijgen, sloomheid, oogontsteking en rode ogen. Het virus komt ook voor bij konijnen, fretten, schapen en geiten.",
      },
      {
        type: "paragraph",
        text: "Word je ziek van de vogelgriep? Het RIVM meldt dat besmetting van mensen zeldzaam is en meestal mild verloopt. Klachten lijken op een gewone griep met koorts, spierpijn, hoofdpijn en hoesten.",
      },
      {
        type: "paragraph",
        text: "Mensen die recent in aanraking zijn geweest met besmette vogels en griepklachten krijgen, wordt aangeraden contact op te nemen met de GGD of huisarts.",
      },
      {
        type: "paragraph",
        text: "Beschermt de griepprik tegen vogelgriep? Nee, de griepprik beschermt niet tegen vogelgriep, maar kan wel voorkomen dat iemand naast vogelgriep ook gewone griep krijgt.",
      },
      {
        type: "paragraph",
        text: "Wat doet het virus met vogels? Hoogpathogene vogelgriep veroorzaakt ernstige ziekte of sterfte, terwijl laagpathogene varianten mild of zonder klachten verlopen.",
      },
      {
        type: "paragraph",
        text: "Wie hebben last van de ophokplicht? Sinds half oktober moeten boeren, dierentuinen, kinderboerderijen en hobbyhouders hun pluimvee en watervogels afschermen. Wedstrijden en tentoonstellingen zijn verboden.",
      },
      {
        type: "paragraph",
        text: "Is de vogelgriep overdraagbaar via voeding? Volgens het Voedingscentrum komt besmet vlees of eieren niet in de winkel terecht en is er geen bewijs voor overdracht via voeding.",
      },
    ],
    aiSummary: [
      {
        type: "paragraph",
        text: "Na recente uitbraken van vogelgriep in Brabant zijn opnieuw grote aantallen dieren geruimd. In Deurne moesten 162.000 vleeskuikens worden afgemaakt, eerder deze maand nog eens 80.000 bij een bedrijf in Uitwijk. De maatregelen zijn bedoeld om verdere verspreiding van het zeer besmettelijke virus te voorkomen.",
      },

      {
        type: "paragraph",
        text: "Vogelgriep komt bij vrijwel alle vogelsoorten voor en kan zich verspreiden via direct contact, de lucht en besmet materiaal. Wilde trekvogels spelen een belangrijke rol in het verspreiden van het virus. Besmette vogels worden ernstig ziek of sterven, afhankelijk van de variant van het virus.",
      },

      {
        type: "paragraph",
        text: "Voor mensen is besmetting zeldzaam en meestal mild, maar huisdieren zoals katten kunnen ernstig ziek worden. Daarom gelden er strenge maatregelen, waaronder een landelijke ophokplicht voor pluimvee, hobbykippen en watervogels. Wedstrijden en tentoonstellingen met deze dieren zijn voorlopig verboden.",
      },

      {
        type: "paragraph",
        text: "Volgens experts vormt besmet voedsel geen risico voor mensen. Vlees en eieren van besmette dieren komen niet in de winkel terecht en er is geen bewijs dat vogelgriep via voeding wordt overgedragen. Waakzaamheid en naleving van de maatregelen blijven essentieel om verdere uitbraken te voorkomen.",
      },
    ],

    aiKeyPoints: [
      "Vogelgriep vastgesteld bij pluimveebedrijven in Brabant",
      "Ruiming van 242.000 vleeskuikens uitgevoerd",
      "Virus zeer besmettelijk onder vogels",
      "Zeldzaam overdraagbaar van vogel op mens",
      "Ophokplicht geldt voor pluimvee en hobbydieren",
    ],
    regionName: "Deurne",
    theme: "Nieuws & maatschappij",
    createdAt: "2025-12-28T00:15:00.000Z",
  },
  {
    _id: "ob-2",
    author: "Studio040",
    title:
      "Gracia vluchtte uit Congo, werd arts in Oekraïne en wacht nu op asiel",
    teaser:
      "De 29-jarige Gracia Katombe Nkulu vluchtte uit Congo om arts te worden. Via Oekraïne kwam ze uiteindelijk in Nederland terecht.",
    imageUrl:
      "https://api.omroepbrabant.nl/img/f/768/432/0.48/0.47/cmV2aXNpb25zLzQ4MDczMjQtMS5qcGc_c2U9MjA0NS0wMS0wMVQxMCUzQTQwJTNBMDBaJnNpZz1JcEc0SjZBT2laV1l5JTJGSmRaUllmcEUlMkJkZGtOZllCNWQyQnJZUmpGREVIdyUzRCZzcD1yJnNwcj1odHRwcyZzcj1iJnN0PTIwMjUtMDEtMDFUMTAlM0E0MCUzQTAwWiZzdj0yMDIwLTEwLTAy",
    contentBlocks: [
      {
        type: "paragraph",
        text: "De 29-jarige Gracia Katombe Nkulu vluchtte uit haar geboorteland Congo om in Oekraïne arts te worden. Vlak voor het afronden van haar studie brak daar de oorlog uit en vluchtte ze naar Nederland. In Eindhoven probeert ze haar droom te vervullen door in de zorg te werken. Maar dat gaat niet zonder slag of stoot. Ze loopt tegen veel problemen aan met haar werkvergunning.",
      },
      {
        type: "paragraph",
        text: "Haar vader overleed toen Gracia 16 jaar was. Niet aan een zeldzame ziekte, maar aan een kleine infectie. “In Congo kun je daaraan al doodgaan, omdat de zorg zo slecht is”, vertelt ze. De slechte omstandigheden waarin ze opgroeit, vormen de basis voor haar droom: bijdragen aan betere gezondheidszorg. “Als er meer structuur is, gaat alles beter. Dat heb ik daar gezien.”",
      },
      {
        type: "paragraph",
        text: "Gevaarlijk land Congo is een land waar geweld en instabiliteit aan de orde van de dag zijn. “Het is een gevaarlijk land, er gebeuren vreselijke dingen.” Gracia's moeder wil niet dat haar dochter daar opgroeit en zet alles op alles om haar een betere toekomst te geven. In 2015, als Gracia 19 jaar oud is, emigreert ze naar Oekraïne om daar geneeskunde te studeren.",
      },
      {
        type: "paragraph",
        text: "In de stad Ternopil gaat ze naar de universiteit en woont ze in een studentenhuis. Na twee jaar zorgeloos studeren komt Gracia in een moeilijke situatie terecht, want ook haar moeder overlijdt. “Ik had weinig contact met mijn familie in Congo en weet niet precies wat er is gebeurd”, vertelt ze daarover.",
      },
      {
        type: "paragraph",
        text: "Het verlies en gemis is enorm. Ook heeft het gevolgen voor haar studie, want zonder de financiële steun van haar moeder kan Gracia haar kamer niet meer betalen. Ze is alleen, in een vreemd land, zonder vangnet. Ze klopt aan bij de kerk en komt terecht in een gastgezin.",
      },
      {
        type: "paragraph",
        text: "Oorlog In het laatste jaar van Gracia’s studie breekt de oorlog in Oekraïne uit. Voor Gracia volgt een onzekere tijd. Haar allerlaatste examen kon ze op dat moment niet maken. De oorlog doorkruist de toekomst die zij voor ogen had: aan de slag gaan als arts in Oekraïne. “Ik voelde me verloren en wist niet goed wat ik moest doen.",
      },
      {
        type: "paragraph",
        text: "Samen met haar gastgezin vlucht ze in maart 2022 naar Polen. Ook daar voelen ze zich niet veilig. “Het voelde alsof we nog te dicht bij Oekraïne waren, dus we besloten door te reizen naar Nederland.",
      },
      {
        type: "paragraph",
        text: "Gracia en haar gastgezin komen in een opvanglocatie in Eindhoven terecht. Ondertussen rondt ze haar studie officieel af: haar laatste examen maakt ze in Nederland en ze krijgt haar diploma per post opgestuurd.",
      },
      {
        type: "paragraph",
        text: "Toch kan ze met dat diploma niet aan de slag als arts. “Om hier dokter te worden, moet je door heel veel papierwerk en een extreem hoog niveau Nederlands hebben.” Om rond te komen werkt ze in een supermarkt in Eindhoven, maar haar hart ligt nog altijd in de zorg.",
      },
      {
        type: "paragraph",
        text: "Start in de ouderenzorg\nZe wordt uitgekozen voor een speciaal traject bij mbo-school Summa, bedoeld voor internationals en expats die in de zorg willen werken en tegelijkertijd hun Nederlands willen verbeteren. Ze start een traject bij Vitalis, een organisatie voor ouderenzorg.",
      },
      {
        type: "paragraph",
        text: "Het werk is anders dan ze gewend is. “Als dokter leer je diagnosticeren en met medicijnen werken. Hier help ik ouderen aankleden, begeleid ik activiteiten en help ik mensen met naar bed gaan.” Toch voelt het goed, vertelt Gracia. “Wat overeenkomt is het helpen van mensen en zorgen dat het goed met ze gaat.”",
      },
      {
        type: "paragraph",
        text: "Haar droom blijft om ooit als arts te werken. “Daar heb ik zes jaar voor gestudeerd, ik zou niets liever doen dan mijn kennis in de praktijk toepassen. Voor nu is het werk in de ouderenzorg een mooie stap in de goede richting.”",
      },
      {
        type: "paragraph",
        text: "Maar juist nu ze haar plek begint te vinden, wordt haar toekomst opnieuw onzeker. Door veranderingen in de regels rondom Oekraïense vluchtelingen ontvangt Gracia afgelopen zomer een brief van de Immigratie- en Naturalisatiedienst (IND). Daarin staat dat zij Nederland moet verlaten. “Ik snapte er niets van. Ik had op dat moment gewoon een geldige werkvergunning.”",
      },
      {
        type: "paragraph",
        text: "In de knoei met werkvergunning\nZe loopt vast. Ondanks dat ze een tijdelijk contract krijgt, hoort Gracia dat ze per direct moet stoppen met werken in de ouderenzorg. “Mijn wereld stortte opnieuw in.”",
      },
      {
        type: "paragraph",
        text: "Sindsdien heeft Gracia geen werk en geen inkomen. Wel mag ze in Nederland blijven, omdat ze inmiddels asiel heeft aangevraagd. Pas als er meer duidelijkheid is over haar verblijfsstatus, kan Vitalis een nieuwe werkvergunning aanvragen. Volgens Gracia is dit op zijn vroegst pas in maart 2026. “Ik wil niets liever dan zorgen voor mensen en een toekomst opbouwen. Ik hoop dat ik dat hier mag blijven doen.”",
      },
    ],
    aiSummary: [
      {
        type: "paragraph",
        text: "Gracia Katombe Nkulu vluchtte uit Congo om in Oekraïne arts te worden, gedreven door haar wens om bij te dragen aan betere gezondheidszorg. Na het overlijden van beide ouders zette zij haar studie onder moeilijke omstandigheden voort. In haar laatste studiejaar brak de oorlog uit, waardoor haar toekomst in Oekraïne instortte en zij via Polen naar Nederland vluchtte, waar zij haar opleiding alsnog afrondde.",
      },
      {
        type: "paragraph",
        text: "In Nederland bleek haar medische diploma niet direct inzetbaar. Ze moet een langdurig erkenningstraject doorlopen en een zeer hoog niveau Nederlands behalen om als arts te mogen werken. Om financieel rond te komen werkte ze in een supermarkt, terwijl haar motivatie om in de zorg te werken onverminderd bleef. Via een speciaal traject voor internationals begon ze in de ouderenzorg in Eindhoven.",
      },
      {
        type: "paragraph",
        text: "Juist toen zij haar plek begon te vinden, veranderden de regels rondom Oekraïense vluchtelingen. Ze ontving een brief van de IND waarin stond dat zij Nederland moest verlaten, ondanks een geldige werkvergunning. Haar contract werd stopgezet en zij raakte zonder werk en inkomen, waardoor haar toekomst opnieuw onzeker werd.",
      },
      {
        type: "paragraph",
        text: "Gracia heeft inmiddels asiel aangevraagd en mag voorlopig in Nederland blijven. Een nieuwe werkvergunning kan pas worden aangevraagd zodra haar verblijfsstatus duidelijk is, naar verwachting niet vóór maart 2026. Ondanks alles blijft zij vastberaden om in de zorg te werken en haar leven in Nederland op te bouwen.",
      },
    ],
    aiKeyPoints: [
      "Gracia vluchtte uit Congo en studeerde geneeskunde in Oekraïne",
      "Door de oorlog kwam ze in Nederland terecht",
      "Ze werkt in de ouderenzorg maar mag nu niet meer werken",
      "Haar asielprocedure loopt nog",
    ],
    regionName: "Eindhoven",
    theme: "Nieuws & maatschappij",
    createdAt: "2025-12-20T00:15:00.000Z",
  },
  {
    _id: "ob-3",
    author: "Omroep Brabant",
    title:
      "Datalek Eindhoven met kwetsbare burgers: 'Verwijderverzoek is kansloos'",
    teaser:
      "Bij de gemeente Eindhoven zijn persoonsgegevens van kwetsbare burgers in AI-tools terechtgekomen. Experts waarschuwen dat verwijderen vrijwel onmogelijk is.",
    imageUrl:
      "https://api.omroepbrabant.nl/img/f/768/432/0.49/0.50/cmV2aXNpb25zLzQ4MDY2MTktMS5qcGc_c2U9MjA0NS0wMS0wMVQxMCUzQTQwJTNBMDBaJnNpZz1vNVZPVVlTYlZpZXNXT0M5MU9Ec1hwS1RMTUlqMlBoSFZOcEplaUpvc3JNJTNEJnNwPXImc3ByPWh0dHBzJnNyPWImc3Q9MjAyNS0wMS0wMVQxMCUzQTQwJTNBMDBaJnN2PTIwMjAtMTAtMDI=",

    contentBlocks: [
      {
        type: "paragraph",
        text: "Wéér kwam deze week een datalek boven water, deze keer bij de gemeente Eindhoven. Medewerkers stopten persoonsgegevens van kwetsbare burgers in een AI-tool zoals ChatGPT. En dat mag niet zomaar, want we hebben allemaal recht op privacy. Hoe groot zijn de gevolgen als jouw persoonsgegevens met een openbare AI-website gedeeld worden?",
      },

      {
        type: "paragraph",
        text: "Deze week was het Eindhoven en dat is extra pijnlijk. De gemeente stond twee jaar lang onder verscherpt toezicht bij de Autoriteit Persoonsgegevens, omdat datalekken te laat waren gemeld en persoonsgegevens te lang zijn bewaard.",
      },

      {
        type: "paragraph",
        text: "Vooropgesteld: het is niet slim om persoonsgegevens te uploaden in AI-tools, stelt AI-expert Dimitri van Iersel van Omroep Brabant. Maar het is lastig om te bepalen wat precies de gevolgen zijn. De gegevens kunnen inmiddels op servers buiten Europa staan en bij een eventueel nieuw datalek op straat belanden.",
      },

      {
        type: "paragraph",
        text: "Strategisch en juridisch adviesbureau Hooghiemstra & Partners onderzocht het incident. Daaruit blijkt dat onder meer documenten uit de Jeugdwet zijn ingevoerd, met gevoelige informatie over de mentale en fysieke gezondheid van minderjarige kinderen, inclusief burgerservicenummers en soms zelfs foto's.",
      },

      {
        type: "paragraph",
        text: "Ook WMO-documenten met gegevens over diagnoses, verslavingen en schulden zijn gedeeld, net als cv’s van sollicitanten en interne reflectieverslagen van medewerkers.",
      },

      {
        type: "paragraph",
        text: "Van Iersel benadrukt dat zodra data eenmaal is opgenomen in een AI-trainingsmodel, deze praktisch niet meer te verwijderen is. Alleen het volledig verwijderen van het model zou helpen, maar dat acht hij onrealistisch.",
      },

      {
        type: "paragraph",
        text: "Hoewel de kans klein is dat betrokkenen direct schade ondervinden, zijn risico’s als phishing of fraude nooit helemaal uit te sluiten. Volgens Van Iersel ligt de kern van het probleem vooral bij het ontbreken van duidelijke regels en afspraken rond het gebruik van AI-tools.",
      },

      {
        type: "paragraph",
        text: "Hij waarschuwt dat vrijwel elk bedrijf hiermee te maken heeft. Zonder heldere kaders maken medewerkers hun eigen regels. En in een wereld met steeds meer AI-tools betekent dat dat veel gevoelige data op straat kan belanden.",
      },
    ],
    aiSummary: [
      {
        type: "paragraph",
        text: "Deze week werd opnieuw een ernstig datalek ontdekt, ditmaal bij de gemeente Eindhoven. Medewerkers voerden persoonsgegevens van kwetsbare burgers in bij een openbaar AI-platform zoals ChatGPT. Dat is in strijd met privacywetgeving en brengt grote risico’s met zich mee, omdat gevoelige gegevens zich daarna buiten de controle van de organisatie kunnen bevinden.",
      },
      {
        type: "paragraph",
        text: "De zaak is extra pijnlijk omdat de gemeente al twee jaar onder verscherpt toezicht stond van de Autoriteit Persoonsgegevens vanwege eerdere fouten bij het melden en bewaren van persoonsgegevens. Uit onderzoek blijkt dat onder meer Jeugdwet-dossiers met medische informatie van minderjarige kinderen, inclusief burgerservicenummers en foto’s, in AI-systemen terechtkwamen.",
      },
      {
        type: "paragraph",
        text: "Daarnaast zijn ook WMO-documenten met gegevens over diagnoses, verslavingen en schulden gedeeld, evenals cv’s van sollicitanten en interne reflectieverslagen. Volgens AI-expert Dimitri van Iersel is het verwijderen van deze data vrijwel onmogelijk zodra die onderdeel wordt van een trainingsmodel. Alleen het volledig schrappen van het model zou helpen, maar dat is in de praktijk niet realistisch.",
      },
      {
        type: "paragraph",
        text: "Hoewel de kans op directe schade klein lijkt, blijven risico’s zoals fraude en phishing aanwezig. Van Iersel wijst vooral op het gebrek aan duidelijke regels rondom AI-gebruik. Zonder heldere kaders nemen medewerkers zelf beslissingen, waardoor in een wereld met steeds meer AI-tools grote hoeveelheden gevoelige data op straat kunnen belanden.",
      },
    ],
    aiKeyPoints: [
      "Gemeente Eindhoven lekte persoonsgegevens via openbare AI-tools",
      "Gegevens betroffen kwetsbare burgers en minderjarige kinderen",
      "Documenten bevatten medische informatie, BSN en adresgegevens",
      "Verwijdering uit AI-systemen praktisch onmogelijk",
      "Risico op misbruik en datalekken blijft bestaan",
    ],
    regionName: "Eindhoven",
    theme: "Tech & innovatie",
    createdAt: "2025-12-20T00:15:00.000Z",
  },
  {
    _id: "ob-4",
    author: "Carlijn Kösters",
    title:
      "Bas maakt een vuist tegen McDonald's in het bos: al 9000 handtekeningen in Oisterwijk",
    teaser:
      "Bas Zijlmans startte een petitie tegen de komst van een McDonald's naast de beschermde natuur van Oisterwijk. De actie krijgt massale steun.",
    imageUrl:
      "https://api.omroepbrabant.nl/img/f/1024/576/0.50/0.50/cmV2aXNpb25zLzQ4MTE3NDYtMS5qcGc_c2U9MjA0NS0wMS0wMVQxMCUzQTQwJTNBMDBaJnNpZz1SamNFblFGaGQxZnZIdlBKaWpuNTNqVXU0SCUyQjQ1YVZ4Sm9KOWZJdGIxdmMlM0Qmc3A9ciZzcHI9aHR0cHMmc3I9YiZzdD0yMDI1LTAxLTAxVDEwJTNBNDAlM0EwMFomc3Y9MjAyMC0xMC0wMg==",

    contentBlocks: [
      {
        type: "paragraph",
        text: "Een fastfoodketen met drive-thru, pál naast de beschermde bossen en vennen van Oisterwijk. Het idee alleen al gaat Bas Zijlmans (43) uit Oisterwijk veel te ver. Hij startte een petitie om zijn dierbare stuk natuur te beschermen. De steun laat zien dat hij niet de enige is die zich verzet tegen een grote, gele M.",
      },
      {
        type: "paragraph",
        text: "“Ik las het voor het eerst in de krant. Daar vertelde een mevrouw dat hier waarschijnlijk een McDonald's zou komen”, vertelt Bas. Terwijl hij het vertelt, houdt hij zijn hand op zijn hart. “Dat schrikt me echt af. Dat is schadelijk voor de beestjes, voor de schimmels. Alle natuur die hier is, gaat dan dood. Ik weet hoeveel puinzooi dat veroorzaakt. Dat vernietigt heel dit gebied.”",
      },
      {
        type: "paragraph",
        text: "Het is een schrikbeeld, voor de Oisterwijker. Hij is opgegroeid tussen het natuurschoon en komt er nog steeds elke week om te wandelen. “Rust is hier heel belangrijk”, vertelt hij. Van thuis heeft hij altijd meegekregen dat je goed voor de natuur moet zorgen. “Ze noemen Oisterwijk niet voor niets de parel in het groen. Maar dan moet je dat groen niet kapot maken.”",
      },
      {
        type: "paragraph",
        text: "Met zo'n fastfoodketen tegen de bosrand aan, bestaat het risico namelijk dat de natuur binnen no time vol ligt met eten. Het zorgt voor afval, voor verkeer, voor geluid en voor lucht- en lichtvervuiling. Een crime voor het ecosysteem.",
      },
      {
        type: "paragraph",
        text: "Bas vond het een bespottelijk idee en besloot gelijk een petitie te starten. Maandagmiddag staat de teller op ruim 9000 handtekeningen. “Ik heb het zelf gewoon naar vrienden toegestuurd, maar op de een of andere manier is dat zich gaan verspreiden. En als er tienduizenden mensen tekenen, wil dat toch wel iets zeggen. Alle fastfoodsrestaurants horen hier niet thuis.”",
      },
      {
        type: "paragraph",
        text: "Voor alle andere ideeën staat de initiatiefnemer wel open. Iets voor natuurfotografen, een huisje voor natuurbeheer of iets leuks voor jongeren. “Het plan van de ontwikkelaar ligt nu bij de gemeente, maar eigenlijk vind ik het idee alleen al erg genoeg.”",
      },
      {
        type: "paragraph",
        text: "“Dat je denkt dat je hiér een fastfoodrestaurant kunt bouwen, omdat je vier miljoen hebt neergelegd. Dat kan echt niet.”",
      },
      {
        type: "paragraph",
        text: "Een echt streefdoel heeft Bas niet, voor zijn handtekeningen. “Ik laat de pagina denk ik gewoon lopen, tot 5 januari. Dan start alles bij de gemeente weer een beetje op en is de vakantie voorbij.” Dan gaat hij het gesprek aan.",
      },
      {
        type: "paragraph",
        text: "En hij vindt het belangrijk dat dat op een respectvolle manier verloopt. “Zelfs richting de projectontwikkelaar. Ook al mag ik hem niet, omdat hij vier miljoen neerlegt en dan maar doet wat-ie wil. Dan nog steeds moet dat gaan met overleg en met liefde.”",
      },
    ],
    aiSummary: [
      {
        type: "paragraph",
        text: "Bas Zijlmans uit Oisterwijk is een petitie gestart tegen de mogelijke komst van een McDonald’s met drive-thru direct naast de beschermde bossen en vennen. Hij vreest dat het natuurgebied ernstige schade zal oplopen door afval, verkeer, geluidsoverlast en lucht- en lichtvervuiling. Binnen korte tijd kreeg zijn actie brede steun.",
      },
      {
        type: "paragraph",
        text: "Voor Bas heeft het gebied grote emotionele waarde. Hij groeide op in het natuurschoon rond Oisterwijk en komt er nog wekelijks om te wandelen. Volgens hem is rust essentieel voor de natuur en past een fastfoodrestaurant niet bij de identiteit van de plaats, die bekendstaat als ‘de parel in het groen’.",
      },
      {
        type: "paragraph",
        text: "Maandagmiddag stond de petitie al op ruim 9000 handtekeningen. De snelle groei verraste Bas, maar bevestigde voor hem dat veel inwoners dezelfde zorgen delen. Hij benadrukt dat hij niet tegen ontwikkeling is, maar dat plannen moeten passen bij de omgeving en het kwetsbare ecosysteem.",
      },
      {
        type: "paragraph",
        text: "Bas staat open voor alternatieven, zoals voorzieningen voor natuurfotografen, natuurbeheer of jongeren. Het voorstel van de projectontwikkelaar ligt nu bij de gemeente. In januari wil hij het gesprek aangaan met alle betrokkenen, waarbij hij het belangrijk vindt dat dit respectvol gebeurt, ook richting de ontwikkelaar.",
      },
    ],
    aiKeyPoints: [
      "Petitie tegen McDonald's bij natuurgebied Oisterwijk gestart",
      "Meer dan 9000 handtekeningen verzameld",
      "Bewoners vrezen schade aan kwetsbaar ecosysteem",
      "Plan ligt momenteel bij gemeente",
      "Initiatiefnemer wil respectvol overleg",
    ],
    regionName: "Oisterwijk",
    theme: "Natuur & milieu",
    createdAt: "2025-12-29T00:15:00.000Z",
  },
  {
    _id: "ob-5",
    author: "Willem-Jan Joachems",
    title: "Wandeling in het bos werd Yvonne (75) fataal, verdachte bekent",
    teaser:
      "Een tbs’er bekent dat hij Yvonne (75) in het bos bij Halsteren wurgde en verkrachtte. Hij zegt dat stemmen hem aanstuurden; nabestaanden vertelden in de rechtbank over hun verlies.",
    imageUrl:
      "https://api.omroepbrabant.nl/img/f/1024/576/0.35/0.57/cmV2aXNpb25zLzQ2NTY5MDUtMS5qcGc_c2U9MjA0NS0wMS0wMVQxMCUzQTQwJTNBMDBaJnNpZz1DJTJCb2tkcEREczRCcFBhTDRoaTVRYmdwOVU5Zmd5Q0JKJTJGUU9XY0hoRXVXMCUzRCZzcD1yJnNwcj1odHRwcyZzcj1iJnN0PTIwMjUtMDEtMDFUMTAlM0E0MCUzQTAwWiZzdj0yMDIwLTEwLTAy",

    contentBlocks: [
      {
        type: "paragraph",
        text: "75 jaar oud was Yvonne, toen ze door de bossen bij Halsteren haar dood tegemoet wandelde. Ze kwam Elias M. tegen. De tbs’er wurgde en verkrachtte haar. Elias zegt dat hij werd gedwongen door de stem van de duivel in zijn hoofd. “Mijn herinnering is dat ik haar met veel pijn en verdriet liet stikken.”",
      },
      {
        type: "paragraph",
        text: "De verdachte was met deze bekentenis helderder dan ooit. Maar nog steeds blijven er vragen en is onduidelijk wat hem echt bezielde.",
      },
      {
        type: "paragraph",
        text: "Demoon heet Iblis\nM. (33) heeft een uitgebreid verleden van psychoses, verward en agressief gedrag en is al veel onderzocht. Een wietverslaving versterkt volgens deskundigen zijn stoornissen. En Elias hoort stemmen in zijn hoofd. “Die demon die staat al jaren naast mij. Hij heet Iblis.”",
      },
      {
        type: "paragraph",
        text: "Hij had al een strafblad voor straatroof. Eind 2020 ontspoorde hij in zijn woonplaats Amsterdam. Mishandelingen, schennispleging en hij verkrachtte een vrouw die aan het hardlopen was. Hij werd gearresteerd en kreeg tbs.",
      },
      {
        type: "paragraph",
        text: "Elias belandde op Vrederust in Halsteren, op De Mare waar meer tbs’ers worden behandeld, achter hoge hekken en camera’s. In de beslotenheid van de bossen kwam M. in rustiger vaarwater, hij stabiliseerde, er waren geen incidenten en hij kreeg meer vrijheid.",
      },
      {
        type: "paragraph",
        text: "Een kus\nToch ging het op 10 oktober 2023 gruwelijk mis. “Ik hoorde God praten”, zei hij woensdag in de rechtszaal. Op datzelfde moment wandelde Yvonne (75) richting Vrederust. Haar man had haar net een kus gegeven en liep alvast naar huis. Yvonne wandelde nog een stukje door. Niet wetend dat ze de dood tegemoet liep.",
      },
      {
        type: "paragraph",
        text: "Bij het Wasven kwam ze Elias tegen. “Ik zag haar op een afstandje. Toen zag ik de duivel of demon in mijn lichaam komen. Stemmen zeiden heel luid dat het slachtoffer ook een duivel is en mij zou gaan vermoorden en seksuele dingen zou gaan doen bij mij”, vertelde Elias.",
      },
      {
        type: "paragraph",
        text: "Hij liep op haar af. De stappenteller in het mobieltje van Yvonne stopte. Om drie minuten voor vier die middag stond Yvonne stil. Of lag ze stil.",
      },
      {
        type: "paragraph",
        text: "Getuige\nYvonne werd verkracht. Elias liet zijn dna achter. De rechter vroeg hoe het toch kan dat zijn sperma werd gevonden op de onderbroek en spijkerbroek van het slachtoffer. “Dat komt toch niet uit de lucht vallen?” Elias zegt dat hij dat zich niet kan herinneren. “Het is gewoon te erg wat er is gebeurd, te moeilijk om het er over te hebben.” De hele dag ontweek hij vragen over de verkrachting. De moord gaf hij wel toe.",
      },
      {
        type: "paragraph",
        text: "“Ik schaam me daarvoor. Ik heb diegene laten stikken. Ik moest haar slepen. Doe bladeren op het slachtoffer, zei de duivel en: ga weg, ga weg! Ik moest ook de kleding en telefoon verstoppen. Ik hoorde: doe het voordat die duivel het bij jou doet.”",
      },
      {
        type: "paragraph",
        text: "De vrouw werd gewurgd of gesmoord, of misschien allebei wel. Elias deed het de rechters voor. “Dat ik mijn handen bij haar nek had.” Hij gebaarde ook hoe hij haar versleepte over het bospad. Een getuige zag iemand met bladeren in zijn handen staan.",
      },
      {
        type: "paragraph",
        text: "Die avond kwam een zoekactie op gang. Yvonne werd iets na middernacht dood gevonden.",
      },
      {
        type: "paragraph",
        text: "Woensdag in de rechtbank kwamen ook nabestaanden aan het woord. De weduwnaar deed zijn verhaal in tranen. “Deze man heeft mijn vrouw gedood en ik mis haar iedere dag. Hij heeft mijn leven geruïneerd.” Hij vertelde hoe schokkend het was om haar te moeten identificeren, zijn geliefde met wie hij meer dan veertig jaar samen was.",
      },
      {
        type: "paragraph",
        text: "Elias reageerde door opnieuw de moord toe te geven. “Mijn herinnering is dat ik haar met veel pijn en verdriet liet stikken.” Over de verkrachting blijft hij zwijgen.",
      },
      {
        type: "paragraph",
        text: "Donderdag komt de officier van justitie met een strafeis. De rechtbank heeft de uitspraak gepland op 26 januari.",
      },
      {
        type: "paragraph",
        text: "In oktober 2023 werd de GGZ op Vrederust opgeschrikt door twee heftige incidenten. Eerst de moord op Yvonne door een bewoner van De Mare en anderhalve week later was er een gewelddadige ontsnapping uit de Mare van een andere tbs'er Lennard C. Hij werd bij Hulten neergeschoten door de politie.",
      },
      {
        type: "paragraph",
        text: "Er kwamen diverse onderzoeken en daaruit bleek dat de GGZ niks te verwijten viel maar de GGZ besloot om een specifieke categorie tbs'ers niet meer op te nemen.",
      },
    ],
    aiSummary: [
      {
        type: "paragraph",
        text: "In oktober 2023 werd de 75-jarige Yvonne tijdens een wandeling in de bossen bij Halsteren vermoord door Elias M., een tbs’er die later bekende dat hij haar had gewurgd. In de rechtbank verklaarde hij dat hij handelde onder invloed van stemmen en een demon die hij ‘Iblis’ noemt. Hoewel hij de moord erkende, bleef hij vragen over de verkrachting ontwijken, ondanks dat zijn DNA werd aangetroffen op de kleding van het slachtoffer.",
      },
      {
        type: "paragraph",
        text: "Elias heeft een langdurige geschiedenis van psychoses, agressief gedrag en eerdere gewelds- en zedendelicten. Hij verbleef ten tijde van de moord op behandelcentrum Vrederust in Halsteren, waar hij volgens deskundigen juist stabieler was geworden en meer vrijheden had gekregen. Toch ging het op 10 oktober gruwelijk mis toen Yvonne hem in het bos tegenkwam, kort nadat zij afscheid had genomen van haar man.",
      },
      {
        type: "paragraph",
        text: "Tijdens de rechtszaak werd duidelijk hoe de verdachte sporen probeerde te verbergen en hoe een getuige hem met bladeren zag staan bij de plaats delict. Nabestaanden, waaronder de weduwnaar van Yvonne, vertelden in tranen over het verlies en de blijvende impact op hun leven. De rechtbank buigt zich nu over de straf; de eis volgt donderdag en de uitspraak staat gepland op 26 januari.",
      },
      {
        type: "paragraph",
        text: "De zaak kreeg extra lading doordat in dezelfde periode een tweede ernstig incident plaatsvond bij Vrederust, waarbij een andere tbs’er ontsnapte en later door de politie werd neergeschoten. Onderzoek wees uit dat de GGZ formeel niets te verwijten valt, maar de instelling besloot wel om een specifieke categorie tbs’ers niet langer op te nemen.",
      },
    ],
    aiKeyPoints: [
      "Verdachte bekent moord op Yvonne (75) bij Halsteren",
      "Hij zegt dat stemmen en ‘Iblis’ hem aanstuurden",
      "DNA van verdachte gevonden op kleding van slachtoffer",
      "Nabestaanden spraken in de rechtbank over het verlies",
      "Uitspraak gepland op 26 januari",
    ],
    regionName: "Halsteren",
    theme: "Nieuws & maatschappij",
    createdAt: "2025-12-30T00:15:00.000Z",
  },
  {
    _id: "ob-6",
    author: "Evie Hendriks",
    title:
      "Zes shetlandpony's na dag in de sneeuw terug in de wei: 'Goede uitbrekers'",
    teaser:
      "Zes shetlandpony’s die zondagavond in Haaren ontsnapten, werden na ruim een dag in de kou en sneeuw teruggevonden in Oisterwijk en staan inmiddels weer veilig in de wei.",
    imageUrl:
      "https://api.omroepbrabant.nl/img/f/768/432/0.50/0.54/cmV2aXNpb25zLzQ4MTUzOTMtMS5qcGc_c2U9MjA0NS0wMS0wMVQxMCUzQTQwJTNBMDBaJnNpZz1XM1Q4SG9hNFEyRUpiU2FvMGlXZTFNSWZvZDBjSiUyRkNQaDVBZmltSHdlb0klM0Qmc3A9ciZzcHI9aHR0cHMmc3I9YiZzdD0yMDI1LTAxLTAxVDEwJTNBNDAlM0EwMFomc3Y9MjAyMC0xMC0wMg==",

    contentBlocks: [
      {
        type: "paragraph",
        text: "De zes shetlandpony’s die zondagavond in Haaren aan de aandacht van de politie wisten te ontsnappen, staan sinds maandagmiddag weer veilig achter het draad in de wei. Agenten kregen een melding dat de dieren over het fietspad liepen en filmden hen, maar toen ze probeerden de pony’s terug te brengen, gingen die er vandoor.",
      },
      {
        type: "paragraph",
        text: "Op beelden die de politie Groene Beemden op Instagram deelde, is te zien hoe de pony’s vrolijk door de sneeuw lopen. Het plan was om ze na de opnames terug te brengen naar hun weide, maar de dieren besloten daar anders over en sloegen op de vlucht.",
      },
      {
        type: "paragraph",
        text: "Voor mede-eigenaar Jeffrey Smulder uit Haaren kwam het nieuws als een verrassing. Een vriend bij wie de pony’s in de wei staan, wist al van de vermissing. Jeffrey ontdekte het pas toen hij de beelden online zag verschijnen. “Zes zwarte shetlandpony’s in Haaren die waren verdwenen, toen wist ik genoeg.”",
      },
      {
        type: "paragraph",
        text: "Na ruim een nacht en dag op avontuur te zijn geweest in de sneeuw en de kou kwam het verlossende telefoontje. Mensen belden Jeffrey dat ze de pony’s hadden gezien op het industrieterrein in Oisterwijk, zo’n 2,5 kilometer van hun wei vandaan.",
      },
      {
        type: "paragraph",
        text: "Samen met twee vrienden ging Jeffrey direct op pad. Ook de politie kwam kijken hoe het met de dieren ging. “Ze hebben gelukkig een dikke vacht, dus ze maken het goed. Ze liepen het half uurtje terug naar de wei mooi mee en kregen meteen hooi om te eten.”",
      },
      {
        type: "paragraph",
        text: "De politie vermoedt dat de pony’s schrokken van vuurwerk en daarom zondagavond uitbraken. Hoe ze precies uit de wei konden ontsnappen, is voor de eigenaren nog steeds onduidelijk. “Er stonden ook een paar paarden los, maar die gingen er niet vandoor. Shetlandpony’s zijn goede uitbrekers,” lacht Jeffrey.",
      },
      {
        type: "paragraph",
        text: "Inmiddels staan de zes pony’s weer veilig achter het draad en zijn ze gezond. “We zijn blij dat ze weer terug zijn. Nu is het afkloppen dat dat zo blijft.”",
      },
    ],

    aiSummary: [
      {
        type: "paragraph",
        text: "Zes shetlandpony’s die zondagavond in Haaren ontsnapten en zelfs door de politie werden gefilmd terwijl ze door de sneeuw over een fietspad liepen, staan sinds maandagmiddag weer veilig in de wei. Pogingen van agenten om de dieren terug te brengen mislukten, waarna de pony’s op de vlucht sloegen.",
      },
      {
        type: "paragraph",
        text: "Na ruim een dag in kou en sneeuw werden de dieren teruggevonden op een industrieterrein in Oisterwijk, zo’n 2,5 kilometer van hun wei. Met hulp van vrienden en politie liepen ze rustig terug en kregen ze direct hooi.",
      },
      {
        type: "paragraph",
        text: "Volgens de eigenaar hebben de pony’s de kou goed doorstaan dankzij hun dikke wintervacht. De politie denkt dat vuurwerk de ontsnapping veroorzaakte. Inmiddels staan alle zes de pony’s weer veilig achter het draad en zijn ze gezond.",
      },
    ],
    aiKeyPoints: [
      "Zes pony’s ontsnapt in Haaren",
      "Politie filmde dieren op fietspad",
      "Pony’s dag spoorloos in sneeuw",
      "Teruggevonden in Oisterwijk",
      "Dieren weer veilig in wei",
    ],
    regionName: "Haaren",
    theme: "Nieuws & maatschappij",
    createdAt: "2026-01-05T00:15:00.000Z",
  },
  {
    _id: "ob-7",
    author: "Femke de Jong",
    title:
      "Bijzonder natuurfenomeen boven Tilburg: onweer tijdens een sneeuwbui",
    teaser:
      "Tilburg en omgeving kregen zaterdagochtend te maken met een zeldzaam natuurverschijnsel: sneeuwval in combinatie met onweer, ook wel thundersnow genoemd.",
    imageUrl:
      "https://api.omroepbrabant.nl/img/f/1024/576/0.50/0.50/cmV2aXNpb25zLzQ4MTQzOTAtMS5qcGc_c2U9MjA0NS0wMS0wMVQxMCUzQTQwJTNBMDBaJnNpZz1pJTJGNnRaenpPWDB0R2xIdTZTTlNOT2YzSkJwZ2dmJTJGa1FIeTJ6RG1lbEVXayUzRCZzcD1yJnNwcj1odHRwcyZzcj1iJnN0PTIwMjUtMDEtMDFUMTAlM0E0MCUzQTAwWiZzdj0yMDIwLTEwLTAy",

    contentBlocks: [
      {
        type: "paragraph",
        text: "Wakker worden in een witte wonderwereld is al bijzonder, maar wanneer het sneeuwt en tegelijkertijd onweert is dat extra speciaal. Dit zeldzame natuurfenomeen was zaterdagochtend te zien in Tilburg en omgeving.",
      },
      {
        type: "paragraph",
        text: "Volgens weerman Johnny Willemsen van Weerplaza is onweer tijdens een sneeuwbui zeer ongewoon. Het verschijnsel heeft zelfs een eigen naam: thundersnow. Wereldwijd wordt het gemiddeld slechts enkele keren per jaar waargenomen, waardoor het in Nederland soms jarenlang niet voorkomt.",
      },
      {
        type: "paragraph",
        text: "Voor thundersnow moeten bijzondere omstandigheden samenkomen. De lucht moet koud genoeg zijn om sneeuw te veroorzaken, maar diezelfde koude lucht bevat vaak te weinig temperatuurverschillen om normaal onweer mogelijk te maken. Juist die combinatie maakt het verschijnsel zo zeldzaam.",
      },
      {
        type: "paragraph",
        text: "Onweer met sneeuw verschilt sterk van een zomerse onweersbui. Sneeuwkristallen weerkaatsen de bliksem, waardoor deze veel feller lijkt en een witte tot goudkleurige gloed krijgt in plaats van het gebruikelijke blauwe of paarse licht.",
      },
      {
        type: "paragraph",
        text: "Daarnaast dempt de sneeuw de donder aanzienlijk. Het geluid reikt vaak niet verder dan drie tot vijf kilometer. Wie tijdens thundersnow donder hoort, doet er daarom verstandig aan direct een veilige plek op te zoeken.",
      },
    ],

    aiSummary: [
      {
        type: "paragraph",
        text: "Tilburg en omgeving werden zaterdagochtend getrakteerd op een zeldzaam natuurverschijnsel: sneeuwval gecombineerd met onweer, ook wel thundersnow genoemd. Dit fenomeen ontstaat slechts onder uitzonderlijke weersomstandigheden en komt wereldwijd maar enkele keren per jaar voor.",
      },
      {
        type: "paragraph",
        text: "Volgens weerman Johnny Willemsen vereist thundersnow een delicate balans tussen koude lucht die sneeuw mogelijk maakt en voldoende instabiliteit voor onweer, een combinatie die in Nederland zelden voorkomt. Daardoor kunnen er soms jarenlang geen waarnemingen zijn.",
      },
      {
        type: "paragraph",
        text: "Thundersnow verschilt sterk van zomeronweer. Door de reflectie van sneeuwkristallen oogt de bliksem opvallend fel en wit tot goudkleurig, terwijl de sneeuw de donder juist sterk dempt. Wie tijdens dit verschijnsel donder hoort, bevindt zich meestal dicht bij de inslag en moet daarom snel beschutting zoeken.",
      },
    ],
    aiKeyPoints: [
      "Zeldzaam verschijnsel waargenomen in Tilburg",
      "Sneeuwval en onweer tegelijk",
      "Fenomeen heet thundersnow",
      "Komt wereldwijd maar enkele keren per jaar voor",
      "Bliksem feller, donder sterk gedempt",
    ],
    regionName: "Tilburg",
    theme: "Natuur & milieu",
    createdAt: "2026-01-05T09:00:00.000Z",
  },
  {
    _id: "ob-8",
    author: "Leon Voskamp",
    title: "Dit voetbalteam presteert het beste van heel Nederland",
    teaser:
      "DVS uit Aalst werd kampioen na een 6-0 zege op Waalre en is dit seizoen het best presterende eerste elftal van Nederland: 17 wedstrijden, 17 zeges en een enorme doelsaldo.",
    imageUrl:
      "https://api.omroepbrabant.nl/img/f/768/432/0.34/0.41/bWVkaWEvcHJvZC80Njc1MDgwLmpwZz9zdj0yMDE5LTA3LTA3JnN0PTIwMjAtMDEtMDFUMDAlM0EwMCUzQTAwWiZzZT0yMDQwLTAxLTAxVDAwJTNBMDAlM0EwMFomc3I9YiZzcD1yJnNpZz1yN3k3NEZ6ZGs2eEQwSTlRdWhJQnAlMkZoemRiNHgxeE9uUEl5M3I1NTBXakklM0Q=",

    contentBlocks: [
      {
        type: "paragraph",
        text: "DVS uit Aalst pakte zondagmiddag na een 6-0 overwinning op Waalre de titel in de vijfde klasse F. De ploeg van trainer Mike de Louw (40) is daarmee dit seizoen het best presterende eerste elftal van Nederland. Het team is namelijk zonder puntverlies en hoopt die reeks de rest van het seizoen vol te houden. “We willen geschiedenis schrijven”, zegt de trainer.",
      },
      {
        type: "paragraph",
        text: "17 wedstrijden gespeeld, 51 punten. DVS staat ongeslagen bovenaan en scoorde al 105 keer met maar 19 tegengoals. “Het is een topseizoen. We spelen goed, winnen alles en scoren heel veel. Met ook nog eens mooie doelpunten”, zegt de trainer.",
      },
      {
        type: "paragraph",
        text: "“We hebben gewoon een hele goede groep met bijna allemaal echte DVS-jongens. Een aantal jonge gasten, maar ook wat oudere spelers die vroeger bij DVS speelden en zijn teruggekomen. Als ik iemand moet wisselen, dan gaat niet het team slechter spelen. Jongens die hier op de bank zitten, zouden bij een competitiegenoot in de basis staan. En nee, er is geen enkele speler die we betalen.”",
      },
      {
        type: "paragraph",
        text: "Door Vriendschap Saamgebracht (DVS) is meerdere maatjes te groot voor de concurrentie en won bijvoorbeeld al met 13-0. “Ik moet wel zeggen dat er twee vijfde klassen zijn in deze regio en deze wat zwakker is dan de andere. Er zitten in onze competitie teams die blij zijn dat ze een elftal op de been krijgen. Wij willen tegen iedere tegenstander zoveel mogelijk scoren en spelen heel aanvallend. Daardoor krijgen we ook weleens onnodige goals tegen.”",
      },
      {
        type: "paragraph",
        text: "Er wachten nog drie wedstrijden die voor de stand niet meer belangrijk zijn. Mike wil van verslappen echter niets weten. “We gaan voor zestig punten in twintig wedstrijden en we willen zoveel mogelijk scoren. Je kunt geschiedenis schrijven, dat leeft in onze groep.”",
      },
      {
        type: "paragraph",
        text: "Dit kampioenschap is een hoogtepunt in de trainerscarrière van Mike. De club waar hij zelf voetbalde en op 15-jarige leeftijd als jeugdtrainer startte. Na wat uitstapjes bij andere clubs keerde Mike vier jaar geleden terug op het oude nest.",
      },
      {
        type: "paragraph",
        text: "“De trainer van het tweede elftal stopte en de jongens wilden dat ik het over zou nemen. Er was wel een afspraak met het bestuur dat ze als eerste met mij gingen praten als de hoofdtrainer zou stoppen. Drie jaar geleden heb ik het overgenomen.”",
      },
      {
        type: "paragraph",
        text: "“Vorig seizoen werden we tweede met een ruime achterstand op de kampioen. Onze doelstelling dit seizoen was de titel. Dat we nu al kampioen zijn met de club waar mijn roots liggen, maakt het extra mooi.”",
      },
      {
        type: "paragraph",
        text: "En dus wacht volgend seizoen de vierde klasse. “Dat durf ik zeker aan met deze selectie. We hebben oefenwedstrijden gespeeld tegen derdeklassers die we maar nipt verloren. Afhankelijk van in welke klasse we worden ingedeeld, kunnen we misschien wel meedoen om de bovenste plaatsen of een periode. We hoeven niet bang te zijn om direct weer te degraderen.”",
      },
    ],

    aiSummary: [
      {
        type: "paragraph",
        text: "DVS uit Aalst is kampioen geworden in de vijfde klasse F na een overtuigende 6-0 zege op Waalre. Met die titel is de ploeg van trainer Mike de Louw ook het best presterende eerste elftal van Nederland dit seizoen: na 17 wedstrijden heeft DVS nog geen punt laten liggen en wil het die perfecte reeks tot het einde vasthouden.",
      },
      {
        type: "paragraph",
        text: "De cijfers zijn uitzonderlijk: 51 punten uit 17 duels, 105 doelpunten voor en slechts 19 tegen. De Louw schrijft het succes toe aan een brede selectie met veel ‘echte DVS-jongens’, aangevuld met teruggekeerde spelers. Volgens hem is de kwaliteit zo gelijkmatig dat wissels het niveau niet verlagen, en hij benadrukt dat er geen spelers betaald worden.",
      },
      {
        type: "paragraph",
        text: "Hoewel de trainer erkent dat de competitie relatief zwak is, kiest DVS bewust voor een zeer aanvallende speelstijl om zoveel mogelijk te scoren, wat soms ook onnodige tegengoals oplevert. Met nog drie wedstrijden te gaan wil De Louw niet verslappen: het doel is zestig punten uit twintig wedstrijden en een historisch doelsaldo.",
      },
      {
        type: "paragraph",
        text: "Voor De Louw is het kampioenschap een hoogtepunt, mede omdat hij bij DVS is opgegroeid en er al jong als jeugdtrainer begon. Volgend seizoen speelt de club in de vierde klasse. De trainer denkt dat zijn selectie dat niveau aankan en zelfs kan meedoen om een periode, en hij verwacht niet dat DVS meteen weer hoeft te vrezen voor degradatie.",
      },
    ],
    aiKeyPoints: [
      "DVS uit Aalst pakt titel na 6-0 op Waalre",
      "Team wint 17 van 17 en heeft 51 punten",
      "Doelsaldo: 105 voor en 19 tegen",
      "Trainer: niemand wordt betaald, selectie is breed",
      "Doel: zestig punten en recordseizoen afmaken",
    ],
    regionName: "Aalst",
    theme: "Sport",
    createdAt: "2025-04-13T16:45:00.000Z",
  },
];
