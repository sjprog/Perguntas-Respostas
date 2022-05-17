const express = require("express");
const app = express();

// Estou dizendo para o Express usar o EJS como View engine
app.set('view engine', 'ejs');


app.get("/", (req, res) => {
    var nome = "Sidney";
    var lang = "Javascript";
    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: "siqueira",
        inscritos: 84150
     });

});
 
app.listen(8080, () => {
    console.log("App Rodando!");
});



