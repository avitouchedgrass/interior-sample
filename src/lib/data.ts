export type Category = "Residential" | "Commercial" | "Hospitality";

export interface Project {
  id: string;
  index: string;
  title: string;
  category: Category;
  location: string;
  year: string;
  area: string;
  image: string;
  description: string;
}

const IMG = "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt";

export const IMAGES = {
  hero: `${IMG}/374c8964d150.webp`,
  heroAlt: `${IMG}/dd597c3a31c3.webp`,
  menuPreview: [
    `${IMG}/e4e4b980c64f.jpg`,
    `${IMG}/a17ec32d25df.jpg`,
    `${IMG}/29aa3f0d6938.jpg`,
    `${IMG}/f21c73086e59.jpg`,
    `${IMG}/a8c88bb112f6.jpg`,
  ],
  studioWide: `${IMG}/bf632a3e7a3a.png`,
  studioMaterials: `${IMG}/8b6b13fd23ee.jpeg`,
  studioMood: `${IMG}/7be97067a5b5.jpg`,
  studioPalette: `${IMG}/54c0d7aee837.jpg`,
  studioDesk: `${IMG}/35303afca145.jpg`,
  contactSide: `${IMG}/f7c6add6ac4b.jpg`,
  livingTall: `${IMG}/098476eb4d5a.jpg`,
};

export const LOCATIONS = ["Vadodara", "Ahmedabad", "Mumbai"];

export const PROJECTS: Project[] = [
  {
    id: "onyx-penthouse",
    index: "01",
    title: "The Onyx Penthouse",
    category: "Residential",
    location: "Worli, Mumbai",
    year: "2025",
    area: "6,400 sq.ft",
    image: `${IMG}/e4e4b980c64f.jpg`,
    description:
      "A sky-high residence wrapped in charcoal travertine, smoked oak and ribbed glass. We layered three tones of black so the light — not the palette — becomes the drama, ending every axis at a view of the Arabian Sea.",
  },
  {
    id: "casa-terra",
    index: "02",
    title: "Casa Terra",
    category: "Residential",
    location: "Alibaug, Maharashtra",
    year: "2025",
    area: "4,900 sq.ft",
    image: `${IMG}/098476eb4d5a.jpg`,
    description:
      "A weekend house that behaves like a courtyard home — lime plaster walls, terracotta floors cooled by ceiling fans, and furniture low enough to keep the horizon in every frame.",
  },
  {
    id: "ember-suite",
    index: "03",
    title: "The Ember Suite",
    category: "Hospitality",
    location: "Jaipur, Rajasthan",
    year: "2024",
    area: "1,150 sq.ft",
    image: `${IMG}/7b6526375bb2.jpg`,
    description:
      "A boutique hotel suite lit entirely at 2200K. Quilted velvet, hand-brushed brass and a reading nook carved into the bay window — designed for guests who never want to check out.",
  },
  {
    id: "velvet-nocturne",
    index: "04",
    title: "Velvet Nocturne",
    category: "Residential",
    location: "Juhu, Mumbai",
    year: "2024",
    area: "2,800 sq.ft",
    image: `${IMG}/a17ec32d25df.jpg`,
    description:
      "A primary bedroom conceived as a midnight salon — aubergine velvet, a scalloped plaster headboard wall and lighting scenes choreographed like a slow dimmer cue in a theatre.",
  },
  {
    id: "atelier-celeste",
    index: "05",
    title: "Atelier Céleste",
    category: "Hospitality",
    location: "Bandra, Mumbai",
    year: "2025",
    area: "3,200 sq.ft",
    image: `${IMG}/f21c73086e59.jpg`,
    description:
      "A 42-cover fine-dining room where the ceiling is the fifth wall — a constellation of hand-blown glass pendants over a single runway of banquettes in oxblood leather.",
  },
  {
    id: "marble-test-kitchen",
    index: "06",
    title: "The Marble Test Kitchen",
    category: "Commercial",
    location: "Lower Parel, Mumbai",
    year: "2024",
    area: "1,900 sq.ft",
    image: `${IMG}/a8c88bb112f6.jpg`,
    description:
      "A culinary R&D studio for a chef collective. One monolithic Calacatta island, open shelving in raw steel, and everything else deliberately quiet so the food gets the spotlight.",
  },
  {
    id: "hammam-noir",
    index: "07",
    title: "Hammam Noir",
    category: "Residential",
    location: "SG Highway, Ahmedabad",
    year: "2025",
    area: "860 sq.ft",
    image: `${IMG}/29aa3f0d6938.jpg`,
    description:
      "A primary bath reimagined as a private hammam — book-matched Nero Marquina, a sculptural stone tub, and steam-proof lighting that makes evening baths feel like theatre.",
  },
  {
    id: "verre-dining",
    index: "08",
    title: "Salle à Verre",
    category: "Residential",
    location: "Alkapuri, Vadodara",
    year: "2023",
    area: "740 sq.ft",
    image: `${IMG}/537f09dab418.jpg`,
    description:
      "A glass-walled dining pavilion grafted onto a heritage bungalow. Fluted glass doors, a 12-seat walnut table and a chandelier commissioned from 340 hand-cut crystals.",
  },
  {
    id: "library-loft",
    index: "09",
    title: "The Library Loft",
    category: "Commercial",
    location: "Indiranagar, Bengaluru",
    year: "2024",
    area: "2,400 sq.ft",
    image: `${IMG}/b9b3d9f01c97.jpg`,
    description:
      "A members-only workspace that reads like a private library — double-height walnut shelving, reading lamps on brass rails and meeting booths disguised as reading carrels.",
  },
  {
    id: "golden-hour",
    index: "10",
    title: "Golden Hour Lounge",
    category: "Hospitality",
    location: "Mehrauli, New Delhi",
    year: "2023",
    area: "5,100 sq.ft",
    image: `${IMG}/c0f0eebf207d.jpg`,
    description:
      "A rooftop cocktail lounge tuned to one moment — sunset. Amber glass, burnt-sienna upholstery and a bar carved from a single 4-metre slab of rough golden quartzite.",
  },
];

