const express = require('express');
const router = express.Router();


//traemos la conexion con la db
const mysqlConnection=require('../database')

//Primera ruta: para traer informacion del usuario

router.post('/usuarios',(req,res) => {

    //login:requiere metodo post por que el json que recibe tiene mas de dos elementos
    //que en este caso son email y password
   const {email,password}=req.body;
    const query=`inserte sql`;
    //Para buscar en la informacion en la base de datas
    mysqlConnection.query(query,[email,password],(err,rows,fields) =>{
        if(!err){
            console.log(req);
            res.json(rows);//entrega cada fila de la consulta
            console.log("Usuarios retornado!");
        }else{
            console.log(err);
        }
    });
});

//para exportar la ruta al archivo index.js
module.exports=router;