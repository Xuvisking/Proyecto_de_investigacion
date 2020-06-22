const express = require('express');
const router = express.Router();


//Registrar usuario
router.post('/usuarios', (req, res) => {
    const { email, password, usuario, descripcion } = req.body;
    const query = `INSERT INTO users(email,password,usuario,descripcion) VALUES (?,?,?,?)`;
    mysqlConnection.query(query, [email, password, usuario, descripcion], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Usuarios registrado!");
        } else {
            console.log(err);
        }
    });
});

//traer usuario de la base de datos
router.post('/usuarios', (req, res) => {
    const { email, password } = req.body;
    const query = `select * from users where users.email=? and users.password=?`;
    //Para buscar en la informacion en la base de datas
    mysqlConnection.query(query, [email, password], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows); //entrega cada fila de la consulta
            console.log("Usuarios registrado!");
        } else {
            console.log(err);
        }
    });
});
//para exportar la ruta al archivo index.js
module.exports = router;