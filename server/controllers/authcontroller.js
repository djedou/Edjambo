let create = require("../crud/create");
let read = require("../crud/read");

let sendTo = (res,doc)=>{
    res.send(doc);
};



module.exports = {
    accueil: (req, res) => {
        res.send("God job");
    },
    emails: (req,res) => {
        let resltat = read.Read(res,sendTo); 
    }
};