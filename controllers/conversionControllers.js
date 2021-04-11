module.exports = () => {
    let controller = {};

    controller.uppercase = (req, res) => {
        requestBody = req.body.value;
        console.log(JSON.stringify({value: requestBody.toUpperCase()}))
        res.send(JSON.stringify({value: requestBody.toUpperCase()}));
    }

    return controller;
}