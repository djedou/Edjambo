let EmailModel = require('../models/email');

module.exports.Create = (email) => {
    let msg = new EmailModel({
        email: email
    })
    
    msg.save()
        .then(doc => {
        console.log(doc)
        })
        .catch(err => {
        console.error(err)
        })
};
