export interface ItineraryItem {
  time: string;
  title: string;
  description?: string;
}

export interface InvitationData {
  name: string;
  subtitle: string;
  inviteText: string;
  date: {
    month: string;
    day: string;
    time: string;
    targetDate: string;
  };
  location: {
    label: string;
    address: string;
    mapsQuery: string;
  };
  heroImage: string;
  openGraph: string;
  itinerary: ItineraryItem[];
  dressCode: string;
  rsvp: {
    phone: string;
    deadline: string;
  };
  gifts: {
    message: string;
  };
  gallery: string[];
}

export const invitation: InvitationData = {
  name: "Emiliano",
  subtitle: "Cumple un año",
  inviteText: "Te invitamos a celebrar su cumpleaños y bautizo",
  date: {
    month: "Julio",
    day: "26",
    time: "2:30 PM",
    targetDate: "2026-07-26T14:30:00-06:00",
  },
  location: {
    label: "LUGAR",
    address: "Juan Ramos Beltrán 41, 46470 Magdalena, Jal., México",
    mapsQuery: "Juan Ramos Beltrán 41, 46470 Magdalena, Jalisco, México",
  },
  heroImage: "/wp.png",
  openGraph: "/op.jpg",
  itinerary: [
    {
      time: "12:00 PM",
      title: "Santa Misa",
      description: "Misa de bautismo",
    },
    {
      time: "2:30 PM",
      title: "Recepción",
      description: "Bienvenida a los invitados",
    },
    {
      time: "4:00 PM",
      title: "Celebración",
      description: "Recepción y comida",
    },
    // {
    //   time: "5:00 PM",
    //   title: "Pastel",
    //   description: "Corte de pastel y brindis",
    // },
    // {
    //   time: "8:00 PM",
    //   title: "Cierre",
    //   description: "Despedida y agradecimiento",
    // },
  ],
  dressCode: "Formal — Colores pasteles",
  rsvp: {
    phone: "523322331626",
    deadline: "15 de Julio",
  },
  gifts: {
    message: "Tu presencia es nuestro mejor regalo.",
    // message: "Tu presencia es nuestro mejor regalo. Si deseas obsequiar algo, agradeceremos tu contribución para el futuro de Emiliano.",
  },
  gallery: ["/emi/5.jpg", "/emi/2.jpeg", "/emi/3.jpeg", "/emi/7.jpg", "/emi/8.jpg", "/emi/9.jpg"],
  // gallery: ["/emi/1.jpeg", "/emi/2.jpeg", "/emi/3.jpeg", "/emi/4.jpeg", "/emi/5.jpg", "/emi/6.jpg", "/emi/7.jpg", "/emi/8.jpg", "/emi/9.jpg", "/emi/10.jpg", "/emi/11.jpg", "/emi/12.jpg"],
};
