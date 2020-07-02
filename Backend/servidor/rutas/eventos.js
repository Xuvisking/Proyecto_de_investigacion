const express = require('express');
const router = express.Router();
var cors = require('cors');
var app = express();
//traemos la conexion con la db
const mysqlConnection = require('../database')
const multer = require('multer');


app.use(cors({origin:'*'}));

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
//insertar doc en api
router.post('/viajes/multi/doc',uploadFnct('documentos','documents'),(req,res) =>{
    console.log("Documentos subidos con exito");
    res.json({
        'message':'Docuemento guardado en el servidor!'
    });
});
//insertar imagen en api
router.post('/viajes/multi/img',uploadFnct('imagenes','files'),(req,res) =>{
    
    console.log("Imagenes subidas con exito!");
    res.json({
        'message':'Imagenes agregar con exito!'
    });
});
//Actualizar cambio
router.put('/viajes/update', (req, res) => {
    console.log(req.body);
    const { Fecha_inicial, Fecha_final, Motivo, Lugar, Descripcion, Viaje_ID} = req.body;
    const query = `UPDATE viaje SET Fecha_inicial=?,Fecha_final=?,Motivo=?,Lugar=?,Descripcion=? WHERE Viaje_ID=?`;
    mysqlConnection.query(query, [Fecha_inicial, Fecha_final, Motivo, Lugar, Descripcion ,Viaje_ID], (err, rows, fields) => {
        if (!err) {
            console.log("Viaje Actualizado con exito!");
            res.json(rows.changedRows);
        } else {
            console.log(err);
        }
    });
});

//Actualizar cambio
router.delete('/viajes/delete/:Viaje_Id', (req, res) => {
    const { Viaje_Id} = req.params;
    const query = `delete from viaje where Viaje_ID=?`;
    mysqlConnection.query(query, [ Viaje_Id], (err, rows, fields) => {
        if (!err) {
            console.log("Viaje Eliminado con exito!");
            res.json(rows.changedRows);
        } else {
            console.log(err);
        }
    });
});
//Crear Evento
router.post('/viajes/create', (req, res) => {
    console.log(req.body);
    const { Fecha_inicial, Fecha_final, Motivo, Lugar, Proyecto_Proy_ID, Descripcion} = req.body;
    console.log(Proyecto_Proy_ID);
    const query = `INSERT INTO viaje(Fecha_inicial,Fecha_final,motivo,lugar,Proyecto_Proy_ID,Descripcion) values(?,?,?,?,?,?)`;
    mysqlConnection.query(query, [Fecha_inicial, Fecha_final, Motivo, Lugar, Proyecto_Proy_ID, Descripcion], (err, rows, fields) => {
        if (!err) {
            console.log("Viaje creado con exito!");
            res.redirect(`/ultimo/viaje/${Proyecto_Proy_ID}`);

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
            console.log("Multimedia de viaje creada con exito!");
        } else {
            console.log(err);
        }
    });
    
});
//crear doc
router.post('/viaje/multi/doc/create', (req, res) => {
    const {URL, Viaje_Viaje_ID, Viaje_Proyecto_Proy_ID, Nombre} = req.body;
    const query = `insert into Viaje_documentos(URL,Viaje_Viaje_ID,Viaje_Proyecto_Proy_ID,Nombre) values (?,?,?,?);`;
    mysqlConnection.query(query, [URL, Viaje_Viaje_ID, Viaje_Proyecto_Proy_ID, Nombre], (err, rows, fields) => {
        if (!err) {
            console.log("Doc de viaje creada con exito!");
        } else {
            console.log(err);
        }
    });
});
//retornar doc
router.get('/viaje/multi/doc/:id_viaje', (req, res) => {
    const { id_viaje } = req.params;
    const query = `select * from Viaje_documentos where Viaje_Viaje_ID=?`;
    mysqlConnection.query(query, [id_viaje], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log("Documentos de viaje retornados con exito!");
        } else {
            console.log(err);
        }
    });
});

//retornar viajes
router.get('/ultimo/viaje/:id_proyecto', (req, res) => {
    const { id_proyecto} = req.params;
    const query = `select * from viaje where Proyecto_Proy_ID=? ORDER BY viaje_id desc limit 1`;
    mysqlConnection.query(query, [ id_proyecto ], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log(rows);
            console.log("ultimo viaje retornado con exito");
        } else {
            console.log(err);
        }
    });
});

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
    const query = `select * from fotos_viaje where Viaje_Viaje_ID=?`;
    mysqlConnection.query(query, [id_viaje], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log("Imagenes de viaje retornados con exito!");
        } else {
            console.log(err);
        }
    });
});
module.exports = router;