var express = require('express');
var http = require('http');
var app = express();
var cors = require('cors');
var morgan = require('morgan');
const multer =require('multer');
const storage=multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,'./imagenes')
        },
        filename:(req,file,cb)=>{
            cb(null,file.originalname)
        }
});
const upload=multer({storage});


app.post('/viajes/multi/img',upload.array('files'),(req,res) =>{
    console.log("Imagenes subidas con exito!");
    res.json({
        'message':'Imagenes agregar con exito!'
    });
    
});

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

//Para los cors del navegador
app.use(cors({origin:'*'}));

//Para guardar ficheros 

//---------------Rutas----------------------
//routes
app.use(require('./servidor/rutas/eventos'));
app.use(require('./servidor/rutas/reportes'));
