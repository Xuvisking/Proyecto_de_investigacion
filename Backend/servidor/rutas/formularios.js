const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database');


//Obetener Formulario
router.get('/formularios/:Formulario_ID', (req, res) => {
    const { Formulario_ID } = req.params;
    const query = `select * from Formulario where Formulario_ID=?`;
    mysqlConnection.query(query, [Formulario_ID], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log("Formulario retornado con exito!");
        } else {
            console.log(err);
        }
    });
});


//Crear solicitud de Proyecto
router.post('/formularios/crear', (req, res) => {
    const { Nombre, Descripcion, User_ID} = req.body;
    const query = `INSERT INTO Formulario(Nombre,Descripcion, users_User_ID) VALUES (?,?)`;
    mysqlConnection.query(query, [Nombre, Descripcion, User_ID], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Formulario creado!");
        } else {
            console.log(err);
        }
    });
});

//Eliminar solicitud Proyecto
router.post('/formularios/eliminar', (req, res) => {
    const { Formulario_ID } = req.body;
    const query = `DELETE FROM Proyecto WHERE Proy_ID=?`;
    mysqlConnection.query(query, [Formulario_ID], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Formulario borrado!");
        } else {
            console.log(err);
        }
    });
});

//Obetener nombre del Formulario
router.get('/formularios/nombre/:Formulario_ID', (req, res) => {
    const { Formulario_ID } = req.params;
    const query = `select Nombre from Formulario where Formulario_ID=?`;
    mysqlConnection.query(query, [Formulario_ID], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log("Nombre del Formulario retornado con exito!");
        } else {
            console.log(err);
        }
    });
});

//Obetener Descripcion del Formulario
router.get('/formularios/descripcion/:Formulario_ID', (req, res) => {
    const { Formulario_ID } = req.params;
    const query = `select Descripcion from Formulario where Formulario_ID=?`;
    mysqlConnection.query(query, [Formulario_ID], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log("Descripcion del Formulario retornado con exito!");
        } else {
            console.log(err);
        }
    });
});

//Obetener usuario del Formulario
router.get('/formularios/usuario/:Formulario_ID', (req, res) => {
    const { Formulario_ID } = req.params;
    const query = `select users_User_ID from Formulario where Formulario_ID=?`;
    mysqlConnection.query(query, [Formulario_ID], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log("Descripcion del Formulario retornado con exito!");
        } else {
            console.log(err);
        }
    });
});

module.exports=router;