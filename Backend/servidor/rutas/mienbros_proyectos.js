const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database');

//Obtener listas de miembros del proyecto FUNCIONA y se OCUPA
router.get('/mienbros_proyectos/memberlist/:Proyecto_Proy_ID', (req, res) => {
    const { Proyecto_Proy_ID } = req.params;
    const query = `SELECT users_User_ID FROM users_has_Proyecto WHERE Proyecto_Proy_ID = ?`;
    mysqlConnection.query(query, [Proyecto_Proy_ID], (err, rows, fields) => {
        if (!err) {
            console.log(Proyecto_Proy_ID);
            res.json(rows);
            console.log("ID user retornado con exito!");
        } else {
            console.log(err);
        }
    });
});

//Obtener listas nombre de miembros del proyecto FUNCIONA y se OCUPA
router.get('/mienbros_proyectos/userlist/:User_ID', (req, res) => {
    const { User_ID } = req.params;
    const query = `SELECT Usuario FROM users WHERE User_ID = ?`;
    mysqlConnection.query(query, [User_ID], (err, rows, fields) => {
        if (!err) {
            console.log(User_ID);
            res.json(rows);
            console.log("ID user retornado con exito!");
        } else {
            console.log(err);
        }
    });
});

//Retornar User ID a base de un email FUNCIONA y se OCUPA
router.get('/mienbros_proyectos/getuseridbyemail/:Email', (req, res) => {
    const { Email } = req.params;
    const query = `SELECT User_ID FROM users WHERE Email = ?`;
    mysqlConnection.query(query, [Email], (err, rows, fields) => {
        if (!err) {
            console.log(Email);
            res.json(rows);
            console.log("ID user retornado con exito!");
        } else {
            console.log(err);
        }
    });
});

//Retornar username a base de un ID FUNCIONA y se OCUPA
router.get('/User_ID/getuseridbyemail/:User_ID', (req, res) => {
    const { User_ID } = req.params;
    const query = `SELECT Usuario FROM users WHERE User_ID = ?`;
    mysqlConnection.query(query, [User_ID], (err, rows, fields) => {
        if (!err) {
            console.log(User_ID);
            res.json(rows);
            console.log("ID user retornado con exito!");
        } else {
            console.log(err);
        }
    });
});

//Retornar user ID no JP
router.post('/mienbros_proyectos/miembrosnojp', (req, res) => {
    const { Proyecto_Proy_ID, JP} = req.body;
    const query = `SELECT users_User_ID FROM users_has_Proyecto WHERE Proyecto_Proy_ID = ? AND JP = ?`;
    mysqlConnection.query(query, [Proyecto_Proy_ID, JP], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Miembro no JP retornados con exito!");
        } else {
            console.log(err);
        }
    });
});

//Eliminar miembro del proyecto FUNCIONA y se OCUPA
router.post('/mienbros_proyectos/eliminarmiembro', (req, res) => {
    const { users_User_ID, Proyecto_Proy_ID} = req.body;
    const query = `DELETE FROM users_has_Proyecto WHERE users_User_ID=? AND Proyecto_Proy_ID=?`;
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

//Cambiar JP a otro
router.post('/mienbros_proyectos/cambiarJP', (req, res) => {
    const { users_User_ID_JP, users_User_ID,Proyecto_Proy_ID} = req.body;
    const query = `UPDATE users_has_Proyecto SET JP=1 WHERE users_User_ID = ? AND Proyecto_Proy_ID = ?`;
    mysqlConnection.query(query, [ users_User_ID, Proyecto_Proy_ID], (err, rows, fields) => {
        if (!err) {
            const query = `UPDATE users_has_Proyecto SET JP=0 WHERE users_User_ID = ? AND Proyecto_Proy_ID = ?`;
            mysqlConnection.query(query, [ users_User_ID_JP, Proyecto_Proy_ID], (err, rows, fields) => {
                if (!err) {
                    res.json(rows);
                    console.log("JP cambiado con exito!");
                } else {
                    console.log(err);
                }
            });
        } else {
            console.log(err);
        }
    });
});

//Retornar si el miembro es JP
router.post('/mienbros_proyectos/privilegiojp', (req, res) => {
    var EsJP = false;
    const { users_User_ID, Proyecto_Proy_ID } = req.body;
    const query = `SELECT JP FROM users_has_Proyecto WHERE users_User_ID=? AND Proyecto_Proy_ID=?`;
    mysqlConnection.query(query, [users_User_ID, Proyecto_Proy_ID ], (err, rows, fields) => {
        if (!err) {
            if (rows[0].JP == 0){
                res.json(EsJP);
                console.log(EsJP)
                console.log("No es JP!");
            } else {
                EsJP = true;
                res.json(EsJP);
                console.log("Es JP!");
            }    
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

module.exports=router;