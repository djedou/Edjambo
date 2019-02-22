let create = require("../crud/create");
let read = require("../crud/read");
let update = require("../crud/update");
let delet = require("../crud/delete");


let sendTo = (res,doc)=>{
    res.send(doc);
};



module.exports = {
    createActivite: (req, res) => {
        create.activite(req.body);
    },
    readActivite: (req,res) => {
        read.activite(res,sendTo); 
    },/* 
    updateActivite: (req,res) => {
        let resltat = read.Read(res,sendTo); 
    },
    deletActivite: (req,res) => {
        let resltat = read.Read(res,sendTo); 
    }, */


    createAnnonce: (req, res) => {
        create.annonce(req.body);
    },
    readAnnonce: (req,res) => {
        read.annonce(res,sendTo); 
    },/*
    updateAnnonce: (req,res) => {
        let resltat = read.Read(res,sendTo); 
    },
    deletAnnonce: (req,res) => {
        let resltat = read.Read(res,sendTo); 
    }, */


    createAssociation: (req, res) => {
        create.association(req.body);
    },
    readAssociation: (req,res) => {
        read.association(res,sendTo); 
    },/*
    updateAssociation: (req,res) => {
        let resltat = read.Read(res,sendTo); 
    },
    deletAssociation: (req,res) => {
        let resltat = read.Read(res,sendTo); 
    }, */

    createEditorial: (req, res) => {
        create.editorial(req.body);
    },
    readEditorial: (req,res) => {
        read.editorial(res,sendTo); 
    },/*
    updateEditorial: (req,res) => {
        let resltat = read.Read(res,sendTo); 
    },
    deletEditorial: (req,res) => {
        let resltat = read.Read(res,sendTo); 
    }, */

    createEnbc: (req, res) => {
        create.enbc(req.body);
    },
    readEnbc: (req,res) => {
        read.enbc(res,sendTo); 
    },/*
    updateEnbc: (req,res) => {
        let resltat = read.Read(res,sendTo); 
    },
    deletEnbc: (req,res) => {
        let resltat = read.Read(res,sendTo); 
    }, */

    createGallerie: (req, res) => {
        create.gallerie(req.body);
    },
    readGallerie: (req,res) => {
        read.gallerie(res,sendTo); 
    },/*
    updateGallerie: (req,res) => {
        let resltat = read.Read(res,sendTo); 
    },
    deletGallerie: (req,res) => {
        let resltat = read.Read(res,sendTo); 
    }, */

    createMedia: (req, res) => {
        create.media(req.body);
    },
    readMedia: (req,res) => {
        read.media(res,sendTo); 
    },/*
    updateMedia: (req,res) => {
        let resltat = read.Read(res,sendTo); 
    },
    deletMedia: (req,res) => {
        let resltat = read.Read(res,sendTo); 
    }, */

    createMembre: (req, res) => {
        create.membre(req.body);
    },
    readMembre: (req,res) => {
        read.membre(res,sendTo); 
    },/*
    updateMembre: (req,res) => {
        let resltat = read.Read(res,sendTo); 
    },
    deletMembre: (req,res) => {
        let resltat = read.Read(res,sendTo); 
    }, */

    createQuefaisonsnous: (req, res) => {
        create.quefaisonsfous(req.body);
    },
    readQuefaisonsnous: (req,res) => {
        read.quefaisonsnous(res,sendTo); 
    },/*
    updateQuefaisonsnous: (req,res) => {
        let resltat = read.Read(res,sendTo); 
    },
    deletQuefaisonsnous: (req,res) => {
        let resltat = read.Read(res,sendTo); 
    }, */

    createQuisommesnous: (req, res) => {
        create.quisommesnous(req.body);
    },
    readQuisommesnous: (req,res) => {
        read.quisommessous(res,sendTo); 
    },/*
    updateQuisommesnous: (req,res) => {
        let resltat = read.Read(res,sendTo); 
    },
    deletQuisommesnous: (req,res) => {
        let resltat = read.Read(res,sendTo); 
    }, */
};
