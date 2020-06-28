const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database');

//retorna todos los proyectos de algun usuario
router.get('/home/retornarproy/:User_ID', (req, res) => {
    const { User_ID } = req.params;
    const query = `SELECT Proyecto_Proy_ID FROM users_has_Proyecto WHERE users_User_ID=?`;
    mysqlConnection.query(query, [User_ID], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log("Proyectos del usuario retornado con exito!");
        } else {
            console.log(err);
        }
    });
});

//retorna todos los datos del proyecto
router.get('/home/retornarproydata/:Proy_ID', (req, res) => {
    const { Proy_ID } = req.params;
    const query = `SELECT * FROM Proyecto WHERE Proy_ID=?`;
    mysqlConnection.query(query, [Proy_ID], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log("Datos del proyecto retornado con exito!");
        } else {
            console.log(err);
        }
    });
});

module.exports=router;