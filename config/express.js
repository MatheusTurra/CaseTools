const express = require("express");
const main = require("../routes/main");

module.exports = () => {
    const app = express();

    app.set("PORT", 3000)
    
    main(app);
    
    return app;
};