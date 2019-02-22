let mongoose = require('mongoose')
let images = require("./img");

let activitesSchema = new mongoose.Schema({
    titre: String,
    description: String,
    img:{
        type: [images],
        default: undefined
    },
    dateDeCreation: {
        type: Date,
        default: Date.now 
    }
})

module.exports = mongoose.model('Activites', activitesSchema)