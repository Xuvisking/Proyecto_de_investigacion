//conexion con la base de datos

const mysql=require('mysql');
// retorna un objeto que se guarda en mysqlConecction
const mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
<<<<<<< HEAD
    password:'julieta8810',
    database:'proyecto_de_investigacion',
=======
    password:'conforta',
    database:'Proyecto_de_investigacion',
>>>>>>> 23ccbd4c3ad7f0c06a367439d78023a0a7a70cd8
    port: 3306
});
//establecer el conexion
mysqlConnection.connect(function(err){

    if(err){
        console.log(err);
        return;
    }else{
        console.log('DB is connected!');
    }
});

module.exports=mysqlConnection;// para poder exportar y trabajar con a conexion de la base de datos