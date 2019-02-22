let mongoose = require('mongoose')
let validator = require('validator')

let userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    address:{
        type: String
    }
  })

module.exports = mongoose.model('users', userSchema);