export const CATEGORIES: ("All" | Category)[] = [
  "All",
  "Residential",
  "Commercial",
  "Hospitality",
];

export interface Service {
  no: string;
  title: string;
  blurb: string;
  detail: string;
  tags: string[];
}

export const SERVICES: Service[] = [
  {
    no: "01",
    title: "Full-Home Interiors",
    blurb: "End-to-end residential design, concept to keys.",
    detail:
      "We take ownership of the entire canvas — spatial planning, custom furniture, material palettes, lighting scenes and styling. One team, one drawing set, zero coordination leaks. You move into a home that already knows you.",
    tags: ["Space planning", "Custom furniture", "Styling", "Turnkey"],
  },
  {
    no: "02",
    title: "Turnkey Execution",
    blurb: "A single contract, a finished world.",
    detail:
      "Our site team executes against millimetre-perfect shop drawings with weekly photo reports, transparent BOQs and a 52-week post-handheld care window. You watch it happen from the homepage of your phone.",
    tags: ["BOQ & costing", "Site management", "QC reports", "Handover"],
  },
  {
    no: "03",
    title: "Kitchens & Baths",
    blurb: "The two hardest rooms, obsessively solved.",
    detail:
      "Wet areas are where budgets and timelines go to die — so we over-engineer them. German hardware, seamless stone, water-proofing warranties and lighting that flatters both the mirror and the marble.",
    tags: ["Modular kitchens", "Stone validation", "Vanity design", "Ventilation"],
  },
  {
    no: "04",
    title: "Lighting Design",
    blurb: "Light is the cheapest architecture.",
    detail:
      "We design in three layers — architectural, decorative and theatrical. Dimming curves are simulated before a single fixture is ordered, and every scene is tuned on-site at 9 PM, the hour your home actually lives.",
    tags: ["Scene tuning", "Cove & wash", "Fixture curation", "Automation-ready"],
  },
  {
    no: "05",
    title: "Styling & Art Direction",
    blurb: "The final 10% that reads as 90%.",
    detail:
      "Objects, books, florals, textiles and art placed with intent. We source from artisan collectives across nine cities and style the shelves you'll photograph — then hand you the care manual.",
    tags: ["Art sourcing", "Soft styling", "Shoot prep", "Care manuals"],
  },
  {
    no: "06",
    title: "Commercial & Hospitality",
    blurb: "Rooms that earn their keep per square foot.",
    detail:
      "Restaurants, lounges, boutique offices and hotel suites designed against revenue-per-seat logic, operational flow and brand memory — beautiful on opening night, profitable every night after.",
    tags: ["F&B concepts", "Brand worlds", "Flow planning", "Licence liaison"],
  },
];

export const STATS = [
  { value: 120, suffix: "+", label: "Spaces delivered" },
  { value: 14, suffix: "", label: "Design awards" },
  { value: 9, suffix: "", label: "Cities & counting" },
  { value: 98, suffix: "%", label: "Clients who return" },
];

export const NAV_LINKS = [
  { id: "home", label: "Home", no: "01" },
  { id: "projects", label: "Projects", no: "02" },
  { id: "studio", label: "Studio", no: "03" },
  { id: "services", label: "Services", no: "04" },
  { id: "contact", label: "Contact", no: "05" },
] as const;

export type RouteId = (typeof NAV_LINKS)[number]["id"];

export const MARQUEE_WORDS = [
  "Interior Architecture",
  "Light Design",
  "Custom Furniture",
  "Material Research",
  "Art Direction",
  "Turnkey Execution",
];

export const PROCESS = [
  {
    no: "I",
    title: "Listen",
    text: "Two long conversations before a single line is drawn. We map how you wake, work, host and rest.",
  },
  {
    no: "II",
    title: "Compose",
    text: "Concept boards, material trays and 3D worlds you can walk through — revised until it feels inevitable.",
  },
  {
    no: "III",
    title: "Craft",
    text: "Drawings become dust sheets. Our site team builds with weekly photo reports and sealed BOQs.",
  },
  {
    no: "IV",
    title: "Reveal",
    text: "The last 10% is styling and light tuning — then the doors open, and the room finally exhales.",
  },
];

export const VALUES = [
  {
    no: "01",
    title: "Material honesty",
    text: "Stone that shows its veins, wood that shows its grain, plaster that shows the hand. We never print a lie on a surface.",
  },
  {
    no: "02",
    title: "Light before objects",
    text: "We design the light first and furnish second. A modest room with great light outperforms a lavish one with bad wiring — every single time.",
  },
  {
    no: "03",
    title: "Quiet luxury",
    text: "No logo carpets, no shouting. Luxury is a socket exactly where you needed one, a drawer that closes with a whisper.",
  },
];

export const AWARDS = [
  { year: "2026", title: "Atelier of the Year — Concept Division", org: "AD Design Awards" },
  { year: "2025", title: "Best Residential Interior", org: "IIID Excellence" },
  { year: "2025", title: "Hospitality Space of the Year", org: "World Interiors News" },
  { year: "2024", title: " Emerging Studio Merit", org: "Elle Decor India" },
  { year: "2024", title: "Lighting Design Commendation", org: "LDA Nominees" },
];
