var express = require('express');
var bodyParser = require('body-parser')
var cors = require('cors');
var morgan = require('morgan');

var app = express();


var corsOptions = {
    origin: "http://localhost:8081"
  };
  
app.use(cors(corsOptions));

//Para lecturas de json
app.use(bodyParser.json());

// llamadas a la api con - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./servidor/modelos");
db.sequelize.sync();
  
  //mensaje al inicio del server
app.get('/', (req, res) => {
    res.json({ message: "Welcome to GestorProyectos application." });
    })

//inicia el servidor y se muestra en consola
app.use(require("./servidor/rutas/proyectos.rutas"));

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


//----------------middlewares----------------

//nos muestras las peticiones que esta teniendo la api



