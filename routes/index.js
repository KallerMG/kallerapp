var express = require("express");
var router = express.Router();

var app = express();

app.get("/", function(request, response) {
    response.status(200).send({
        title: "kaka esteve aqui",
        version: "1.0.0"
    });
});

module.exports = app;