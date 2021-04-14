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
    }

    controller.snake_case = (req, res) => {
        let requestBody = req.body.value.toLowerCase();
        let snake_case_output = "";
        for(let i = 0; i < requestBody.length; i++) {
            if (requestBody[i] === " ") {
                snake_case_output += "_";
            } else {
                snake_case_output += requestBody[i];
            }
        }
        res.send(JSON.stringify({value: snake_case_output}));
    };

    return controller;
}