module.exports = (app) => {

    app.get("/", (req, res) => {
        res.json({teste: "foi"});
    });
    
    return app;
}
