exports.create = (proyecto) => {
    const { Fecha_Ini, Fecha_Fin, motivo, lugar, Proyecto_Proy_ID } = req.body;
    const query = `INSERT INTO viaje(Fecha_Ini,Fecha_Fin,motivo,lugar,Proyecto_Proy_ID) values(?,?,?,?,?);`;
    mysqlConnection.query(query, [Fecha_Ini, Fecha_Fin, motivo, lugar, Proyecto_Proy_ID], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Viaje creado con exito!");
        } else {
            console.log(err);
        }
    });
  };

  exports.actualizar = (proyecto) => {
    const { Fecha_Ini, Fecha_Fin, motivo, lugar, Proyecto_Proy_ID } = req.body;
    const query = `INSERT INTO viaje(Fecha_Ini,Fecha_Fin,motivo,lugar,Proyecto_Proy_ID) values(?,?,?,?,?);`;
    mysqlConnection.query(query, [Fecha_Ini, Fecha_Fin, motivo, lugar, Proyecto_Proy_ID], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Viaje creado con exito!");
        } else {
            console.log(err);
        }
    });
  };
