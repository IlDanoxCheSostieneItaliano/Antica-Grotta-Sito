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
      { name: "Tagliere della Grotta", description: "Selezione di salumi e formaggi del territorio con miele e noci", price: "14.00", highlight: true },
      { name: "Carciofo alla Romana", description: "Carciofo mammola cotto a fuoco lento con mentuccia e aglio", price: "8.00" },
      { name: "Bruschette Miste", description: "Pane casareccio con pomodorini, paté di olive e lardo di Colonnata", price: "6.00" }
    ]
  },
  {
    category: "Primi Piatti",
    items: [
      { name: "Tonnarelli Cacio e Pepe", description: "Pasta fresca all'uovo con pecorino romano DOP e pepe nero", price: "12.00", highlight: true },
      { name: "Carbonara Tradizionale", description: "Spaghettoni con guanciale croccante, pecorino e pepe", price: "13.00", highlight: true },
      { name: "Fettuccine ai Funghi Porcini", description: "Pasta fatta in casa con porcini freschi dei Castelli", price: "15.00" }
    ]
  },
  {
    category: "Secondi",
    items: [
      { name: "Abbacchio allo Scottadito", description: "Costine di agnello marinate e scottate alla griglia", price: "18.00", highlight: true },
      { name: "Saltimbocca alla Romana", description: "Fettine di vitello con prosciutto crudo e salvia", price: "16.00" },
      { name: "Tagliata di Manzo", description: "Con rucola, pachino e scaglie di grana", price: "20.00" }
    ]
  },
  {
    category: "Dolci",
    items: [
      { name: "Tiramisù della Casa", description: "Ricetta classica con savoiardi artigianali", price: "6.00" },
      { name: "Crostata Ricotta e Visciole", description: "Dolce tipico romano fatto in casa", price: "6.00", highlight: true },
      { name: "Tozzetti e Vin Santo", description: "Cantucci artigianali accompagnati da vino liquoroso", price: "7.00" }
    ]
  }
];

export const reviewsData = [
  { name: "Marco Rossi", date: "Ottobre 2023", rating: 5, text: "Un'esperienza fantastica. I tonnarelli cacio e pepe sono la fine del mondo. L'atmosfera è davvero suggestiva." },
  { name: "Laura Bianchi", date: "Settembre 2023", rating: 5, text: "Locale accogliente e personale gentilissimo. L'abbacchio era tenerissimo e saporito. Prezzi giusti per la qualità offerta." },
  { name: "Giuseppe Verdi", date: "Agosto 2023", rating: 4, text: "Ottima trattoria romana. Porzioni abbondanti e materie prime di qualità. Consiglio la prenotazione nel weekend." },
  { name: "Francesca Neri", date: "Luglio 2023", rating: 5, text: "Posto incantevole nel centro di Lanuvio. La carbonara è una delle migliori che abbia mai mangiato ai Castelli Romani." },
  { name: "Alessandro Romano", date: "Giugno 2023", rating: 5, text: "Servizio impeccabile e atmosfera unica. Sembra davvero di mangiare in un'antica grotta. Torneremo sicuramente." },
  { name: "Silvia Moretti", date: "Maggio 2023", rating: 4, text: "Antipasti sfiziosi e dolci fatti in casa deliziosi. Un'ottima scoperta per chi cerca la vera cucina romana." },
  { name: "Davide Conti", date: "Aprile 2023", rating: 5, text: "Tutto perfetto, dalla location al cibo. Il carciofo alla romana era tenerissimo. Consigliatissimo!" },
  { name: "Chiara De Luca", date: "Marzo 2023", rating: 4, text: "Cena tra amici molto piacevole. Ottimo rapporto qualità-prezzo e vino della casa di buona qualità." },
  { name: "Roberto Ricci", date: "Febbraio 2023", rating: 5, text: "Atmosfera rustica ed elegante al tempo stesso. La crostata ricotta e visciole è un must." },
  { name: "Elena Esposito", date: "Gennaio 2023", rating: 5, text: "Un tuffo nei sapori della tradizione. Ogni piatto è preparato con cura. Il personale ti fa sentire a casa." }
];

export const galleryData = [
  "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1000&auto=format&fit=crop", // Restaurant interior
  "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1000&auto=format&fit=crop", // Pasta
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000&auto=format&fit=crop", // Fine dining
  "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1000&auto=format&fit=crop", // Meat/Steak
  "https://images.unsplash.com/photo-1585238341267-1cb5a51465a3?q=80&w=1000&auto=format&fit=crop", // Rustic stone wall
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000&auto=format&fit=crop", // Salad/Antipasto
  "https://images.unsplash.com/photo-1505826759037-406b40feb4cd?q=80&w=1000&auto=format&fit=crop", // Wine
  "https://images.unsplash.com/photo-1579684947550-22e945225d9a?q=80&w=1000&auto=format&fit=crop"  // Dessert
];
