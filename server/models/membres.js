let mongoose = require('mongoose');
let images = require("./img");

let membresSchema = new mongoose.Schema({
    nom: String,
    prenom: String,
    surnom: String,
    email: String,
    password: String,
    roles: [{
        visiteur: Boolean,
        animateur: Boolean,
        admin: Boolean
    }],
    facebook: String,
    twitter: String,
    instagram: String,
    description: String,
    url: String, 
    img:{
        type: [images],
        default: undefined
    },
    dateDeCreation: {
        type: Date,
        default: Date.now 
    }
})

module.exports = mongoose.model('Membres', membresSchema)