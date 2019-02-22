var authController = require('../controllers/authcontroller.js');

module.exports = (app) => {

    app.get("/", authController.accueil);
    
    app.get("/emails",authController.emails);

}
