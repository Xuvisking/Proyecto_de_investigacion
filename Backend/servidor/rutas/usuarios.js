const express = require('express');
const router = express.Router();

//traemos la conexion con la db
const mysqlConnection = require('../database');
// const mysqlConnection = require('../database')

//Crear Evento
router.post('/viaje/create', (req, res) => {
    const { Fecha_Ini, Fecha_Fin, motivo, lugar, Proyecto_Proy_ID } = req.body;
    const query = `INSERT INTO viaje(Fecha_Ini,Fecha_Fin,motivo,lugar,Proyecto_Proy_ID) values(?,?,?,?,?)`;
    mysqlConnection.query(query, [Fecha_Ini, Fecha_Fin, motivo, lugar, Proyecto_Proy_ID], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Viaje creado con exito!");
        } else {
            console.log(err);
        }
    });
});

router.post('/usuario/permisos', (req, res) => {
    const { users_User_ID,Proyecto_Proy_ID} = req.body;
    const query = `select Permiso from users_has_proyecto where users_User_ID=? and Proyecto_Proy_ID=?`;
    mysqlConnection.query(query, [users_User_ID,Proyecto_Proy_ID], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Permisos retornado con exito!");
            console.log(rows)
        } else {
            console.log(err);
        }
    });
});

//------------------------------ Gestion de Usuario --------------------------------------------
//----------------------------------------------------------------------------------------------



//Obetener Usuario
router.get('/usuarios/:ID', (req, res) => {
    const { ID } = req.params;
    const query = `select * from users where User_ID=?`;
    mysqlConnection.query(query, [ID], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Usuario retornado con exito!");
            console.log(rows)
        } else {
            console.log(err);
        }
    });
});

//Crear Usuario
router.post('/usuarios/crear', (req, res) => {
    const { Email,Password,Usuario,Descripcion } = req.body;
    const query = `INSERT INTO users(Email,Password,Usuario,Descripcion) VALUES (?,?,?,?)`;
    mysqlConnection.query(query, [Email,Password,Usuario,Descripcion], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Usuario creado!");
        } else {
            console.log(err);
        }
    });
});

//Eliminar Usuario
router.post('/usuarios/eliminar', (req, res) => {
    const { ID } = req.body;
    const query = `DELETE FROM users WHERE Proy_ID=?`;
    mysqlConnection.query(query, [ID], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Usuario borrado!");
        } else {
            console.log(err);
        }
    });
});

//Conseguir Descripcion
router.get('/usuarios/descripcion/:ID', (req, res) => {
    const { ID } = req.params;
    const query = `SELECT Descripcion FROM Proyecto WHERE User_ID=?`;
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
router.post('/usuarios/descripcion/cambiar', (req, res) => {
    const { Descripcion, ID } = req.body;
    const query = `UPDATE users SET Descripcion = ? WHERE User_ID = ?`;
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

//Conseguir Email
router.get('/usuarios/email/:ID', (req, res) => {
    const { ID } = req.params;
    const query = `SELECT Email FROM Proyecto WHERE User_ID=?`;
    mysqlConnection.query(query, [ID], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Email conseguido");
        } else {
            console.log(err);
        }
    });
});

//Cambiar Email
router.post('/usuarios/email/cambiar', (req, res) => {
    const { Email, ID } = req.body;
    const query = `UPDATE users SET Email = ? WHERE User_ID = ?`;
    mysqlConnection.query(query, [Email, ID], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Email cambiado!");
        } else {
            console.log(err);
        }
    });
});

//Conseguir Nombre de usuario
router.get('/usuarios/usuario/:ID', (req, res) => {
    const { ID } = req.params;
    const query = `SELECT Usuario FROM users WHERE User_ID=?`;
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

//Cambiar Nombre de usuario
router.post('/usuarios/usuario/cambiar', (req, res) => {
    const { Usuario, ID } = req.body;
    const query = `UPDATE users SET Usuario = ? WHERE User_ID = ?`;
    mysqlConnection.query(query, [Usuario, ID], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Nombre cambiado!");
        } else {
            console.log(err);
        }
    });
});

//Conseguir Password de usuario
router.get('/usuarios/password/:ID', (req, res) => {
    const { ID } = req.params;
    const query = `SELECT Password FROM users WHERE User_ID=?`;
    mysqlConnection.query(query, [ID], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Password conseguido");
        } else {
            console.log(err);
        }
    });
});

//Cambiar Nombre de usuario
router.post('/usuarios/password/cambiar', (req, res) => {
    const { Password, ID } = req.body;
    const query = `UPDATE users SET Password = ? WHERE User_ID = ?`;
    mysqlConnection.query(query, [Password, ID], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Password cambiado!");
        } else {
            console.log(err);
        }
    });
});

//--------------------------------------------------------

//Obetener proyectos
router.get('/usuarios/proyecto/:ID', (req, res) => {
    const { ID } = req.params;
    const query = `select proyecto.* from proyecto join users_has_proyecto on proyecto.Proy_ID = users_has_proyecto.Proyecto_Proy_ID where users_has_proyecto.users_User_ID = ?`;
    mysqlConnection.query(query, [ID], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Proyectos retornado con exito!");
            console.log(rows)
        } else {
            console.log(err);
        }
    });
});

//Obetener Formularios
router.get('/usuario/formulario/:ID', (req, res) => {
    const { ID } = req.params;
    const query = `select * from Formulario where users_User_ID=? `;
    mysqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log("Formularios retornados con exito!");
        } else {
            console.log(err);
        }
    });
});


module.exports = router;
