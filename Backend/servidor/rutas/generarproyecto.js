const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database');

//Crear solicitud de Proyecto
router.post('/proyecto/generarproy', (req, res) => {
    const { Nombre, Descripcion, Estado} = req.body;
    const query = `INSERT INTO Proyecto(Nombre, Descripcion, Estado) VALUES (?,?,?)`;
    mysqlConnection.query(query, [Nombre, Descripcion, Estado], (err, rows, fields) => {
        if (!err) {
            const query = `SELECT Proy_ID FROM Proyecto WHERE Nombre=? AND Descripcion=? AND Estado=?`;
            mysqlConnection.query(query, [Nombre, Descripcion, Estado], (err, rows, fields) => {
                if (!err) {
                    console.log(req);
                    res.json(rows);
                    console.log("Formulario creado!");
                } else {
                    console.log(err);
                }
            });
        } else {
            console.log(err);
        }
    });
});

//Asociar un JP al nuevo Proyecto
router.post('/proyecto/vincularJPproy', (req, res) => {
    const { users_User_ID, Proyecto_Proy_ID} = req.body;
    const query = `INSERT INTO users_has_Proyecto(users_User_ID, Proyecto_Proy_ID, JP, Permiso) VALUES (?,?,1,1)`;
    mysqlConnection.query(query, [ users_User_ID, Proyecto_Proy_ID], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("JP asociado!");
        } else {
            console.log(err);
        }
    });
});

module.exports=router;