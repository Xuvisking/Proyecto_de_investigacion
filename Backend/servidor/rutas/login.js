const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database');

//Retorna True si coincide la contraseña en caso contrario False
router.post('/login/loginin/', (req, res) => {
    var Iscorrect = false;
    const { Email , Password } = req.body;
    const query = `SELECT Password FROM users WHERE Email=?`;
    mysqlConnection.query(query, [ Email ], (err, rows, fields) => {
        if (!err) {
            if (Password == rows[0].Password){
                Iscorrect = true;
                res.json(Iscorrect);
                console.log(Iscorrect)
                console.log("Contraseña del usuario retornada!");
            } else {
                res.json(Iscorrect);
            }    
        } else {
            console.log(err);
        }
    });
});

module.exports=router;