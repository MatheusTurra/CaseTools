module.exports = (app) => {

    app.get("/", (req, res) => {
        res.json({teste: "Rota get / funcionando !"});
    });

    app.post("/", (req, res) => {
        requestBody = req.body.value;
        res.send(JSON.stringify({value: requestBody.toUpperCase()}));
    });
    
    return app;
}
