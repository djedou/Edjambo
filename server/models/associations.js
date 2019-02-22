let mongoose = require('mongoose');
let images = require("./img");

let associationsSchema = new mongoose.Schema({
    nom: String,
    description: String,
    objectif: String,
    img:{
        type: [images],
        default: undefined
    },
    dateDeCreation: {
        type: Date,
        lowercase: true
    }
})

module.exports = mongoose.model('Associations', associationsSchema)