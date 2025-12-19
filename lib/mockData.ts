export interface Article {
  id: string;
  title: string;
  summary: string;
  keyPoints: string[];
  fullContent: string;
  location: string;
  category: string;
  imageUrl: string;
  publishedAt: string;
  updatedAt: string;
  isNew?: boolean;
  isTrending?: boolean;
}

export interface WeeklyRecapCategory {
  id: string;
  name: string;
  icon: string;
  articles: Article[];
}

export const mockArticles: Article[] = [
  {
    id: "1",
    title: "Politie zoekt getuigen mishandeling in Spoorzone",
    summary:
      "De politie is op zoek naar getuigen van een mishandeling die afgelopen zaterdagnacht plaatsvond in de Spoorzone. Het slachtoffer raakte gewond en is naar het ziekenhuis gebracht.",
    keyPoints: [
      "Mishandeling vond plaats zaterdagnacht rond 02:30 uur",
      "Slachtoffer is een 28-jarige man uit Tilburg",
      "Dader is nog voortvluchtig",
      "Politie vraagt getuigen zich te melden",
    ],
    fullContent:
      "De politie is op zoek naar getuigen van een mishandeling die afgelopen zaterdagnacht plaatsvond in de Spoorzone in Tilburg. Het incident gebeurde rond 02:30 uur nabij het station.\n\nHet slachtoffer, een 28-jarige man uit Tilburg, raakte gewond en is naar het ziekenhuis gebracht. Volgens de politie was er sprake van een conflict dat escaleerde.\n\nDe dader is nog voortvluchtig. Het gaat om een man van ongeveer 1.80 meter lang met een donkere jas. De politie vraagt getuigen of mensen met camerabeelden zich te melden via 0900-8844.",
    location: "Tilburg",
    category: "Nieuws & maatschappij",
    imageUrl: "",
    publishedAt: "Vandaag om 14:30",
    updatedAt: "Aangepast om 15:45",
    isNew: true,
  },
  {
    id: "2",
    title: "Grote brand bij bedrijfspand, geen gewonden",
    summary:
      "Bij een bedrijfspand aan de industrieweg is vannacht een grote brand uitgebroken. De brandweer was uren bezig met blussen. Er zijn geen gewonden gevallen.",
    keyPoints: [
      "Brand ontstond rond 03:00 uur vannacht",
      "Meerdere brandweerkorpsen ingezet",
      "Geen gewonden gemeld",
      "Oorzaak wordt onderzocht",
    ],
    fullContent:
      "Bij een bedrijfspand aan de Industrieweg in Eindhoven is vannacht een grote brand uitgebroken. De brandweer rukte met groot materieel uit en was uren bezig met het blussen van de vlammen.\n\nDe brand werd rond 03:00 uur gemeld door een voorbijganger. Bij aankomst van de brandweer stond het pand al volledig in brand. Meerdere korpsen uit de regio werden opgeroepen om te assisteren.\n\nGelukkig vielen er geen gewonden. Het pand is wel volledig verwoest. De oorzaak van de brand wordt nog onderzocht door de politie en brandweer.",
    location: "Eindhoven",
    category: "Nieuws & maatschappij",
    imageUrl: "",
    publishedAt: "Vandaag om 08:15",
    updatedAt: "Aangepast om 11:30",
  },
  {
    id: "3",
    title: "RKC pakt belangrijke winst in degradatiestrijd",
    summary:
      "RKC Waalwijk heeft een cruciale overwinning geboekt in de strijd tegen degradatie. De ploeg won met 2-1 van concurrent Excelsior.",
    keyPoints: [
      "Eindstand: RKC 2-1 Excelsior",
      "Doelpunten van Kramer en Bel Hassani",
      "RKC klimt naar 15e plaats",
      "Nog 4 wedstrijden te spelen dit seizoen",
    ],
    fullContent:
      "RKC Waalwijk heeft zaterdagavond een cruciale overwinning geboekt in de strijd tegen degradatie uit de Eredivisie. In eigen huis werd concurrent Excelsior met 2-1 verslagen.\n\nMichiel Kramer opende de score in de 34e minuut met een kopbal. Na rust maakte Excelsior gelijk, maar invaller Bel Hassani schoot RKC in de 78e minuut naar de winst.\n\nDoor deze overwinning klimt RKC naar de 15e plaats, net boven de degradatiestreep. Er zijn nog vier wedstrijden te spelen dit seizoen.",
    location: "Waalwijk",
    category: "Sport",
    imageUrl: "",
    publishedAt: "Gisteren om 22:45",
    updatedAt: "",
  },
  {
    id: "4",
    title: "ASML breidt uit met 800 nieuwe banen",
    summary:
      "Chipmachinefabrikant ASML kondigt een grote uitbreiding aan. Het bedrijf creëert 800 nieuwe banen in de regio Eindhoven.",
    keyPoints: [
      "800 nieuwe banen gecreëerd",
      "Uitbreiding van productiecapaciteit",
      "Investering van €2 miljard",
      "Bouw start volgend jaar",
    ],
    fullContent:
      "Chipmachinefabrikant ASML heeft aangekondigd dat het bedrijf 800 nieuwe banen creëert in de regio Eindhoven. De uitbreiding is onderdeel van een investering van €2 miljard in nieuwe productiecapaciteit.\n\nDe nieuwe faciliteiten zullen worden gebouwd op de bestaande campus in Veldhoven. De bouw start naar verwachting volgend jaar en moet in 2026 klaar zijn.\n\nDe nieuwe banen zijn vooral voor technici, engineers en productiemedewerkers. ASML werkt samen met regionale opleidingsinstituten om voldoende gekwalificeerd personeel te vinden.",
    location: "Eindhoven",
    category: "Bedrijven & innovatie",
    imageUrl: "",
    publishedAt: "Vandaag om 10:00",
    updatedAt: "",
    isTrending: true,
  },
  {
    id: "5",
    title: "Nieuw park opent in centrum Breda",
    summary:
      "Het vernieuwde Valkenbergpark in Breda is officieel geopend. Het park heeft nieuwe speeltuinen, wandelpaden en een horecapaviljoen.",
    keyPoints: [
      "Park is volledig gerenoveerd",
      "Nieuwe speeltuinen voor kinderen",
      "Horecapaviljoen met terras",
      "Gratis toegankelijk",
    ],
    fullContent:
      "Het Valkenbergpark in het centrum van Breda is na een grondige renovatie weer open voor publiek. Het park heeft een complete metamorfose ondergaan met nieuwe voorzieningen voor alle leeftijden.\n\nDe renovatie omvat nieuwe speeltuinen voor kinderen, verbeterde wandelpaden en een nieuw horecapaviljoen met terras. Ook is er meer groen aangeplant en zijn de vijvers schoongemaakt.\n\nDe opening werd verricht door burgemeester Depla. Het park is gratis toegankelijk en dagelijks geopend van zonsopgang tot zonsondergang.",
    location: "Breda",
    category: "Nieuws & maatschappij",
    imageUrl: "",
    publishedAt: "Gisteren om 16:00",
    updatedAt: "",
  },
  {
    id: "6",
    title: "Marathon Eindhoven trekt recordaantal deelnemers",
    summary:
      "De Marathon Eindhoven heeft dit jaar een recordaantal van 35.000 deelnemers. De organisatie spreekt van een groot succes.",
    keyPoints: [
      "35.000 deelnemers, een record",
      "Winnaar liep 2:08:34",
      "Perfect weer voor hardlopen",
      "Volgend jaar uitbreiding capaciteit",
    ],
    fullContent:
      "De Marathon Eindhoven heeft zondag een recordaantal deelnemers getrokken. In totaal namen 35.000 lopers deel aan de verschillende afstanden, van de volledige marathon tot de kids run.\n\nDe winnaar bij de mannen finishte in een tijd van 2:08:34. Bij de vrouwen werd gewonnen in 2:24:12. Het weer was ideaal voor hardlopen met temperaturen rond de 12 graden.\n\nDe organisatie kijkt terug op een geslaagd evenement en overweegt om volgend jaar de capaciteit verder uit te breiden.",
    location: "Eindhoven",
    category: "Sport",
    imageUrl: "",
    publishedAt: "Zondag om 18:30",
    updatedAt: "",
  },
];

export const weeklyRecapCategories: WeeklyRecapCategory[] = [
  {
    id: "1",
    name: "Nieuws & maatschappij",
    icon: "newspaper",
    articles: mockArticles.filter(
      (a) => a.category === "Nieuws & maatschappij"
    ),
  },
  {
    id: "2",
    name: "Sport",
    icon: "trophy",
    articles: mockArticles.filter((a) => a.category === "Sport"),
  },
  {
    id: "3",
    name: "Bedrijven & innovatie",
    icon: "briefcase",
    articles: mockArticles.filter(
      (a) => a.category === "Bedrijven & innovatie"
    ),
  },
];

export const availableLocations = [
  "Amsterdam",
  "Rotterdam",
  "Den Haag",
  "Utrecht",
  "Eindhoven",
  "Tilburg",
  "Groningen",
  "Almere",
  "Breda",
  "Nijmegen",
  "Waalwijk",
  "Apeldoorn",
  "Enschede",
  "Haarlem",
  "Arnhem",
];

export const radiusOptions = [5, 10, 15, 25, 50];
