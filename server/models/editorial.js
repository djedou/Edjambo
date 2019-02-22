let mongoose = require('mongoose');
let images = require("./img");

let editorialSchema = new mongoose.Schema({
    titre: String,
    introduction: [{
        text1: String,
        text2: String,
        text3: String,
        text4: String
    }],
    causes:[{
        text1: String,
        text2: String,
        text3: String,
        text4: String
    }],
    solidarite:[{
        text1: String,
        text2: String
    }],
    adhesion:[{
        text1: String,
        text2: String,
        text3: String  
    }],
    img:{
        type: [images],
        default: undefined
    },  
    dateDeCreation: {
      type: Date,
      default: Date.now 
    }
})

module.exports = mongoose.model('Editorial', editorialSchema)