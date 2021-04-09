module.exports = (app) => {

    app.get("/", (req, res) => {
        res.json({teste: "foi"});
    });

    app.post("/", (req, res) => {
        requestBody = req.body.value;
        console.log()
        res.send(JSON.stringify({value: requestBody.toUpperCase()}));
    });
    
    return app;
}
