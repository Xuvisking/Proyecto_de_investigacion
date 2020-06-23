var express = require('express');
var http = require('http');
var app = express();
var cors = require('cors');
//mensaje al inicio del server

app.get('/', (req, res) => {
        res.status(200).send("Welcome to API REST")
    })
    //inicia el servidor y se muestra en consola
http.createServer(app).listen(3000, () => {
    console.log('Server started at http://localhost:3000');
});

//----------------middlewares----------------

//Para lecturas de json
app.use(express.json());
//con esto puedo acceder a la imagen con una ruta asi :http://localhost:3000/DSC04143.jpg
app.use(express.static('imagenes'));
//Para los cors del navegador
app.use(cors({origin:'*'}));

//Para ver ficheros 
//---------------Rutas----------------------
//routes
app.use(require('./servidor/rutas/eventos'));
app.use(require('./servidor/rutas/reportes'));
app.use(require('./servidor/rutas/usuarios'));
