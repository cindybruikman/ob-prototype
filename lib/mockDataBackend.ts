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
  updatedAt?: string;
  imageUrl?: string;
}

export const backendMockArticles: BackendArticle[] = [
  {
    _id: "ob-1",
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
      "Gracia Katombe Nkulu vluchtte uit Congo, studeerde geneeskunde in Oekraïne en probeert nu in Nederland haar plek te vinden in de zorg, terwijl ze wacht op duidelijkheid over haar verblijfsstatus.",
    ],
    aiKeyPoints: [
      "Gracia vluchtte uit Congo en studeerde geneeskunde in Oekraïne",
      "Door de oorlog kwam ze in Nederland terecht",
      "Ze werkt in de ouderenzorg maar mag nu niet meer werken",
      "Haar asielprocedure loopt nog",
    ],
    regionName: "Eindhoven",
    theme: "Nieuws & maatschappij",
    createdAt: "2025-01-10T13:30:00Z",
    updatedAt: "2025-01-10T13:54:00Z",
  },
  {
    _id: "ob-2",
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
    regionName: "",
    theme: "",
    createdAt: "",
  },
  {
    _id: "ob-3",
    author: "Omroep Brabant",
    title:
      "Datalek Eindhoven met kwetsbare burgers: 'Verwijderverzoek is kansloos'",
    teaser:
      "De 29-jarige Gracia Katombe Nkulu vluchtte uit Congo om arts te worden. Via Oekraïne kwam ze uiteindelijk in Nederland terecht.",
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
        text: "Vooropgesteld: het is niet slim om persoonsgegevens te uploaden in AI-tools, stelt AI-expert Dimitri van Iersel van Omroep Brabant. Maar het is lastig om te bepalen wat precies de gevolgen zijn.",
      },
      {
        type: "paragraph",
        text: "We weten nog niet in hoeverre dit een probleem gaat zijn. De gegevens die zijn ingevoerd staan nu misschien wel op een server ergens buiten Europa. Als daar ooit een datalek plaatsvindt, ligt alles op straat. Dat risico speelt bij alle software- en cloudservices waar je gegevens in stopt.",
      },
      {
        type: "paragraph",
        text: "In het geval van de gemeente Eindhoven ligt het extra gevoelig omdat het gaat om gegevens van kwetsbare burgers.",
      },
      {
        type: "paragraph",
        text: "Strategisch en juridisch adviesbureau Hooghiemstra & Partners deed onderzoek naar het datalek. Uit hun bevindingen blijkt dat het onder meer gaat om documenten uit de Jeugdwet met daarin informatie over de mentale en fysieke gezondheid van minderjarige kinderen. Ook het burgerservicenummer en soms zelfs een foto van het kind zijn onderdeel van het dossier.",
      },
      {
        type: "paragraph",
        text: "Daarnaast zijn ook documenten uit de Wet Maatschappelijke Ondersteuning ingevoerd, met gegevens over diagnoses, verslavingen en schulden, inclusief naam, adres, woonplaats en burgerservicenummer.",
      },
      {
        type: "paragraph",
        text: "Ook cv’s van sollicitanten en interne reflectieverslagen met informatie over werkprestaties zijn in de AI-tool terechtgekomen.",
      },
      {
        type: "paragraph",
        text: "Als data eenmaal in een trainingsmodel zit, dan is die data niet meer te verwijderen. Data kan zijn meegenomen in trainingsdata voor toekomstige modellen. Zodra het model is afgerond, is die informatie praktisch onomkeerbaar verspreid.",
      },
      {
        type: "paragraph",
        text: "Gemeente Eindhoven heeft OpenAI gevraagd om de gegevens te verwijderen, maar volgens Van Iersel is zo’n poging kansloos. Alleen binnen zeer korte tijd na invoer is verwijdering soms nog mogelijk.",
      },
      {
        type: "paragraph",
        text: "Hoewel directe risico’s klein zijn omdat AI-modellen patronen leren en geen dossiers tonen, blijft misbruik mogelijk bij grote hoeveelheden specifieke persoonsgegevens. Denk aan fraude of phishing.",
      },
      {
        type: "paragraph",
        text: "Het gebrek aan duidelijke regels en beleid rond AI-gebruik is volgens Van Iersel het grootste probleem. Als regels vaag zijn, gaan medewerkers zelf bepalen wat kan en mag.",
      },
      {
        type: "paragraph",
        text: "Hij waarschuwt dat veel organisaties nog onvoldoende zijn voorbereid op het AI-tijdperk en dat er in de toekomst waarschijnlijk veel meer data zal uitlekken.",
      },
    ],
    aiSummary: [
      "Bij de gemeente Eindhoven zijn opnieuw ernstige privacyproblemen vastgesteld. Medewerkers hebben vertrouwelijke persoonsgegevens ingevoerd in openbare AI-tools zoals ChatGPT. Het gaat onder meer om documenten uit de Jeugdwet en de WMO, met medische gegevens, diagnoses, schulden, adressen en burgerservicenummers van kwetsbare burgers en minderjarige kinderen. Ook sollicitatie-cv’s en interne beoordelingsdocumenten zijn in de AI-systemen terechtgekomen. De gemeente stond eerder al onder verscherpt toezicht van de Autoriteit Persoonsgegevens vanwege eerdere datalekken.",
      "Volgens AI-expert Dimitri van Iersel is het vrijwel onmogelijk om deze informatie volledig te verwijderen zodra zij onderdeel wordt van AI-training. 'Als data eenmaal in een trainingsmodel zit, dan is die data niet meer te verwijderen.' Een verwijderverzoek bij OpenAI heeft volgens hem alleen kans van slagen binnen zeer korte tijd na invoer; daarna is de data feitelijk onomkeerbaar verspreid binnen modellen. De gemeente Eindhoven heeft een dergelijk verzoek gedaan, maar ontving tot nu toe geen reactie.",
      "Hoewel directe risico’s voor betrokkenen klein lijken omdat AI-modellen patronen leren en geen dossiers tonen, blijft misbruik mogelijk wanneer grote hoeveelheden specifieke informatie over personen in trainingsdata terechtkomen. Dat kan leiden tot phishing, fraude of identiteitsmisbruik. Van Iersel benadrukt dat organisaties altijd moeten aannemen dat ingevoerde data kan uitlekken, zeker bij gebruik van externe software en cloudsystemen.",
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
    theme: "Nieuws & maatschappij",
    createdAt: "2025-01-10T13:30:00Z",
    updatedAt: "2025-01-10T13:54:00Z",
  },
];
