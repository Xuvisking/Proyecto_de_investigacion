const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database');

//Obetener ID del Formulario
router.get('/proyecto/formulario/:id', (req, res) => {
    const { id } = req.params;
    const query = `select * from Formulario where Formulario_ID=?`;
    mysqlConnection.query(query, [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log("Formulario ID retornados con exito!");
        } else {
            console.log(err);
        }
    });
});

//Crear solicitud de Proyecto
router.post('/proyecto/crear', (req, res) => {
    const { Nombre, Descripcion} = req.body;
    const query = `INSERT INTO Formulario(Nombre,Descripcion) VALUES (?,?)`;
    mysqlConnection.query(query, [Nombre, Descripcion], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Formulario creado!");
        } else {
            console.log(err);
        }
    });
});

//Eliminar Proyecto

router.post('/proyecto/eliminar', (req, res) => {
    const { Proy_ID } = req.body;
    const query = `DELETE FROM Proyecto WHERE Proy_ID=?`;
    mysqlConnection.query(query, [Proy_ID], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Proyecto borrado!");
        } else {
            console.log(err);
        }
    });
});

//Modificar Proyecto

//Cambiar JP

module.exports=router;