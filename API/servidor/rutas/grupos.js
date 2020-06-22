const express = require('express');
const router = express.Router();

//Se conecta la base de datos
const mysqlConnection=require('../database')

//crear grupo
router.get('/Grupos/Crear', (req, res) => {
    const { Nombre, Descripcion, URL } = req.body;
    const query = `INSERT INTO Grupo(Nombre,Descripcion,URL) VALUES (?,?,?)`;
    mysqlConnection.query(query, [Nombre, Descripcion, URL], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Grupo creado!");
        } else {
            console.log(err);
        }
    });
});

//eliminar un grupo
router.get('/Grupos/Grupo/Eliminar/:Grupo_ID', (req, res) => {
    const { Grupo_ID } = req.params;
    const query = `DELETE FROM Grupo WHERE Grupo_ID = '?'`;
    mysqlConnection.query(query, [id], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Grupo eliminado!");
        } else {
            console.log(err);
        }
    });
});

//ver grupos
router.get('/users/:User_ID', (req, res) => {
    const { User_ID } = req.params;
    const query = `SELECT * FROM Grupo_has_users where users_User_ID=?`;
    mysqlConnection.query(query, [id_users], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log("Diespliegue de grupos con éxito!");
        } else {
            console.log(err);
        }
    });
});

//agregar miembros
router.post('/Grupo/Miembros/agregar/:Grupo_ID', (req, res) => {
    const { User_ID, Grupo_ID } = req.body;
    const query = `INSERT INTO Grupo_has_users(Grupo_Grupo_ID, users_User_ID) where users_User_ID=? values (?,?)`;
    mysqlConnection.query(query, [id_users], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log("Miembro agregado con exito!");
        } else {
            console.log(err);
        }
    });
});


//eliminar miembros
router.get('/Grupo/Miembros/:Grupo_ID', (req, res) => {
    const { User_ID } = req.params;
    const query = `DELETE FROM Grupo_has_users where users_User_ID=?`;
    mysqlConnection.query(query, [id_users], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log("Miembro eliminado con exito!");
        } else {
            console.log(err);
        }
    });
});

//dar permisos de administrador de grupo
router.get('/Grupo/Miembros/:Grupo_ID', (req, res) => {
    const { User_ID } = req.params;
    const query = `UPDATE Grupo_has_users SET admin = 1 WHERE users_User_ID=?`;
    mysqlConnection.query(query, [id_users], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log("Miembro eliminado con exito!");
        } else {
            console.log(err);
        }
    });
});

//revocar permisos de administrador de grupo
router.get('/Grupo/Miembros/:Grupo_ID', (req, res) => {
    const { User_ID } = req.params;
    const query = `UPDATE Grupo_has_users SET admin = 0 WHERE users_User_ID=?`;
    mysqlConnection.query(query, [id_users], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log("Miembro eliminado con exito!");
        } else {
            console.log(err);
        }
    });
});

//Insertar foto de grupo
router.post('/Grupo/Imagen:Grupo_ID', (req, res) => {
    const { Imagen, Grupo_ID } = req.params;
    const query = `INSERT INTO Fotos_grupo(URL, Grupo_Grupo_ID, Nombre) WHERE users_User_ID=? VALUES(?,?,?)`;
    mysqlConnection.query(query, [id_users], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log("Miembro eliminado con exito!");
        } else {
            console.log(err);
        }
    });
});

//Eliminar foto de grupo
router.post('/Grupo/Imagen:Grupo_ID', (req, res) => {
    const { Nombre, Grupo_ID } = req.params;
    const query = `DELETE FROM Fotos_grupo WHERE Nombre = ? AND Grupo_Grupo_ID = ?`;
    mysqlConnection.query(query, [id_users], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log("Miembro eliminado con exito!");
        } else {
            console.log(err);
        }
    });
});

//enviar invitación  de grupo
router.get('/Grupo/Miembros/Invitar:Grupo_ID', (req, res) => {
    const { User_ID, Grupo_ID } = req.body;
    const query = `INSERT INTO Inv_grupo(Grupo_Grupo_ID, users_User_ID, INV_ID, Fecha, Estado)  WHERE User_ID=? AND Grupo_ID=? values (?,?,?,?,?)`;
    mysqlConnection.query(query, [id_users], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log("Miembro eliminado con exito!");
        } else {
            console.log(err);
        }
    });
});
module.exports=router;
