const express = require('express');
const router = express.Router();

//Se conecta la base de datos
const mysqlConnection=require('../database')

//Crear grupo
router.post('/grupos/crear', (req, res) => {

    const {Nombre, Descripcion, URL} = req.body;
    const query = `INSERT INTO Grupo(Nombre,Descripcion,URL) VALUES (?,?,?)`;
    mysqlConnection.query(query, [Nombre, Descripcion, URL], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Grupo creado!");
            //res.render('grupos.html')
        } else {
            console.log(err);
        }
    });
    
});
router.get('/grupos/grupo/:Grupo_ID', (req, res) => {
    const { Grupo_ID } = req.params;
    const query = `SELECT * FROM Grupo WHERE Grupo_ID = ?`;
    mysqlConnection.query(query,[Grupo_ID], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log("mostrando ");
        } else {
            console.log(err);
        }
    });
});

//muestra los grupos 
router.get('/:User_ID/grupos', (req, res) => {
    const {User_ID} = req.params;
    const query = `select Grupo.Nombre, Grupo.Descripcion, Grupo.URL, Grupo.Grupo_ID from Grupo, Grupo_has_users, users where Grupo_has_users.Grupo_Grupo_ID = Grupo.Grupo_ID and users.User_ID  = ? `;
    mysqlConnection.query(query,[User_ID] ,(err, rows, fields) => {
        if (!err) {
            console.log('aaayaaa');
            console.log(rows)
            res.json(rows);
            console.log("mostrando ");
        } else {
            console.error(err);
        }
    });
    
});

//eliminar un grupo
router.get('/grupos/grupo/eliminar/:Grupo_ID', (req, res) => {
    const { Grupo_ID } = req.params;
    const query = `DELETE FROM Grupo WHERE Grupo_ID = ? `;
    mysqlConnection.query(query, [Grupo_ID], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Grupo eliminado!");
        } else {
            console.log(err);
        }
    });
});
//agregar miembros
router.post('/grupos/grupo/miembros/agregar/', (req, res) => {
    const { Grupo_Grupo_ID, users_User_ID, Admin  } = req.body;
    const query = `INSERT INTO Grupo_has_users(Grupo_Grupo_ID, users_User_ID, Admin) VALUES (?,?,?)`;
    mysqlConnection.query(query, [Grupo_Grupo_ID, users_User_ID, Admin], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Miembro agregado con exito!");
        } else {
            console.log(err);
        }
    });
});


//muestra miembros de un grupo
router.get('/grupo/miembros/:Grupo_ID', (req, res) => {
    const { Grupo_ID } = req.params;
    const query = `SELECT Usuario FROM users WHERE User_ID IN (SELECT users_User_ID FROM Grupo_has_users WHERE Grupo_Grupo_ID = ?)`;
    mysqlConnection.query(query,[Grupo_ID], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Miembro agregado con exito!");
            console.log("mostrando ");
        } else {
            console.log(err);
        }
    });
});

//eliminar miembros
router.post('/grupo/eliminarmiembros', (req, res) => {
    const { Grupo_Grupo_ID, users_User_ID } = req.body;
    const query = `DELETE FROM Grupo_has_users WHERE Grupo_Grupo_ID=? AND users_User_ID=?`;
    mysqlConnection.query(query, [Grupo_Grupo_ID, users_User_ID], (err, rows, fields) => {
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