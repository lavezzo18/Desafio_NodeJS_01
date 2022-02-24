var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('OLÁ MUNDO, VAMOS QUEBRAR TUDO!');
});

app.listen(7000, function() {
    console.log('Executando na porta 7000!');
});
