let Menudata = {
    accueil:{
        id: 1,
        name: "accueil",
        active: true,
        title: "Accueil",
        hideSubmenu: true,
        submenu: []
    },
    media:{
        id: 2,
        name: "media",
        active: false,
        title: "Media",
        hideSubmenu: true,
        submenu: [
            {
                id: 1,
                name: "conference",
                title: "Conference"
            },
            {
                id: 2,
                name: "facebook",
                title: "Facebook"
            },
            {
                id: 3,
                name: "messenger",
                title: "Messenger"
            }
        ]
    },
    adherer:{
        id: 3,
        name: "adherer",
        active: false,
        title: "Adherer",
        hideSubmenu: true,
        submenu: []
    },
    a_propos:{
        id: 4,
        name: "a_propos",
        active: false,
        title: "A propos",
        hideSubmenu: true,
        submenu: [
            {
                id: 1,
                name: "quisommesnous",
                title: "Qui sommes nous?"
            },
            {
                id: 2,
                name: "quefaisonsnous",
                title: "Que faisons nous?"
            },
            {
                id: 3,
                name: "associations",
                title: "Associations"
            }
        ]
    },
    plus:{
        id: 5,
        name: "plus",
        active: false,
        title: "Plus",
        hideSubmenu: true,
        submenu : [
            {
                id: 1,
                name: "annonces",
                title: "Annonces"
            },
            {
                id: 2,
                name: "activites",
                title: "Activites"
            },
            {
                id: 3,
                name: "gallerie",
                title: "Gallerie"
            }
        ]
    }
};

export default Menudata;

