const controllers = require("../controllers/conversionControllers")();

module.exports = (app) => {

    app.post("/uppercase", controllers.uppercase);
    
    app.post("/lowercase", controllers.lowercase);
    
    app.post("/camelCase", controllers.camelCase);

    app.post("/snake_case", controllers.snake_case);

    app.post("/alternatingCase", controllers.alternatingCase);

    app.post("/binaryConverter", controllers.binaryConverter);

    return app;
}
