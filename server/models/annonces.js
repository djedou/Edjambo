let mongoose = require('mongoose');
let images = require("./img");

let annoncesSchema = new mongoose.Schema({
    titre: String,
    description: String,
    img:{
        type: [images],
        default: undefined
    },
    dateDeCreation: {
        type: Date,
        lowercase: true
    }
})

module.exports = mongoose.model('Annonces', annoncesSchema)