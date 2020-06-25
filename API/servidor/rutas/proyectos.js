const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database');


//------------------------FORMULARIO--------------------------------------
//Obetener Formulario
router.get('/proyectos/formulario/:ID', (req, res) => {
    const { ID } = req.params;
    const query = `select * from Formulario where Formulario_ID=?`;
    mysqlConnection.query(query, [ID], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log("Formulario retornado con exito!");
        } else {
            console.log(err);
        }
    });
});

//Obetener Formularios
router.get('/proyectos/formulario/all', (req, res) => {
    const query = `select * from Formulario`;
    mysqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log("Formularios retornados con exito!");
        } else {
            console.log(err);
        }
    });
});

//Crear solicitud de Proyecto
router.post('/proyectos/formulario/crear', (req, res) => {
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

//Eliminar o rechazar solicitud Proyecto
router.post('/proyectos/formulario/eliminar', (req, res) => {
    const { ID } = req.body;
    const query = `DELETE FROM Proyecto WHERE Proy_ID=?`;
    mysqlConnection.query(query, [ID], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Formulario borrado!");
        } else {
            console.log(err);
        }
    });
});

//------------------------PROYECTO--------------------------------------

//Obetener ID del proyecto
router.get('/proyectos/:ID', (req, res) => {
    const { ID } = req.params;
    const query = `select * from Proyecto where Proy_ID=?`;
    mysqlConnection.query(query, [ID], (err, rows, fields) => {
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
    const { ID } = req.body;
    const query = `DELETE FROM Proyecto WHERE Proy_ID=?`;
    mysqlConnection.query(query, [ID], (err, rows, fields) => {
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
router.get('/proyectos/descripcion/:ID', (req, res) => {
    const { ID } = req.params;
    const query = `SELECT Descripcion FROM Proyecto WHERE Proy_ID=?`;
    mysqlConnection.query(query, [ID], (err, rows, fields) => {
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
    const { Descripcion, ID } = req.body;
    const query = `UPDATE Proyecto SET Descripcion = ? WHERE Proy_ID = ?`;
    mysqlConnection.query(query, [Descripcion, ID], (err, rows, fields) => {
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
router.get('/proyectos/estado/:ID', (req, res) => {
    const { ID } = req.params;
    const query = `SELECT Estado FROM Proyecto WHERE Proy_ID=?`;
    mysqlConnection.query(query, [ID], (err, rows, fields) => {
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
    const { Estado, ID } = req.body;
    const query = `UPDATE Proyecto SET Estado = ? WHERE Proy_ID = ?`;
    mysqlConnection.query(query, [Estado, ID], (err, rows, fields) => {
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
router.get('/proyectos/nombre/:ID', (req, res) => {
    const { ID } = req.params;
    const query = `SELECT Nombre FROM Proyecto WHERE Proy_ID=?`;
    mysqlConnection.query(query, [ID], (err, rows, fields) => {
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
    const { Nombre, ID } = req.body;
    const query = `UPDATE Proyecto SET Nombre = ? WHERE Proy_ID = ?`;
    mysqlConnection.query(query, [Nombre, ID], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Nombre cambiado!");
        } else {
            console.log(err);
        }
    });
});

module.exports=router;