const mysqlConnection = require("../configuracion/db.configuracion");

exports.crearproyecto = (req, res) => {
    const { Nombre, Descripcion, lugar, Estado } = req.body;
    const query = `INSERT INTO Proyecto(Proy_ID,Nombre,Descripcion,Estado) VALUES (NULL,?,?,?);`;
    mysqlConnection.query(query, [Nombre, Descripcion, Estado], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Viaje creado con exito!");
        } else {
            console.log(err);
        }
    });
  };

//Registrar proyecto
router.post('/', (req, res) => {
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

