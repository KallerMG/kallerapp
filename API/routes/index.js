var express = require("express");
var router = express.Router();

var app = express();
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.get("/", function(request, response) {
    response.status(200).send({
        title: "kaka esteve aqui",
        version: "1.0.0"
    });
});

module.exports = app;