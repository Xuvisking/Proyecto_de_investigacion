const express = require('express');
const router = express.Router();

//traemos la conexion con la db
const mysqlConnection = require('../bd.configuracion/database');

//Crear Evento
console.log('Rutas de Presentaciones');
router.post('/presentacion/create', (req, res) => {

    const { Titulo,Fecha,Lugar,Presentador,Descripcion,Proyecto_Proy_ID } = req.body;
    const query ='INSERT INTO Presentacion( Titulo,Fecha,Lugar,Presentador,Descripcion,Proyecto_Proy_ID) VALUES (?,?,?,?,?,?)';
    mysqlConnection.query(query, [Titulo,Fecha,Lugar,Presentador,Descripcion,Proyecto_Proy_ID], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Presentacion creada con exito!");
        } else {
            console.log(err);
        }
    });
    
});

//Crear los multimedias del proyecto
/*router.post('/viaje/multi/create', (req, res) => {
    const { ID_viaje, URL } = req.body;
    const query = `INSERT INTO viajes_multimedia(ID_viaje,URL) values(?,?)`;
    mysqlConnection.query(query, [ID_viaje, URL], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Multimedia de viaje creada con exito!");
        } else {
            console.log(err);
        }
    });
});
*/
//retornar viajes
router.get('/presentacion/:id', (req, res) => {
    
    const { id } = req.params;
    const query = `select * from Presentacion where Proyecto_Proy_ID=?`;
    mysqlConnection.query(query, [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            console.log("Presentacoin retornadas con exito del proyecto "+ id);
        } else {
            console.log(err);
        }
    });
    
});





module.exports = router;