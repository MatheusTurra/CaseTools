const { request } = require("express");

module.exports = () => {
    let controller = {};

    controller.uppercase = (req, res) => {
        let requestBody = req.body.value;
        res.send(JSON.stringify({value: requestBody.toUpperCase()}));
    }

    controller.lowercase = (req, res) => {
        let requestBody = req.body.value;
        res.send(JSON.stringify({value: requestBody.toLowerCase()}))
    }

    controller.camelCase = (req, res) => {
        let requestBody = req.body.value.toLowerCase();
        let splittedText = requestBody.split(" ");
        let camelCaseText;

        camelCaseText = splittedText.map((value, index) => {
            if (index === 0) {
                return value.charAt(0).toLowerCase() + value.slice(1).toLowerCase();
            }

            return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        }).join("");


        res.send(JSON.stringify({value: camelCaseText}))

        // splittedText.map(value => {
        //     let UppercaseWord = value[0].toUpperCase();
        //     let captalizedArray = [];
        //     let camelCaseText;
        //     return captalizedArray.push(value.replace(value[0], UppercaseWord) + " ");

        // }).join(" ");

        // console.log(splittedText)

    }

    return controller;
}