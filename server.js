const app = require("./config/express")();

app.listen(app.get("PORT"), () => {
    console.log("Server listening on http://localhost:" + app.get("PORT"));
});
