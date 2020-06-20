const db = require("../modelos/proyecto.model");
const Proyecto = db.proyectos;
// const Op = db.Sequelize.Op;

// Crear y guardar Reporte
// exports.create = (req, res) => {
//   // Validate request
//   if (!req.body) {
//     res.status(400).send({
//       message: "El contenido no puede ir vacio!"
//     });
//     return;
//   }

//   // Crear un Proyecto
//   const proyecto = {
//     Nombre: req.body.Nombre,
//     Descripcion: req.body.Descripcion,
//     Estado: req.body.Estado
//   };

//   // Guardar Reporte en la base de datos
//   Proyecto.create(proyecto)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "ha ocurrido un error porfavor seguir su viaje"
//       });
//     });  
// };

exports.create = (proyecto) => {
    return Proyecto.create({
      title: proyecto.Nombre,
      Descrion: proyecto.Descripcion,
      Estado:proyecto.Estado
    })
      .then((tutorial) => {
        console.log(">> Created tutorial: " + JSON.stringify(tutorial, null, 4));
        return tutorial;
      })
      .catch((err) => {
        console.log(">> Error while creating tutorial: ", err);
      });
  };

// Retornar todos los Proyectos de la base de datos
exports.findAll = (req, res) => {
    const id = req.parmams.id;
    // var condition = Nombre ? { Nombre: { [Op.like]: `%${Nombre}%` } } : null;
  
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

// Retornar un proyecto con un id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tutorial.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error al retornar proyecto con id =" + id
        });
      });
};


// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Reporte.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Un Proyecto fue eliminado recientemente"
          });
        } else {
          res.send({
            message: `No se puede eliminar un Proyecto con id=${id}. Puede que el reporte no se haya encontrado!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "No podemos eliminar el Reporte con id=" + id
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
