const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database');

//Retornar si el miembro es JP
router.post('/mienbros_proyectos/privilegiojp', (req, res) => {
    const { users_User_ID, Proyecto_Proy_ID } = req.body;
    const query = `SELECT JP FROM users_has_Proyecto WHERE users_User_ID=? AND Proyecto_Proy_ID=?`;
    mysqlConnection.query(query, [users_User_ID, Proyecto_Proy_ID ], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("JP retornados con exito!");
        } else {
            console.log(err);
        }
    });
});

//Hacer JP a algun miembrio
router.post('/mienbros_proyectos/crearjp', (req, res) => {
    const { users_User_ID, Proyecto_Proy_ID} = req.body;
    const query = `UPDATE users_has_Proyecto SET JP=1, Permiso=1 WHERE users_User_ID=? AND Proyecto_Proy_ID=?`;
    mysqlConnection.query(query, [users_User_ID, Proyecto_Proy_ID], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Privilegios del usuario creado!");
        } else {
            console.log(err);
        }
    });
});

//Quitar JP a algun mienbrio
router.post('/mienbros_proyectos/quitarjp', (req, res) => {
    const { users_User_ID, Proyecto_Proy_ID} = req.body;
    const query = `UPDATE users_has_Proyecto SET JP=0, Permiso=1 WHERE users_User_ID=? AND Proyecto_Proy_ID=?`;
    mysqlConnection.query(query, [users_User_ID, Proyecto_Proy_ID], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Privilegios del usuario creado!");
        } else {
            console.log(err);
        }
    });
});

//Enviar invitacion a usuario
router.post('/mienbros_proyectos/invitarmiembro', (req, res) => {
    const { Fecha, Estado, Proyecto_Proy_ID, users_User_ID} = req.body;
    const query = `INSERT INTO Inv_proy (Fecha, Estado, Proyecto_Proy_ID, users_User_ID) VALUES (?,?,?,?)`;
    mysqlConnection.query(query, [ Fecha, Estado, Proyecto_Proy_ID, users_User_ID], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Invitacion enviada con exito!");
        } else {
            console.log(err);
        }
    });
});

//Añadir usuario como miembro al proyecto
router.post('/mienbros_proyectos/agregarmiembro', (req, res) => {
    const { users_User_ID, Proyecto_Proy_ID} = req.body;
    const query = `INSERT INTO users_has_Proyecto (users_User_ID,Proyecto_Proy_ID) VALUES (?,?)`;
    mysqlConnection.query(query, [users_User_ID, Proyecto_Proy_ID], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Usuario añadido con exito!");
        } else {
            console.log(err);
        }
    });
});

//Eliminar miembro del proyecto
router.post('/mienbros_proyectos/eliminarmiembro', (req, res) => {
    const { users_User_ID, Proyecto_Proy_ID} = req.body;
    const query = `DELETE users_has_Proyecto WHERE users_User_ID=? AND Proyecto_Proy_ID=?`;
    mysqlConnection.query(query, [users_User_ID, Proyecto_Proy_ID], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Miembro eliminado con exito!");
        } else {
            console.log(err);
        }
    });
});

module.exports=router;