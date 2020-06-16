const express = require('express');
const router = express.Router();

//Crear Evento
router.post('/viaje/create', (req, res) => {
    const { Fecha_Ini, Fecha_Fin, motivo, lugar, Proyecto_Proy_ID } = req.body;
    const query = `INSERT INTO viaje(Fecha_Ini,Fecha_Fin,motivo,lugar,Proyecto_Proy_ID) values(?,?,?,?,?);`;
    mysqlConnection.query(query, [Fecha_Ini, Fecha_Fin, motivo, lugar, Proyecto_Proy_ID], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Viaje creado con exito!");
        } else {
            console.log(err);
        }
    });
});

//Crear los multimedias del proyecto
router.post('/viaje/multi/create', (req, res) => {
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

//retornar viajes
router.get('/viajes/:id_proyecto', (req, res) => {
    const { id_proyecto } = req.param;
    const query = `select * from viaje where Proyecto_Proy_ID=?;`;
    mysqlConnection.query(query, [id_proyecto], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Viajes retornados con exito!");
        } else {
            console.log(err);
        }
    });
});

//retornar todos el multimedia de un viaje
router.get('/viajes/:id_viaje', (req, res) => {
    const { id_viaje } = req.param;
    const query = `select * from viajes_multimedia where ID_viaje=?;`;
    mysqlConnection.query(query, [id_viaje], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Viajes retornados con exito!");
        } else {
            console.log(err);
        }
    });
});

module.exports = router;