let mongoose = require('mongoose');
let images = require("./img");

let gallerieSchema = new mongoose.Schema({
    nom: String,
    description: String,
    url: String, 
    img:{
        type: [images],
        default: undefined
    },
    dateDeCreation: {
        type: Date,
        default: Date.now 
    },
  
})

module.exports = mongoose.model('Media', gallerieSchema)