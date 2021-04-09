module.exports = (app) => {

    app.get("/", (req, res) => {
        res.json({teste: "foi"});
    });

    app.post("/", (req, res) => {
        res.send(req.body)
        console.log(req.body);
    });
    
    return app;
}
