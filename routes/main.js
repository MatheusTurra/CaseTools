const controllers = require("../controllers/conversionControllers")();

module.exports = (app) => {

    app.get("/", (req, res) => {
        res.json({teste: "Rota get / funcionando !"});
    });

    app.post("/uppercase", controllers.uppercase);

    
    return app;
}
