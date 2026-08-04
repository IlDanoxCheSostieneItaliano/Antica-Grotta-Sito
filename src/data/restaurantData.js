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
    category: "Menu Completo",
    items: [
      { name: "In attesa del menu ufficiale", description: "Il menu dettagliato verrà caricato a breve dal ristoratore.", price: "su richiesta", highlight: false }
    ]
  }
];

export const reviewsData = [
  { name: "Cliente verificato", date: "Recenti", rating: 5, text: "Le recensioni ufficiali di Restaurant Guru / Google saranno sincronizzate qui a breve." }
];

export const galleryData = [
  "https://placehold.co/800x600/1c1917/d4c2a5?text=Foto+Esterno",
  "https://placehold.co/800x600/1c1917/d4c2a5?text=Foto+Interno",
  "https://placehold.co/800x600/1c1917/d4c2a5?text=Primo+Piatto",
  "https://placehold.co/800x600/1c1917/d4c2a5?text=Secondo+Piatto"
];
