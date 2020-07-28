const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database');

//Retornar datos de un proyecto ingresando el user id WORK
router.get('/invitacion/getdata/:users_User_ID', (req, res) => {
    const { users_User_ID } = req.params;
    const query = `SELECT * FROM Inv_proy WHERE users_User_ID=?`;
    mysqlConnection.query(query, [users_User_ID], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Datos retornados con exito!");
        } else {
            console.log(err);
        }
    });
});

//Eliminar invitacion WORK
router.get('/invitacion/deletedata/:INV_ID', (req, res) => {
    const { INV_ID } = req.params;
    const query = `DELETE FROM Inv_proy WHERE INV_ID=?`;
    mysqlConnection.query(query, [INV_ID], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Invitacion eliminada con exito!");
        } else {
            console.log(err);
        }
    });
});

//Añadir al proyecto
router.post('/invitacion/ingresarproyecto/', (req, res) => {
    const { Proyecto_Proy_ID , users_User_ID } = req.body;
    const query = `INSERT INTO users_has_Proyecto(users_User_ID, Proyecto_Proy_ID,JP,Permiso) VALUES (?,?,0,1)`;
    mysqlConnection.query(query, [users_User_ID , Proyecto_Proy_ID], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Usuario añadido al proyecto con exito!");
        } else {
            console.log(err);
        }
    });
});

//Retornar nombre del proyecto
router.get('/invitacion/proyectname/:Proy_ID', (req, res) => {
    const { Proy_ID } = req.params;
    const query = `SELECT Nombre FROM Proyecto WHERE Proy_ID=? `;
    mysqlConnection.query(query, [ Proy_ID ], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Nombre retornado con exito!");
        } else {
            console.log(err);
        }
    });
});

module.exports=router;