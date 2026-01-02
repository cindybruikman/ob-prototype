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
  aiSummary: string[];
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
      "Na recente uitbraken van vogelgriep in Brabant zijn opnieuw grote aantallen dieren geruimd. In Deurne moesten 162.000 vleeskuikens worden afgemaakt, eerder deze maand nog eens 80.000 bij een bedrijf in Uitwijk. De maatregelen zijn bedoeld om verdere verspreiding van het zeer besmettelijke virus te voorkomen.",

      "Vogelgriep komt bij vrijwel alle vogelsoorten voor en kan zich verspreiden via direct contact, de lucht en besmet materiaal. Wilde trekvogels spelen een belangrijke rol in het verspreiden van het virus. Besmette vogels worden ernstig ziek of sterven, afhankelijk van de variant van het virus.",

      "Voor mensen is besmetting zeldzaam en meestal mild, maar huisdieren zoals katten kunnen ernstig ziek worden. Daarom gelden er strenge maatregelen, waaronder een landelijke ophokplicht voor pluimvee, hobbykippen en watervogels. Wedstrijden en tentoonstellingen met deze dieren zijn voorlopig verboden.",

      "Volgens experts vormt besmet voedsel geen risico voor mensen. Vlees en eieren van besmette dieren komen niet in de winkel terecht en er is geen bewijs dat vogelgriep via voeding wordt overgedragen. Waakzaamheid en naleving van de maatregelen blijven essentieel om verdere uitbraken te voorkomen.",
    ],

    aiKeyPoints: [
      "Vogelgriep vastgesteld bij pluimveebedrijven in Brabant",
      "Ruiming van 242.000 vleeskuikens uitgevoerd",
      "Virus zeer besmettelijk onder vogels",
      "Zeldzaam overdraagbaar van vogel op mens",
      "Ophokplicht geldt voor pluimvee en hobbydieren",
    ],
    regionName: "Eindhoven",
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
        text: "Gevaarlijk land\nCongo is een land waar geweld en instabiliteit aan de orde van de dag zijn. “Het is een gevaarlijk land, er gebeuren vreselijke dingen.” Gracia's moeder wil niet dat haar dochter daar opgroeit en zet alles op alles om haar een betere toekomst te geven. In 2015, als Gracia 19 jaar oud is, emigreert ze naar Oekraïne om daar geneeskunde te studeren.",
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
        text: "Oorlog\nIn het laatste jaar van Gracia’s studie breekt de oorlog in Oekraïne uit. Voor Gracia volgt een onzekere tijd. Haar allerlaatste examen kon ze op dat moment niet maken. De oorlog doorkruist de toekomst die zij voor ogen had: aan de slag gaan als arts in Oekraïne. “Ik voelde me verloren en wist niet goed wat ik moest doen.",
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
      "Gracia Katombe Nkulu vluchtte uit Congo om in Oekraïne arts te worden. Na het overlijden van haar ouders zette zij haar studie voort met hulp van een gastgezin. Vlak voor haar afstuderen brak de oorlog uit, waardoor zij via Polen naar Nederland vluchtte en haar diploma hier afrondde.",

      "In Nederland kan zij met haar diploma niet direct als arts werken. Ze moet een langdurig erkenningstraject doorlopen en een hoog niveau Nederlands behalen. Om rond te komen werkte ze in een supermarkt en begon later via een speciaal traject in de ouderenzorg in Eindhoven.",

      "Juist toen zij haar plek begon te vinden, verloor zij haar werkvergunning door gewijzigde regels rond Oekraïense vluchtelingen. Ze moest stoppen met werken en raakte zonder inkomen, terwijl haar toekomst opnieuw onzeker werd.",

      "Gracia heeft inmiddels asiel aangevraagd en mag voorlopig blijven. Een nieuwe werkvergunning wordt op zijn vroegst in 2026 verwacht. Ondanks alles blijft zij vastbesloten om in de zorg te werken en haar leven in Nederland op te bouwen.",
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
      "Het structurele probleem ligt volgens hem vooral bij het ontbreken van helder beleid rond AI-gebruik binnen organisaties. Wanneer regels vaag of afwezig zijn, gaan medewerkers eigen keuzes maken met grote gevolgen voor privacy en veiligheid. Hij waarschuwt dat veel bedrijven zich nog onvoldoende hebben aangepast aan het AI-tijdperk: 'Ik vrees dat we in een tijd leven waarin heel veel data op straat terechtkomt.'",
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
      "Bas Zijlmans uit Oisterwijk is een petitie gestart tegen plannen voor een McDonald's met drive-thru naast de beschermde bossen en vennen van zijn woonplaats. Binnen korte tijd verzamelden zich meer dan 9000 handtekeningen. Voor Bas staat vast dat een fastfoodrestaurant op deze locatie onaanvaardbare schade zou veroorzaken aan natuur, dieren en de rust van het gebied.",

      "Oisterwijk staat bekend als 'de parel in het groen' en vormt voor veel inwoners een belangrijke plek voor ontspanning en natuurbeleving. Bas wijst op de verwachte gevolgen van afval, verkeersdrukte, geluidsoverlast en lucht- en lichtvervuiling. Volgens hem zou dit het kwetsbare ecosysteem rondom het bosgebied ernstig aantasten.",

      "Hoewel Bas fel tegen de plannen is, staat hij open voor alternatieve ideeën die beter passen bij het gebied, zoals voorzieningen voor natuurfotografen of jongeren. Het voorstel van de projectontwikkelaar ligt momenteel bij de gemeente. Na de jaarwisseling wil hij het gesprek aangaan met alle betrokken partijen.",

      "Voor Bas is het belangrijk dat dit gesprek respectvol verloopt, ook richting de projectontwikkelaar. Zijn actie is niet bedoeld als persoonlijke aanval, maar als poging om een natuurgebied te beschermen dat voor veel inwoners van grote waarde is.",
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
];
