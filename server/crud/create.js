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
    activite: (act) => {
        let msg = new ActiviteModel({
            titre: act.titre,
            description: act.description,
            img: act.img,
        });
        msg.save();
    },
    annonce: (ann) => {
        let msg = new AnnonceModel({
            titre: ann.titre,
            description: ann.description,
            img: ann.img,
        });
        msg.save();
    },
    association: (ass) => {
        let msg = new AssociationModel({
            nom: ass.nom,
            description: ass.description,
            objectif: ass.objectif,
            img: ass.img
        });
        msg.save();
    },
    editorial: (edi) => {
        let msg = new EditorialModel({
            titre: edi.titre,
            introduction: [{
                text1: edi.introduction.text1,
                text2: edi.introduction.text2,
                text3: edi.introduction.text3,
                text4: edi.introduction.text4
            }],
            causes:[{
                text1: edi.causes.text1,
                text2: edi.causes.text2,
                text3: edi.causes.text3,
                text4: edi.causes.text4
            }],
            solidarite:[{
                text1: edi.solidarite.text1,
                text2: edi.solidarite.text2
            }],
            adhesion:[{
                text1: edi.adhesion.text1,
                text2: edi.adhesion.text2,
                text3: edi.adhesion.text3
            }],
            img: edi.img
        });
        msg.save();
    },
    enbc: (enbc) => {
        let msg = new EnbcModel({
            titre: enbc.titre,
            description: enbc.description,
            img: enbc.img
        });
        msg.save();
    },
    gallerie: (gal) => {
        let msg = new GallerieModel({
            nom: gal.nom,
            description: gal.description,
            img: gal.img
        });
        msg.save();
    },
    media: (med) => {
        let msg = new MediaModel({
            nom: med.nom,
            description: med.description,
            url: med.url,
            img: med.img
        });
        msg.save();
    },
    membre: (mem) => {
        let msg = new MembreModel({
            nom: mem.nom,
            prenom: mem.prenom,
            surnom: mem.surnom,
            email: mem.email,
            password: mem.password,
            roles: [{
                visiteur: mem.roles.visiteur,
                animateur: mem.roles.animateur,
                admin: mem.roles.admin
            }],
            facebook: mem.facebook,
            twitter: mem.twitter,
            instagram: mem.instagram,
            description: mem.description,
            url: mem.url, 
            img: mem.img
        });
        msg.save();
    },
    quefaisonsfous: (qfn) => {
        let msg = new QueFaisonsNousModel({
            titre: qfn.nom,
            description: qfn.description,
            img: qfn.img
        });
        msg.save();
    },
    quisommesnous: (qsn) => {
        let msg = new QuiSommesNousModel({
            introduction: qsn.introduction,
            vision: qsn.vision,
            description: qsn.description,
            img: qsn.img
        });
        msg.save();
    },
}
