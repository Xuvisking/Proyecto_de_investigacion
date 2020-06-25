const express = require('express');
const router = express.Router();

//traemos la conexion con la db
const mysqlConnection = require('../bd.configuracion/database');

//Crear Evento
<<<<<<< HEAD
router.post('/reportes/create', (req, res) => {
    const { Nombre, Fecha_Inicial, Fecha_Final, Proyecto_Proy_ID } = req.body;
    console.log(req.body);
    const query ='INSERT INTO Reporte(Nombre,Fecha_inicial,Fecha_final,Proyecto_Proy_ID) VALUES (?,?,?,?)';
    mysqlConnection.query(query, [Nombre, Fecha_Inicial, Fecha_Final, Proyecto_Proy_ID], (err, rows, fields) => {
=======
console.log('Rutas de Reportes');
router.post('/reportes/create', (req, res) => {

<<<<<<< HEAD
    const { Nombre,Fecha_Inicial,Fecha_Final, Proyecto_Proy_ID } = req.body;
    const query ='INSERT INTO Reporte(Nombre, Fecha_inicial, Fecha_final, Proyecto_Proy_ID) VALUES (?,?,?,?)';
    mysqlConnection.query(query, [Nombre,Fecha_Inicial,Fecha_Final,Proyecto_Proy_ID], (err, rows, fields) => {
=======
    const { Fecha_Ini, Fecha_Fin, motivo, lugar, Proyecto_Proy_ID } = req.body;
    const query = `INSERT INTO viaje(Fecha_Ini,Fecha_Fin,motivo,lugar,Proyecto_Proy_ID) values(?,?,?,?,?)`;
    mysqlConnection.query(query, [Fecha_Ini, Fecha_Fin, motivo, lugar, Proyecto_Proy_ID], (err, rows, fields) => {
>>>>>>> b7f6893bfe91d7298c69380a6f863262e86f7a98
>>>>>>> c9dee85ef48a3dfa3729f3aa48b78c36931f3027
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("resporte creado con exito!");
        } else {
            console.log(err);
        }
    });
<<<<<<< HEAD
    
=======
<<<<<<< HEAD

=======
    mysqlConnection.end()
>>>>>>> b7f6893bfe91d7298c69380a6f863262e86f7a98
>>>>>>> c9dee85ef48a3dfa3729f3aa48b78c36931f3027
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
router.get('/reportes_proy/:id', (req, res) => {
    
    const { id } = req.params;
    const query = `select * from Reporte where Proyecto_Proy_ID=?`;
    mysqlConnection.query(query, [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log("Reportes retornados con exito del proyecto "+ id);
        } else {
            console.log(err);
        }
    });
    
});

router.get('/reportes', (req, res) => {
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
});




module.exports = router;