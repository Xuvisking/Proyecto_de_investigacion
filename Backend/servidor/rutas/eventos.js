const express = require('express');
const router = express.Router();

//traemos la conexion con la db
<<<<<<< HEAD
const mysqlConnection = require('../bd.configuracion/database')
const multer = require('multer');

var uploadFnct = function(dest,type){
    var storage = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null,dest);
        },
        filename:(req,file,cb)=>{
            cb(null,file.originalname)
        }
    });
    var upload = multer({
                    storage: storage
                }).array(type);

    return upload;
};
/*
//con esto subimos imagenes a nuestra api
const storage=multer.diskStorage({
        destination:'imagenes/',
        CZ
});
//con esto subimos Documentos a nuestra api
const storageDoc=multer.diskStorage({
    destination:'doc/',
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
});

const upload=multer({storage});
const uploadDoc=multer({storageDoc});
*/
router.post('/viajes/multi/doc',uploadFnct('documentos','documents'),(req,res) =>{
    console.log("Documentos subidos con exito");
    res.json({
        'message':'Docuemento guardado en el servidor!'
    });
});

router.post('/viajes/multi/img',uploadFnct('imagenes','files'),(req,res) =>{
    
    console.log("Imagenes subidas con exito!");
    res.json({
        'message':'Imagenes agregar con exito!'
    });
});
=======
// const mysqlConnection = require('../database')
>>>>>>> b7f6893bfe91d7298c69380a6f863262e86f7a98

//Crear Evento
router.post('/viajes/create', (req, res) => {
    console.log(req.body);
    const { Fecha_inicial, Fecha_final, motivo, lugar, Proyecto_Proy_ID, Descripcion} = req.body;
    const query = `INSERT INTO viaje(Fecha_inicial,Fecha_final,motivo,lugar,Proyecto_Proy_ID,Descripcion) values(?,?,?,?,?,?)`;
    mysqlConnection.query(query, [Fecha_inicial, Fecha_final, motivo, lugar, Proyecto_Proy_ID, Descripcion], (err, rows, fields) => {
        if (!err) {
            console.log("Viaje creado con exito!");
        } else {
            console.log(err);
        }
    });

});

//Crear los multimedias del proyecto
router.post('/viaje/multi/create', (req, res) => {
    const {URL, Viaje_Viaje_ID, Viaje_Proyecto_Proy_ID, Nombre} = req.body;
    const query = `insert into fotos_viaje(URL,Viaje_Viaje_ID,Viaje_Proyecto_Proy_ID,Nombre) values (?,?,?,?);`;
    mysqlConnection.query(query, [URL, Viaje_Viaje_ID, Viaje_Proyecto_Proy_ID, Nombre], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Multimedia de viaje creada con exito!");
        } else {
            console.log(err);
        }
    });
});

//retornar viajes
<<<<<<< HEAD
router.get('/ultimo/viaje/:id_proyecto', (req, res) => {
    const { id_proyecto} = req.params;
    const query = `select * from viaje where Proyecto_Proy_ID=? ORDER BY viaje_id desc limit 1`;
    mysqlConnection.query(query, [ id_proyecto ], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log("ultimo viaje retornado con exito");
        } else {
            console.log(err);
        }
    });
});
=======
router.get('/testreporte', (req, res) => {
    res.status(200).send("conectar api reportes")
})
>>>>>>> b7f6893bfe91d7298c69380a6f863262e86f7a98

router.get('/viajes/:id', (req, res) => {
    const { id } = req.params;
    const query = `select * from viaje where Proyecto_Proy_ID=?`;
    mysqlConnection.query(query, [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log("Viajes retornados con exito!");
        } else {
            console.log(err);
        }
    });
});

router.get('/viaje/:id', (req, res) => {
    const { id } = req.params;
    const query = `select * from viaje where Viaje_ID=?`;
    mysqlConnection.query(query, [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log("Viaje retornados con exito!");
        } else {
            console.log(err);
        }
    });
});

//retornar todos el multimedia de un viaje
router.get('/viajes/multi/:id_viaje', (req, res) => {
    const { id_viaje } = req.params;
    const query = `select * from viajes_multimedia where ID_viaje=?;`;
    mysqlConnection.query(query, [id_viaje], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log("Viajes retornados con exito!");
        } else {
            console.log(err);
        }
    });
});

module.exports = router;