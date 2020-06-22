var express = require('express');
var bodyParser = require('body-parser')
var http = require('http');
var cors = require('cors');
var morgan = require('morgan');

var app = express();


var corsOptions = {
    origin: "http://localhost:8081"
  };
  
app.use(cors(corsOptions));

//Para lecturas de json
app.use(bodyParser.json());

const db = require("./servidor/configuracion/db.configuracion.js");

// llamadas a la api con - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

  //mensaje al inicio del server
app.get('/', (req, res) => {
    res.json({ message: "Welcome to GestorProyectos application." });
    })

//inicia el servidor y se muestra en consola



//----------------middlewares----------------

require('./servidor/rutas/usuarios.rutas');
require('./servidor/rutas/proyecto.rutas');
require('./servidor/rutas/grupos.rutas');

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


//nos muestras las peticiones que esta teniendo la api



