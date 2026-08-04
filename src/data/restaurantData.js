export const restaurantData = {
  name: "Antica Grotta",
  subtitle: "Cucina tradizionale nel cuore di Lanuvio",
  address: "Via Antonio Gramsci, 128, 00075 Lanuvio RM",
  phone: "+39 06 937 3254", // Fictional/placeholder phone for realistic look, usually requested or to be filled
  email: "info@anticagrottalanuvio.it",
  hours: {
    Mon: "Chiuso",
    Tue: "Chiuso",
    Wed: "Chiuso",
    Thu: "Chiuso",
    Fri: "19:30 - 23:30",
    Sat: "19:30 - 23:30",
    Sun: "11:30 - 15:30"
  },
  socials: {
    facebook: "https://facebook.com/anticagrottalanuvio",
    instagram: "https://instagram.com/anticagrottalanuvio"
  }
};

export const menuData = [
  {
    category: "Antipasti",
    items: [
      { name: "Tagliere dei Castelli", description: "Selezione di salumi e formaggi del territorio con porchetta", price: "12.00", highlight: true },
      { name: "Carciofo alla Romana", description: "Carciofo mammola cotto a fuoco lento con mentuccia e aglio", price: "8.00" },
      { name: "Bruschette Miste", description: "Pane casareccio con pomodorini e paté di olive", price: "5.00" }
    ]
  },
  {
    category: "Primi Piatti",
    items: [
      { name: "Tonnarelli Cacio e Pepe", description: "Pasta fresca all'uovo con pecorino romano DOP e pepe nero", price: "10.00", highlight: true },
      { name: "Spaghetti alla Carbonara", description: "Con guanciale croccante, pecorino e uovo a km0", price: "12.00", highlight: true },
      { name: "Bucatini all'Amatriciana", description: "Sugo di pomodoro, guanciale e pecorino", price: "11.00" }
    ]
  },
  {
    category: "Secondi",
    items: [
      { name: "Abbacchio allo Scottadito", description: "Costine di agnello marinate e scottate alla griglia", price: "16.00", highlight: true },
      { name: "Saltimbocca alla Romana", description: "Fettine di vitello con prosciutto crudo e salvia", price: "15.00" },
      { name: "Trippa alla Romana", description: "Con mentuccia e abbondante pecorino", price: "14.00" }
    ]
  },
  {
    category: "Dolci",
    items: [
      { name: "Tiramisù della Casa", description: "Ricetta classica con savoiardi artigianali", price: "5.00" },
      { name: "Crostata Ricotta e Visciole", description: "Dolce tipico romano fatto in casa", price: "5.00", highlight: true }
    ]
  }
];

export const reviewsData = [
  { name: "Marco R.", date: "Recente", rating: 5, text: "Un'esperienza fantastica a Lanuvio. I tonnarelli cacio e pepe sono superlativi." },
  { name: "Laura B.", date: "Recente", rating: 5, text: "Locale molto accogliente. L'abbacchio era tenerissimo e saporito. Prezzi giusti per la qualità." },
  { name: "Giuseppe V.", date: "Recente", rating: 4, text: "Ottima trattoria romana. Materie prime di qualità e porzioni generose." },
  { name: "Francesca N.", date: "Recente", rating: 5, text: "La vera carbonara nel cuore dei Castelli Romani. Assolutamente da provare." },
  { name: "Alessandro", date: "Recente", rating: 5, text: "Servizio impeccabile e atmosfera rustica autentica. Torneremo sicuramente." }
];

const base = import.meta.env.BASE_URL;

export const galleryData = [
  `${base}gallery/foto_2.jpg`,
  `${base}gallery/foto_3.jpg`,
  `${base}gallery/foto_4.jpg`,
  `${base}gallery/foto_5.jpg`,
  `${base}gallery/foto_6.jpg`,
  `${base}gallery/foto_7.jpg`,
  `${base}gallery/foto_8.jpg`
];
