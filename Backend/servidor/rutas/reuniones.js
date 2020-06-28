const express = require('express');
const router = express.Router();

//traemos la conexion con la db
const mysqlConnection = require('../database');

router.post('/reuniones/participante/create', (req, res) => {
    const {Reunion_Reunion_ID,Reunion_Proyecto_Proy_ID,users_User_ID} = req.body;
    const query = `insert into reunion_has_users (Reunion_Reunion_ID,Reunion_Proyecto_Proy_ID,users_User_ID) values(?,?,?)`;
    mysqlConnection.query(query, [Reunion_Reunion_ID,Reunion_Proyecto_Proy_ID,users_User_ID], (err, rows, fields) => {
        if (!err) {
            console.log("Participante agregado con exito a Reunion!");
        } else {
            console.log(err);
        }
    });
});
//Actualizar cambio en reunion
router.put('/reuniones/update', (req, res) => {
    console.log(req.body);
    const {Titulo,Fecha,Lugar,Descripcion,Reunion_ID} = req.body;
    const query = `UPDATE reunion SET Titulo=?,Fecha=?,Lugar=?,Descripcion=? WHERE Reunion_ID=?`;
    mysqlConnection.query(query, [Titulo,Fecha,Lugar,Descripcion,Reunion_ID], (err, rows, fields) => {
        if (!err) {
            console.log("Reunion Actualizado con exito!");
            res.json(rows.changedRows);
        } else {
            console.log(err);
        }
    });
});

//Crear reunion
router.post('/reuniones/create', (req, res) => {
    const { Titulo,Fecha,Lugar,Descripcion,Proyecto_Proy_ID } = req.body;
    const query ='INSERT INTO reunion(Titulo,Fecha,Lugar,Descripcion,Proyecto_Proy_ID) VALUES (?,?,?,?,?)';
    mysqlConnection.query(query, [Titulo,Fecha,Lugar,Descripcion,Proyecto_Proy_ID], (err, rows, fields) => {
        if (!err) {
            console.log("Reunion creada con exito!");
            console.log(Proyecto_Proy_ID);
            res.redirect(`/ultimo/reuniones/${Proyecto_Proy_ID}`);
        } else {
            console.log(err);
        }
    });
});
//retorna el id del proyecto para guardar los documentos asociados a ese proyecto.
router.get('/ultimo/reuniones/:id_proyecto', (req, res) => {
    const { id_proyecto} = req.params;
    const query = `select * from reunion where Proyecto_Proy_ID=? ORDER BY Reunion_ID desc limit 1`;
    mysqlConnection.query(query, [id_proyecto], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log("ultima reunion retornado con exito");
        } else {
            console.log(err);
        }
    });
});
//retornar una reunion en particular
router.get('/reunion/:id', (req, res) => {
    const { id } = req.params;
    const query = `select * from reunion where Reunion_ID=?`;
    mysqlConnection.query(query, [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log("Presentacion retornada "+ id);
        } else {
            console.log(err);
        }
    });
});

//retornar reunion de un proyecto
router.get('/reuniones/:id', (req, res) => {
    const { id } = req.params;
    const query = `select * from reunion where Proyecto_Proy_ID=?`;
    mysqlConnection.query(query, [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log("Reuniones retornadas con exito del proyecto "+ id);
        } else {
            console.log(err);
        }
    });
    
});
//retorna los docuemntos asociado a una reunion
router.get('/reuniones/documentos/:reunion_id', (req, res) => {
    const { reunion_id} = req.params;
    const query = `select * from Documentos_reunion where reunion_reunion_id=?`;
    mysqlConnection.query(query, [reunion_id], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log("Documentos de Reunion retornadas con exito!");
        } else {
            console.log(err);
        }
    });
    
});

router.delete('/reuniones/delete/:Reunion_ID', (req, res) => {
    const { Reunion_ID} = req.params;
    const query = `delete from reunion where Reunion_ID=?`;
    mysqlConnection.query(query, [ Reunion_ID], (err, rows, fields) => {
        if (!err) {
            console.log("Reunion Eliminada con exito!");
        } else {
            console.log(err);
        }
    });
});
router.post('/reuniones/multi/create', (req, res) => {
    const { Nombre, Reunion_Reunion_ID, Presentacion_Proyecto_Proy_ID, URL} = req.body;
    const query = `insert into documetos_presentacion(URL,Reunion_Reunion_ID,Presentacion_Proyecto_Proy_ID,Nombre) values(?,?,?,?)`;
    mysqlConnection.query(query, [ Nombre, Reunion_Reunion_ID, Presentacion_Proyecto_Proy_ID, URL], (err, rows, fields) => {
        if (!err) {
            console.log("URL docuemnto agregado con exito!");
        } else {
            console.log(err);
        }
    });
});


//retorna los docuemntos asociado a una reunion
router.get('/reuniones/participantes/:Reunion_ID', (req, res) => {
    const { Reunion_ID} = req.params;
    const query = `select * from users where User_ID in(select users_User_ID from reunion_has_users where Reunion_Reunion_ID=?)`;
    mysqlConnection.query(query, [Reunion_ID], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log("Participantes retornados con exito");
        } else {
            console.log(err);
        }
    });
});

router.get('/reuniones/participantes/proy/:proy_id', (req, res) => {
    const { proy_id} = req.params;
    const query = `select * from users where User_ID in (select users_User_id from users_has_proyecto where Proyecto_Proy_ID=?)`;
    mysqlConnection.query(query, [proy_id], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log("Participantes retornados con exito");
        } else {
            console.log(err);
        }
    });
});
module.exports = router;