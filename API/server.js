var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var index = require("./routes/index");
var produto = require("./routes/produto");

app.use("/", index);
app.use("/produto",produto);




app.listen(3000, function() {
    console.log('Servidor rodando! Acesse: http://localhost:3000');
});

