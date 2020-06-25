var express = require('express');
var http = require('http');
var app = express();
var cors = require('cors');
var morgan = require('morgan');
//mensaje al inicio del server
app.get('/', (req, res) => {
    res.status(200).send("Welcome to API REST")
})
//inicia el servidor y se muestra en consola
http.createServer(app).listen(3000, () => {
    console.log('Server started at http://localhost:3000');
});

//----------------middlewares----------------

//nos muestras las peticiones que esta teniendo la api
app.use(morgan('dev'));

//Para lecturas de json
app.use(express.json());

//Para los cors del navegador
app.use(cors());


//vistas
app.set('view engine', 'ejs');
//---------------Rutas----------------------
//routes
app.use(require('./rutas/usuarios'));
app.use(require('./rutas/proyectos'));
app.use(require('./rutas/grupos'));