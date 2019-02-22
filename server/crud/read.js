let EmailModel = require('../models/email');
let UserModel = require("../models/users");

module.exports.Read = (res,callback) => {
        let resultat, erreur;
        UserModel.find({})
            .then(doc => {
                callback(res,doc);
            })
            .catch(err => {
                callback(res,err);
            })
        
    };
