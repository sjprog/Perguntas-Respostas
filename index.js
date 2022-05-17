const express = require("express");
const app = express();

// Estou dizendo para o Express usar o EJS como View engine
app.set('view engine', 'ejs');


app.get("/:nome/:lang", (req, res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = false;

    var produtos = [
        { nome: "Games", preco: 6.143 },
        { nome: "Cerveja", preco: 4.50 },
        {nome: "Whey", preco: 350.00},
        {nome: "Monitor", preco: 1.250},
        {nome: "Carro", preco: 89.350},
        {nome: "Sapato", preco: 150.00},
]
    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: "siqueira",
        inscritos: 84150,
        msg: exibirMsg,
        produtos: produtos

     });

}); 
 
app.listen(8080, () => {
    console.log("App Rodando!");
});



