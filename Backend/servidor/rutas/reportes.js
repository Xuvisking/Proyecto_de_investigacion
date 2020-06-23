const express = require('express');
const router = express.Router();

//traemos la conexion con la db
const mysqlConnection = require('../bd.configuracion/database');

//Crear Evento
console.log('Rutas de Reportes');
router.post('/reportes/create', (req, res) => {
    const mysqlConnection = require('../bd.configuracion/database');

    const { Fecha_Ini, Fecha_Fin, motivo, lugar, Proyecto_Proy_ID } = req.body;
    const query = `INSERT INTO viaje(Fecha_Ini,Fecha_Fin,motivo,lugar,Proyecto_Proy_ID) values(?,?,?,?,?)`;
    mysqlConnection.query(query, [Fecha_Ini, Fecha_Fin, motivo, lugar, Proyecto_Proy_ID], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Viaje creado con exito!");
        } else {
            console.log(err);
        }
    });
    mysqlConnection.end()
});

//Crear los multimedias del proyecto
/*router.post('/viaje/multi/create', (req, res) => {
    const { ID_viaje, URL } = req.body;
    const query = `INSERT INTO viajes_multimedia(ID_viaje,URL) values(?,?)`;
    mysqlConnection.query(query, [ID_viaje, URL], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Multimedia de viaje creada con exito!");
        } else {
            console.log(err);
        }
    });
});
*/
//retornar viajes
router.get('/reporte/:id', (req, res) => {
    const mysqlConnection = require('../bd.configuracion/database');
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
    mysqlConnection.end();
});

router.get('/reportes', (req, res) => {
    const mysqlConnection = require('../bd.configuracion/database');
    const { id } = req.params;
    const query = `SELECT * FROM Reporte`;
    mysqlConnection.query(query, [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log("Viajes retornados con exito!");
        } else {
            console.log(err);
        }
    });
    mysqlConnection.end();
});


//retornar todos el multimedia de un viaje
router.get('/reportes/multi/:id_viaje', (req, res) => {
    const mysqlConnection = require('../bd.configuracion/database');
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
    mysqlConnection.end();
});

module.exports = router;