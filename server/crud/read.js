let ActiviteModel = require("../models/activites");
let AnnonceModel = require("../models/annonces");
let AssociationModel = require("../models/associations");
let EditorialModel = require("../models/editorial");
let EnbcModel = require("../models/enbc");
let GallerieModel = require("../models/gallerie");
let MediaModel = require("../models/media");
let MembreModel = require("../models/membres");
let QueFaisonsNousModel = require("../models/quefaisonsnous");
let QuiSommesNousModel = require("../models/quisommesnous");
    

module.exports = {
    activite: (res,callback) => {
        let resultat, erreur;
        ActiviteModel.find({})
            .then(doc => {
                callback(res,doc);
            })
            .catch(err => {
                callback(res,err);
            })
        
    },
    annonce: (res,callback) => {
        let resultat, erreur;
        AnnonceModel.find({})
            .then(doc => {
                callback(res,doc);
            })
            .catch(err => {
                callback(res,err);
            })
    },
    association: (res,callback) => {
        let resultat, erreur;
        AssociationModel.find({})
            .then(doc => {
                callback(res,doc);
            })
            .catch(err => {
                callback(res,err);
            })
    },
    editorial: (res,callback) => {
        let resultat, erreur;
        EditorialModel.find({})
            .then(doc => {
                callback(res,doc);
            })
            .catch(err => {
                callback(res,err);
            })
    },
    enbc: (res,callback) => {
        let resultat, erreur;
        EnbcModel.find({})
            .then(doc => {
                callback(res,doc);
            })
            .catch(err => {
                callback(res,err);
            })
    },
    gallerie: (res,callback) => {
        let resultat, erreur;
        GallerieModel.find({})
            .then(doc => {
                callback(res,doc);
            })
            .catch(err => {
                callback(res,err);
            })
    },
    media: (res,callback) => {
        let resultat, erreur;
        MediaModel.find({})
            .then(doc => {
                callback(res,doc);
            })
            .catch(err => {
                callback(res,err);
            })
    },
    membre: (res,callback) => {
        let resultat, erreur;
        MembreModel.find({})
            .then(doc => {
                callback(res,doc);
            })
            .catch(err => {
                callback(res,err);
            })
    },
    quefaisonsnous: (res,callback) => {
        let resultat, erreur;
        QueFaisonsNousModel.find({})
            .then(doc => {
                callback(res,doc);
            })
            .catch(err => {
                callback(res,err);
            })
    },
    quisommessous: (res,callback) => {
        let resultat, erreur;
        QuiSommesNousModel.find({})
            .then(doc => {
                callback(res,doc);
            })
            .catch(err => {
                callback(res,err);
            })
    }
}
    