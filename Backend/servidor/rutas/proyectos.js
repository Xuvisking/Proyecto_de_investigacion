const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database');



//Obetener proyecto
router.get('/proyectos/:Proy_ID', (req, res) => {
    const { Proy_ID } = req.params;
    const query = `select * from Proyecto where Proy_ID=?`;
    mysqlConnection.query(query, [Proy_ID], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Proyecto retornado con exito!");
            console.log(rows)
        } else {
            console.log(err);
        }
    });
});


//Crear Proyecto
router.post('/proyectos/crear', (req, res) => {
    const { Nombre,Descripcion } = req.body;
    const query = `INSERT INTO Proyecto(Nombre,Descripcion,Estado) VALUES (?,?)`;
    mysqlConnection.query(query, [Nombre,Descripcion], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Proyecto creado!");
        } else {
            console.log(err);
        }
    });
});

//Eliminar Proyecto
router.post('/proyectos/eliminar', (req, res) => {
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

//Conseguir Descripcion
router.get('/proyectos/descripcion/:Proy_ID', (req, res) => {
    const { Proy_ID } = req.params;
    const query = `SELECT Descripcion FROM Proyecto WHERE Proy_ID=?`;
    mysqlConnection.query(query, [Proy_ID], (err, rows, fields) => {
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
router.post('/proyectos/descripcion/cambiar', (req, res) => {
    const { Descripcion, Proy_ID } = req.body;
    const query = `UPDATE Proyecto SET Descripcion = ? WHERE Proy_ID = ?`;
    mysqlConnection.query(query, [Descripcion, Proy_ID], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Descripcion cambiada!");
        } else {
            console.log(err);
        }
    });
});

//Conseguir estado
router.get('/proyectos/estado/:Proy_ID', (req, res) => {
    const { Proy_ID } = req.params;
    const query = `SELECT Estado FROM Proyecto WHERE Proy_ID=?`;
    mysqlConnection.query(query, [Proy_ID], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Descripción conseguida");
        } else {
            console.log(err);
        }
    });
});

//Cambiar Estado
router.post('/proyectos/estado/cambiar', (req, res) => {
    const { Estado, Proy_ID } = req.body;
    const query = `UPDATE Proyecto SET Estado = ? WHERE Proy_ID = ?`;
    mysqlConnection.query(query, [Estado, Proy_ID], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Estado cambiado!");
        } else {
            console.log(err);
        }
    });
});

//Conseguir Nombre
router.get('/proyectos/nombre/:Proy_ID', (req, res) => {
    const { Proy_ID } = req.params;
    const query = `SELECT Nombre FROM Proyecto WHERE Proy_ID=?`;
    mysqlConnection.query(query, [Proy_ID], (err, rows, fields) => {
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
router.post('/proyectos/nombre/cambiar', (req, res) => {
    const { Nombre , Proy_ID } = req.body;
    const query = `UPDATE proyecto SET Nombre=? WHERE Proy_ID=?`;
    mysqlConnection.query(query, [Nombre , Proy_ID], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Nombre cambiado!");
        } else {
            console.log(err);
        }
    });
});

//------------------------------------------------------------------

//Obetener Documentos
router.get('/proyectos/documentos/:Proy_ID', (req, res) => {
    const { Proy_ID } = req.params;
    const query = `select * from Documento where Proyecto_Proy_ID=?`;
    mysqlConnection.query(query, [Proy_ID], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log("Documentos de un proyecto retornados con exito!");
        } else {
            console.log(err);
        }
    });
});

module.exports=router;