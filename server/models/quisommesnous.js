let mongoose = require('mongoose');
let images = require("./img");

let quisommesnousSchema = new mongoose.Schema({
    introduction: String,
    vision: String,
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

module.exports = mongoose.model('Quisommesnous', quisommesnousSchema)