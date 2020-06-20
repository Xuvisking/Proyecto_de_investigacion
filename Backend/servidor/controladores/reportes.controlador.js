const db = require("../modelos/reporte.model");
const Reporte = db.reportes
const Op = db.Sequelize.Op;

// Crear y guardar Reporte
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Crear un Reporte
  const reporte = {
    Rep_ID: req.body.Rep_ID,
    Nombre: req.body.Nombre,
    Fecha_inicial: req.body.Fecha_inicial,
    Fecha_final: req.body.Fecha_final,
    Proyecto_Proy_ID: req.body.Proyecto_Proy_ID
  };

  // Guardar Reporte en la base de datos
  Reporte.create(reporte)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "ha ocurrido un error porfavor seguir su viaje"
      });
    });  
};

// Retornar todos los Reporte de la base de datos
exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.like]: `%${nombre}%` } } : null;
  
    Reporte.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algunos errores han sucedido mientras retornaban los tutoriales"
        });
      });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.Rep_ID;

    Tutorial.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
};


// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const Rep_ID = req.params.Rep_ID;

    Reporte.destroy({
      where: { Rep_ID: Rep_ID }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Un Reporte fue eliminado recientemente"
          });
        } else {
          res.send({
            message: `No se puede eliminar un Reporte con id=${Rep_ID}. Puede que el reporte no se haya encontrado!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "No podemos eliminar el Reporte con id=" + Rep_ID
        });
      });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    exports.deleteAll = (req, res) => {
        Reporte.destroy({
          where: {},
          truncate: false
        })
          .then(nums => {
            res.send({ message: `${nums} Los Reportes fueron eliminador exitosamente!` });
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Alguno Tutoriales fueron eliminador recientemente ."
            });
          });
      };
};
