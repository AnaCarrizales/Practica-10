var express = require('express'); //importamos dependencia express
var app = express(); //declaramos una App de express

var port = process.env.PORT || 3000 //setteamos el puerto para que el servidor quede en escucha

//primera ruta (la cual está al nivel de la raíz /), Hello World!
app.get('/', function (req, res){
    res.send('<html><head></head><body><h1>Hello world!</h1></body></html>');//Msj que se mostrará
});

app.listen(port); //levantar el servidor y ponerlo a la escucha

//segunda ruta /api, regresa un objeto JSON
app.get('/api', function (req,res) {
    res.json({firstname: 'John', lastname: 'Doe'});
});
//tercera ruta, recibe un parámetro
app.get('/person/:id', function (req, res){
    res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>');
});
