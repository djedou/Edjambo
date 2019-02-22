var authController = require('../controllers/authcontroller.js');

module.exports = (app) => {
    app.get("/activite", authController.readActivite);
    app.post("/activite", authController.createActivite);
    /* app.put("/activite", authController.accueil);
    app.delete("/activite", authController.accueil); */

    app.get("/annonce", authController.readAnnonce);
    app.post("/annonce", authController.createAnnonce);
    /* app.put("/annonce", authController.accueil);
    app.delete("/annonce", authController.accueil); */
    
    app.get("/association", authController.readAssociation);
    app.post("/association", authController.createAssociation);
    /* app.put("/association", authController.accueil);
    app.delete("/association", authController.accueil); */


    app.get("/editorial", authController.readEditorial);
    app.post("/editorial", authController.createEditorial);
    /* app.put("/editorial", authController.accueil);
    app.delete("/editorial", authController.accueil); */

    app.get("/enbc", authController.readEnbc);
    app.post("/enbc", authController.createEnbc);
    /* app.put("/enbc", authController.accueil);
    app.delete("/enbc", authController.accueil); */

    app.get("/gallerie", authController.readGallerie);
    app.post("/gallerie", authController.createGallerie);
    /* app.put("/gallerie", authController.accueil);
    app.delete("/gallerie", authController.accueil); */

    app.get("/media", authController.readMedia);
    app.post("/media", authController.createMedia);
    /* app.put("/media", authController.accueil);
    app.delete("/media", authController.accueil); */

    app.get("/membre", authController.readMembre);
    app.post("/membre", authController.createMembre);
    /* app.put("/membre", authController.accueil);
    app.delete("/membre", authController.accueil); */

    app.get("/quefaisonsnous", authController.readQuefaisonsnous);
    app.post("/quefaisonsnous", authController.createQuefaisonsnous);
    /* app.put("/quefaisonsnous", authController.accueil);
    app.delete("/quefaisonsnous", authController.accueil); */

    app.get("/quisommesnous",authController.readQuisommesnous);
    app.post("/quisommesnous", authController.createQuisommesnous);
    /* app.put("/quisommesnous", authController.accueil);
    app.delete("/quisommesnous", authController.accueil); */

}
