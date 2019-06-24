var express = require('express');
var app = express();
var path = require("path");

app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname+'/home.html'));
    });
    
app.get('/sobre', function (request, response) {
        response.sendFile(path.join(__dirname+'/sobre.html'));
});

app.listen(3000, function() {
    console.log('Servidor rodando! Acesse: http://localhost:3000');
});

