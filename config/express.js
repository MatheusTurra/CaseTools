const express = require("express");
const cors = require("cors");

const main = require("../routes/main");

module.exports = () => {
    const app = express();

    const corsOptions = {
        origin: "*",
        optionsSuccessStatus: 200
    }

    app.use(express.json());
    app.use(express.urlencoded({extended: false}))
    app.use(cors(corsOptions));

    app.set("PORT", 3000)
    
    main(app);
    
    return app;
};