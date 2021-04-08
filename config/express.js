const express = require("express");


module.exports = () => {
    const app = express();

    app.set("PORT", 3000)

    return app;
};