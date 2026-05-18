export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category?: 'Fysica' | 'Anatomie' | 'Veiligheid';
  imageContext?: string;
}

export const questions: Question[] = [
  {
    id: 1,
    category: 'Fysica',
    question: "Het verschil tussen een turbo gradiënt echo en een 'gewone' gradiënt echo is...",
    options: [
      "je niet op de steady state hoeft te wachten bij de turbo gradient echo",
      "beide antwoorden zijn goed",
      "je gebruik maakt van een flipanglesweep bij de gewone gradiënt echo"
    ],
    correctAnswer: 0,
    explanation: "Bij turbo-sequenties wordt vaak een voorbereidingspuls gebruikt om contrast te creëren voordat de eigenlijke meting begint, waardoor je niet hoeft te wachten op de steady state."
  },
  {
    id: 2,
    category: 'Fysica',
    question: "Om intravoxeldefasering te voorkomen wordt gekozen voor ...",
    options: [
      "grote voxels, korte TE.",
      "kleine voxels, korte TE.",
      "kleine voxels, lange TE."
    ],
    correctAnswer: 1,
    explanation: "Kleine voxels verminderen de spreiding van precessiefrequenties binnen het volume, en een korte TE beperkt de tijd waarin defasering kan optreden."
  },
  {
    id: 3,
    category: 'Fysica',
    question: "Het toepassen van half scan bij een single shot tse heeft hoofdzakelijk als reden....",
    options: [
      "een kortere TR.",
      "een kortere scantijd.",
      "een korte TE effectief"
    ],
    correctAnswer: 2,
    explanation: "Bij Single Shot TSE (zoals HASTE) zorgt Half Scan (Partial Fourier) ervoor dat de echo-trein korter is, wat een kortere effectieve TE mogelijk maakt."
  },
  {
    id: 4,
    category: 'Anatomie',
    question: "Een abces geeft op de DWI en ADC opnamen respectievelijk .....",
    options: [
      "een hoge signaalintensiteit, een lage signaalintensiteit.",
      "een lage signaalintensiteit, een hoge signaalintensiteit.",
      "een hoge signaalintensiteit, een hoge signaalintensiteit."
    ],
    correctAnswer: 0,
    explanation: "Een abces vertoont beperkte diffusie: dit resulteert in een hoog signaal op DWI en een laag signaal (donker) op de ADC-map."
  },
  {
    id: 5,
    category: 'Fysica',
    question: "Lorentz krachten veroorzaken...",
    options: [
      "meer PNS.",
      "een hoger SAR.",
      "het lawaai."
    ],
    correctAnswer: 2,
    explanation: "De interactie tussen de stroom in de gradiëntspoelen en het statische magneetveld veroorzaakt trillingen (Lorentzkrachten), wat het kenmerkende lawaai van de MRI produceert."
  },
  {
    id: 6,
    category: 'Fysica',
    question: "Contrastaanleuring met cardiale MRI is het gevolg van:",
    options: [
      "Verkorting van T1 relaxatietijd van weefsel waar Gd-contrast is",
      "Verlenging van T1 relaxatietijd van weefsel waar Gd-contrast is",
      "Verkorting van T1 relaxatietijd van weefsel waar geen Gd-contrast is"
    ],
    correctAnswer: 0,
    explanation: "Gadolinium-gebaseerde contrastmiddelen verkorten de T1-relaxatietijd, wat resulteert in een hoger (helderder) signaal op T1-gewogen beelden."
  },
  {
    id: 7,
    category: 'Fysica',
    question: "Hoe groot is de scanmatrix bij een 2D single slice SE met TR=200ms, scan%=50% en scantijd 64s?",
    options: [
      "512 x 512.",
      "128 x 128.",
      "256 x 256."
    ],
    correctAnswer: 2,
    explanation: "Op basis van de opgegeven scantijd en parameters wordt de matrix berekend als 256x256."
  },
  {
    id: 8,
    category: 'Fysica',
    question: "In de EPI sequentie hebben we veel last van WFS omdat .....",
    options: [
      "de frequentie codeer gradiënt zeer zwak is.",
      "de fase codeer gradiënt zeer zwak is.",
      "beide gradiënten zeer zwak zijn."
    ],
    correctAnswer: 1,
    explanation: "Bij Echo Planar Imaging (EPI) is de effectieve bandbreedte in de faserichting zeer laag, waardoor 'Water-Fat Shift' (WFS) daar prominent aanwezig is."
  },
  {
    id: 9,
    category: 'Fysica',
    question: "Welke weging wordt verkregen bij: TR=100ms, TE=5ms, fliphoek =70°?",
    options: [
      "T1 weging.",
      "T2* weging.",
      "T2 weging."
    ],
    correctAnswer: 0,
    explanation: "Een korte TR, korte TE en een relatief grote fliphoek bij een gradiënt echo sequentie resulteren in T1-weging."
  },
  {
    id: 10,
    category: 'Veiligheid',
    question: "Hoe kun je het protocol aanpassen om metaalartefacten (bijv. bij een claviculaplaatje) te verminderen?",
    options: [
      "Alle antwoorden zijn goed",
      "Gebruik bij voorkeur SE in plaats van GE",
      "Hogere bandbreedte, grotere matrix, dunnere coupes"
    ],
    correctAnswer: 1,
    explanation: "Spin Echo (SE) sequenties zijn veel minder gevoelig voor inhomogeniteiten veroorzaakt door metaal dan Gradiënt Echo (GE). Ook een hoge bandbreedte helpt."
  },
  {
    id: 11,
    category: 'Anatomie',
    question: "Wervelmetastasen hebben over het algemeen...",
    options: [
      "een lage signaalintensiteit op T1w en een hoge op T2w.",
      "een lage signaalintensiteit op T1w en een lage op T2w.",
      "een hoge signaalintensiteit op T1w en een hoge op T2w."
    ],
    correctAnswer: 0,
    explanation: "Metastasen vervangen vetrijk merg (hoog T1) door tumorweefsel met meer water, wat resulteert in een laag T1-signaal en vaak een hoog T2/STIR-signaal."
  },
  {
    id: 12,
    category: 'Veiligheid',
    question: "Het Fringe Field is het magnetisch veld...",
    options: [
      "buiten de opening van het MRI apparaat.",
      "in en buiten de opening van het MRI apparaat.",
      "in de opening van het MRI apparaat."
    ],
    correctAnswer: 0,
    explanation: "Het strooiveld (fringe field) is het magnetische veld dat zich buiten de bore van de magneet bevindt."
  },
  {
    id: 13,
    category: 'Veiligheid',
    question: "Peripheral nerve stimulation (PNS) wordt veroorzaakt door .....",
    options: [
      "het hoofdmagneetveld B0 samen met B1.",
      "de hoeveelheid RF-pulsen achter elkaar.",
      "de snelheid van het schakelen van de gradiënten."
    ],
    correctAnswer: 2,
    explanation: "Snelle variaties in magneetvelden (dB/dt) door het schakelen van de gradiënten kunnen elektrische stromen induceren in het lichaam die de zenuwen stimuleren."
  },
  {
    id: 14,
    category: 'Fysica',
    question: "Welk artefact uit zich als een (ruis)lijn midden in het beeld (vaak door RF-lek)?",
    options: [
      "Spike noise artefact",
      "Zipper artefact",
      "Gibbs artefact"
    ],
    correctAnswer: 1,
    explanation: "Een 'zipper artifact' wordt vaak veroorzaakt door externe RF-interferentie die de kooi van Faraday binnendringt."
  },
  {
    id: 15,
    category: 'Fysica',
    question: "Bij een 3D inflow angio wil je een hele korte TE hebben. Dit kan door:",
    options: [
      "partial echo.",
      "half scan.",
      "scan %."
    ],
    correctAnswer: 0,
    explanation: "Partial echo (of fractional echo) staat toe de data-acquisitie eerder te starten, wat de minimaal mogelijke TE verkort."
  },
  {
    id: 16,
    category: 'Veiligheid',
    question: "Wat is het voornaamste gevaar van vloeibaar Helium bij MRI?",
    options: [
      "Het is heel brandbaar.",
      "Het is toxisch.",
      "Het werkt verstikkend omdat het de lucht verdrijft."
    ],
    correctAnswer: 2,
    explanation: "Bij een quench ontsnapt heliumgas. Omdat het veel lichter is en een enorm volume inneemt, kan het zuurstof verdringen en verstikking veroorzaken."
  },
  {
    id: 17,
    category: 'Fysica',
    question: "Hoe krijg je een rechthoekig FOV (Rectangular FOV)?",
    options: [
      "De image pixels zijn rechthoekig gemaakt.",
      "Minder K-vlak lijnen worden gemeten met dezelfde lijnafstand.",
      "Het K-vlak wordt rechthoekig door een richting te verkleinen."
    ],
    correctAnswer: 1,
    explanation: "RFOV wordt bereikt door minder fasestappen te meten terwijl de resolutie (lijnafstand in K-space) gelijk blijft."
  },
  {
    id: 18,
    category: 'Anatomie',
    question: "Een haemangioom geeft op T1 en T2 sequenties respectievelijk een .....",
    options: [
      "hoge signaalintensiteit, lage signaalintensiteit.",
      "lage signaalintensiteit, hoge signaalintensiteit.",
      "hoge signaalintensiteit, hoge signaalintensiteit."
    ],
    correctAnswer: 1,
    explanation: "Hemangiomen zijn typisch hypointens op T1 en zeer hyperintens (helder) op T2-gewogen beelden."
  },
  {
    id: 19,
    category: 'Veiligheid',
    question: "Met betrekking tot veiligheid en MRI geldt het volgende:",
    options: [
      "ICD's mogen in de MRI scanner, zonder instellingen te wijzigen.",
      "De meeste moderne mechanische hartkleppen zijn veilig (MR conditional).",
      "Pacemakers mogen altijd in de MRI scanner."
    ],
    correctAnswer: 1,
    explanation: "Vrijwel alle moderne hartklepprothesen zijn veilig onder specifieke condities, terwijl actieve implantaten zoals ICD's strenge protocollen vereisen."
  },
  {
    id: 20,
    category: 'Fysica',
    question: "Bij welke ademhalingsfrequentie bedraagt de TR exact 4000ms bij respiratoire triggering?",
    options: [
      "12 ademhalingen per minuut.",
      "15 ademhalingen per minuut.",
      "20 ademhalingen per minuut."
    ],
    correctAnswer: 1,
    explanation: "60 seconden gedeeld door 4 seconden (4000ms) = 15 ademhalingen per minuut."
  },
  {
    id: 21,
    category: 'Fysica',
    question: "Een K-space shutter (reduced acquisition) bij een volume scan .....",
    options: [
      "vermindert de scantijd met behoud van centrale resolutie.",
      "verhoogt de SNR maar vermindert resolutie.",
      "heeft geen effect op de scantijd."
    ],
    correctAnswer: 0,
    explanation: "Een K-space shutter verwijdert de hoeken van de 3D K-space, wat de scantijd verkort zonder de effectieve resolutie in de hoofdrichtingen sterk aan te tasten."
  },
  {
    id: 22,
    category: 'Veiligheid',
    question: "De maximaal toegestane SAR (Specific Absorption Rate) in het hoofd is:",
    options: [
      "2 W/Kg",
      "3.2 W/Kg",
      "4 W/Kg"
    ],
    correctAnswer: 1,
    explanation: "De IEC-limiet voor SAR in het hoofd bedraagt 3,2 W/kg gemiddeld over 6 minuten."
  },
  {
    id: 23,
    category: 'Fysica',
    question: "Scan 1 (80% scan, 100% RFOV) vs Scan 2 (100% scan, 80% RFOV). Welke heeft de beste SNR?",
    options: [
      "Scan 1.",
      "Scan 2.",
      "Beide hebben dezelfde SNR."
    ],
    correctAnswer: 1,
    explanation: "Scan 2 heeft de beste SNR. Bij een RFOV van 80% is de voxelgrootte in de faserichting groter (bij gelijkblijvende matrix), wat een hogere SNR per voxel oplevert vergeleken met een 80% scan%."
  },
  {
    id: 24,
    category: 'Anatomie',
    question: "Welke spier maakt GEEN deel uit van de rotator cuff?",
    options: [
      "M. subscapularis",
      "M. deltoideus",
      "M. teres minor"
    ],
    correctAnswer: 1,
    explanation: "De rotator cuff bestaat uit de SITS-spieren: Supraspinatus, Infraspinatus, Teres minor en Subscapularis. De deltoideus is een oppervlakkige spier."
  },
  {
    id: 25,
    category: 'Anatomie',
    question: "Een vestibulair schwannoom gaat uit van de...",
    options: [
      "5de hersenzenuw (N. Trigeminus).",
      "8ste hersenzenuw (N. Vestibulocochlearis).",
      "1ste hersenzenuw (N. Olfactorius)."
    ],
    correctAnswer: 1,
    explanation: "Deze tumor (ook wel brughoektumor genoemd) ontstaat uit de Schwann-cellen van de nervus vestibulocochlearis (VIII)."
  },
  {
    id: 26,
    category: 'Anatomie',
    question: "Op een sagittale doorsnede van de hersenstam is het bolle middenstuk de:",
    options: [
      "corpus callosum.",
      "pons.",
      "medulla Oblongata."
    ],
    correctAnswer: 1,
    explanation: "De pons is het kenmerkende bolle gedeelte van de hersenstam, gelegen tussen het middenbrein en de medulla oblongata."
  },
  {
    id: 27,
    category: 'Anatomie',
    question: "Bij impingement van de schouder zit meestal deze pees bekneld:",
    options: [
      "M. subscapularis pees.",
      "M. infraspinatus pees.",
      "M. supraspinatus pees."
    ],
    correctAnswer: 2,
    explanation: "De pees van de M. supraspinatus is het vaakst betrokken bij subacromiaal impingement syndroom door zijn ligging onder het acromion."
  },
  {
    id: 28,
    category: 'Anatomie',
    question: "Een klassiek traumamechanisme voor MCL letsel (mediale band) is:",
    options: [
      "valgus",
      "hyperextensie",
      "varus"
    ],
    correctAnswer: 0,
    explanation: "Een valgus-trauma (waarbij de knie naar binnen wordt gedrukt) veroorzaakt rek en letsel aan de mediale collaterale band (MCL)."
  },
  {
    id: 29,
    category: 'Anatomie',
    question: "Meningeomen zijn...",
    options: [
      "goedaardige tumoren uitgaande van de hersenvliezen.",
      "goedaardige tumoren uit de cellen van Schwann.",
      "intrinsieke ruggenmergtumoren."
    ],
    correctAnswer: 0,
    explanation: "Meningeomen zijn meestal goedaardige, langzaam groeiende tumoren die ontstaan uit de arachnoidea-cellen van de meningen (hersenvliezen)."
  }
];
