const express = require('express');
const router = express.Router();

//traemos la conexion con la db
const mysqlConnection = require('../bd.configuracion/database');
console.log('Rutas de Presentaciones');

//Crear presentacion
router.post('/presentaciones/create', (req, res) => {
    const { Titulo,Fecha,Lugar,Presentador,Descripcion,Proyecto_Proy_ID } = req.body;
    const query ='INSERT INTO Presentacion(Titulo,Fecha,Lugar,Presentador,Descripcion,Proyecto_Proy_ID) VALUES (?,?,?,?,?,?)';
    mysqlConnection.query(query, [Titulo,Fecha,Lugar,Presentador,Descripcion,Proyecto_Proy_ID], (err, rows, fields) => {
        if (!err) {
            console.log("Presentacion creada con exito!");
            console.log(Proyecto_Proy_ID);
            res.redirect(`/ultimo/presentaciones/${Proyecto_Proy_ID}`);
        } else {
            console.log(err);
        }
    });
});
//retorna el id del proyecto para guardar los documentos asociados a ese proyecto.
router.get('/ultimo/presentaciones/:id_proyecto', (req, res) => {
    const { id_proyecto} = req.params;
    const query = `select * from presentacion where Proyecto_Proy_ID=? ORDER BY Presentacion_ID desc limit 1`;
    mysqlConnection.query(query, [ id_proyecto ], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log(rows);
            console.log("ultima presentacion retornado con exito");
        } else {
            console.log(err);
        }
    });
});
//retornar presentaciones
router.get('/presentaciones/:id', (req, res) => {
    const { id } = req.params;
    const query = `select * from Presentacion where Proyecto_Proy_ID=?`;
    mysqlConnection.query(query, [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log("Presentacoin retornadas con exito del proyecto "+ id);
        } else {
            console.log(err);
        }
    });
    
});
//retorna los docuemntos asociado a una presentacion
router.get('/presentaciones/documentos/:presentacion_id', (req, res) => {
    const { presentacion_id} = req.params;
    const query = `select * from documetos_presentacion where Presentacion_Presentacion_ID=?`;
    mysqlConnection.query(query, [presentacion_id], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log("Documentos de Presentacion retornadas con exito!");
        } else {
            console.log(err);
        }
    });
    
});

router.delete('/presentaciones/delete/:Presentacion_ID', (req, res) => {
    const { Presentacion_ID} = req.params;
    const query = `delete from presentacion where Presentacion_ID=?`;
    mysqlConnection.query(query, [ Presentacion_ID], (err, rows, fields) => {
        if (!err) {Presentacion_ID
            console.log("Presentacion Eliminada con exito!");
            res.json(rows.changedRows);
        } else {
            console.log(err);
        }
    });
});
router.post('/presentaciones/multi/create', (req, res) => {
    const { Nombre, Presentacion_Presentacion_ID, Presentacion_Proyecto_Proy_ID, URL} = req.body;
    const query = `insert into documetos_presentacion(URL,Presentacion_Presentacion_ID,Presentacion_Proyecto_Proy_ID,Nombre) values(?,?,?,?)`;
    mysqlConnection.query(query, [ Nombre, Presentacion_Presentacion_ID, Presentacion_Proyecto_Proy_ID, URL], (err, rows, fields) => {
        if (!err) {
            console.log("URL docuemnto agregado con exito!");
        } else {
            console.log(err);
        }
    });
});


module.exports = router;