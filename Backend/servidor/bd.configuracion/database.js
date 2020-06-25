//conexion con la base de datos

const mysql=require('mysql');
<<<<<<< HEAD
// retorna un objeto que se guarda en mysqlConecction
const mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'julieta8810',
    database:'proyecto_de_investigacion',
=======


// retorna un objeto que se guarda en mysqlConecction
const mysqlConnection = mysql.createConnection({
    //modificar con la informacion de la base de datos.
    host:'localhost',
    user:'root',
    password:'Software123*',
    database:'Proyecto_de_investigacion',
>>>>>>> b7f6893bfe91d7298c69380a6f863262e86f7a98
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