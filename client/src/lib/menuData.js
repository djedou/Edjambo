let Menudata = {
    accueil:{
        id: 1,
        name: "accueil",
        active: true,
        title: "Accueil",
        url:"/",
        hideSubmenu: true,
        submenu: []
    },
    media:{
        id: 2,
        name: "media",
        active: false,
        title: "Media",
        url:"/media",
        hideSubmenu: true,
        submenu: [
            {
                id: 1,
                name: "conference",
                title: "Conference",
                url:"media"
            },
            {
                id: 2,
                name: "facebook",
                title: "Facebook",
                url:"media"
            },
            {
                id: 3,
                name: "messenger",
                title: "Messenger",
                url:"media"
            }
        ]
    },
    adherer:{
        id: 3,
        name: "adherer",
        active: false,
        title: "Adherer",
        url:"/connexion",
        hideSubmenu: true,
        submenu: []
    },
    a_propos:{
        id: 4,
        name: "a_propos",
        active: false,
        title: "A propos",
        url:"/apropos",
        hideSubmenu: true,
        submenu: [
            {
                id: 1,
                name: "quisommesnous",
                title: "Qui sommes nous?",
                url:"apropos",
            },
            {
                id: 2,
                name: "quefaisonsnous",
                title: "Que faisons nous?",
                url:"apropos",
            },
            {
                id: 3,
                name: "associations",
                title: "Associations",
                url:"apropos",
            }
        ]
    },
    plus:{
        id: 5,
        name: "plus",
        active: false,
        title: "Plus",
        url:"/plus",
        hideSubmenu: true,
        submenu : [
            {
                id: 1,
                name: "annonces",
                title: "Annonces",
                url:"plus"
            },
            {
                id: 2,
                name: "activites",
                title: "Activites",
                url:"plus"
            },
            {
                id: 3,
                name: "gallerie",
                title: "Gallerie",
                url:"plus"
            }
        ]
    }
};

export default Menudata;

