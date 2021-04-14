module.exports = () => {
    let controller = {};

    controller.uppercase = (req, res) => {
        requestBody = req.body.value;
        console.log(requestBody)
        res.send(JSON.stringify({value: requestBody.toUpperCase()}));
    }

    controller.lowercase = (req, res) => {
        requestBody = req.body.value;
        console.log(req.body)
        res.send(JSON.stringify({value: requestBody.toLowerCase()}))
    }

    return controller;
}