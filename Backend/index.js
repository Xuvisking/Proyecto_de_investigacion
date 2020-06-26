var express = require('express');
var http = require('http');
var app = express();
var cors = require('cors');
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

// const mysqlConnection = require('../Backend/servidor/bd.configuracion/database')

//----------------middlewares----------------
app.get('/download/:documento', function(req, res){

    //se obtiene el valor de params para saber el nombre del archivo que se quiere descargar
    const documento=req.params.documento;
    //se crear la ruta de donde guardamos los archivos 
    const file = `${__dirname}/documentos/${documento}`;
    //se envia la resputa para que el navegador descarge el archivo
    res.download(file, function (err) {
        if (err) {
            console.log(err);
          // Handle error, but keep in mind the response may be partially-sent
          // so check res.headersSent
        } else {
            console.log('Archivo descargado con exito');
        }
      })
});

//Para lecturas de json
app.use(express.json());
//con esto puedo acceder a la imagen con una ruta asi :http://localhost:3000/DSC04143.jpg
app.use(express.static('imagenes'));
app.use(express.static('documentos'));
//Para los cors del navegador
app.use(cors({origin:'*'}));

//Para ver ficheros 
//---------------Rutas----------------------
//routes
app.use(require('./servidor/rutas/eventos'));
app.use(require('./servidor/rutas/reportes'));
app.use(require('./servidor/rutas/presentacion'));
app.use(require('./servidor/rutas/usuarios'));
