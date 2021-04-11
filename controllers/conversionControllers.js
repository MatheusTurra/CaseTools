module.exports = () => {
    let controller = {};

    controller.uppercase = (req, res) => {
        requestBody = req.body.value;
        res.send(JSON.stringify({value: requestBody.toUpperCase()}));
    }

    return controller;
}