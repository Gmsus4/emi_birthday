export interface InvitationData {
    name: string;
    subtitle: string;
    inviteText: string;
    date: {
        month: string;
        day: string;
        time: string;
    };
    location: {
        label: string;
        address: string;
    };
    heroImage: string;
}

export const invitation: InvitationData = {
    name: "Emiliano",
    subtitle: "Cumple un año",
    inviteText: "Te invitamos a celebrar su cumpleaños y bautizo",
    date: {
        month: "Julio",
        day: "26",
        time: "2:30 PM",
    },
    location: {
        label: "LUGAR",
        address: "Juan Ramos Beltrán 41, 46470 Magdalena, Jal., México",
    },
    heroImage: "/wp.png",
};
