const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database');

//Obetener Documento
router.get('/proyectos/documentos/:Doc_ID', (req, res) => {
    const { Doc_ID } = req.params;
    const query = `select * from Documento where Doc_ID=?`;
    mysqlConnection.query(query, [Doc_ID], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log("Documento retornado con exito!");
        } else {
            console.log(err);
        }
    });
});


//Añadir Documento
router.post('/proyectos/documentos/crear', (req, res) => {
    const { Nombre,Descripcion,Proy_ID,URL } = req.body;
    const query = `INSERT INTO Documento(Nombre,Descripcion,Proyecto_Proy_ID,URL) VALUES (?,?,?,?)`;
    mysqlConnection.query(query, [Nombre,Descripcion,Proy_ID,URL], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Documento creado!");
        } else {
            console.log(err);
        }
    });
});

//Eliminar Documento
router.post('/proyectos/documentos/eliminar', (req, res) => {
    const { Doc_ID } = req.body;
    const query = `DELETE FROM Documento WHERE Doc_ID=?`;
    mysqlConnection.query(query, [Doc_ID], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Documento borrado!");
        } else {
            console.log(err);
        }
    });
});

//Conseguir Nombre
router.get('/proyectos/documentos/nombre/:Doc_ID', (req, res) => {
    const { Doc_ID } = req.params;
    const query = `SELECT Nombre FROM Documento WHERE Doc_ID=?`;
    mysqlConnection.query(query, [Doc_ID], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Nombre conseguido");
        } else {
            console.log(err);
        }
    });
});

//Cambiar Nombre
router.post('/proyectos/documentos/nombre/cambiar', (req, res) => {
    const { Nombre, Doc_ID } = req.body;
    const query = `UPDATE Documento SET Nombre = ? WHERE Doc_ID = ?`;
    mysqlConnection.query(query, [Nombre, Doc_ID], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Nombre cambiado!");
        } else {
            console.log(err);
        }
    });
});

//Conseguir Descripcion
router.get('/proyectos/documentos/descripcion/:Doc_ID', (req, res) => {
    const { Doc_ID } = req.params;
    const query = `SELECT Descripcion FROM Documento WHERE Doc_ID=?`;
    mysqlConnection.query(query, [Doc_ID], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Descripción conseguida");
        } else {
            console.log(err);
        }
    });
});

//Cambiar Descripcion
router.post('/proyectos/documentos/descripcion/cambiar', (req, res) => {
    const { Descripcion, Doc_ID } = req.body;
    const query = `UPDATE Documento SET Descripcion = ? WHERE Doc_ID = ?`;
    mysqlConnection.query(query, [Descripcion, Doc_ID], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Descripcion cambiada!");
        } else {
            console.log(err);
        }
    });
});

//Conseguir URL
router.get('/proyectos/documentos/URL/:Doc_ID', (req, res) => {
    const { Doc_ID } = req.params;
    const query = `SELECT URL FROM Documento WHERE Doc_ID=?`;
    mysqlConnection.query(query, [Doc_ID], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("URL conseguida");
        } else {
            console.log(err);
        }
    });
});

module.exports=router;