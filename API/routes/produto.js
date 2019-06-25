var express = require("express");
var router = express.Router();
var app = express();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const produtos = [
    {
    id: 1,
    descricao: "Tênis"
    },
    {
    id: 2,
    descricao: "Camiseta"
    },
    {
    id: 3,
    descricao: "Boné"
    }
];

app.get("/", function(request, response) {
    response.status(200).send(produtos);
});

app.get("/:id", function(request, response) {
    let produto = produtos.find(
        produto => produto.id === parseInt(request.params.id)
    );
    
    if (produto) {
        response.status(200).send(produto);
    } else {
        response.status(404).send("Not Found");
    }
});

app.post("/", function(request, response) {
    let proximo = produtos.length + 1;
    
    let novo = {
    id: proximo,
    descricao: request.body.descricao
    };
    produtos.push(novo);
    response.status(201).send(novo);
});

app.put("/:id", function(request, response) {
    let produto = produtos.find(
    produto => produto.id === parseInt(request.params.id)
    );
    if (produto) {
        let alterado = {
            id: produto.id,
            descricao: request.body.descricao
        };
    let index = produtos.indexOf(produto);
    produtos.splice(index, 1, alterado);
    response.status(204).send(alterado);
    } else {
        response.status(404).send("Not Found");
    }
});

app.delete("/:id", function(request, response) {
    let produto = produtos.find(
    produto => produto.id === parseInt(request.params.id)
    );
    
    if (produto) {
        let index = produtos.indexOf(produto);
        produtos.splice(index, 1);
    }
    
    response.status(204).send("DELETE");
});


module.exports = app;