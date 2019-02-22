let mongoose = require('mongoose')
let validator = require('validator')

let imgSchema = new mongoose.Schema({
    class: String,
    imgsm: String,
    imgmd: String,
    imglg: String,
    imgxl: String,
    dateDeCreation: {
        type: Date,
        default: Date.now 
    } 
})

module.exports = new mongoose.model('Images', imgSchema)