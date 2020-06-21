module.exports = app => {
    const proyectos = require("../controladores/proyecto.controlador.js");

    var router = require("express").Router();

    // Crear nuevo proyecto
    router.post("/", proyectos.create);

    // Retornar todos los proyectos
    router.get("/", proyectos.findAll);

    // Retornar 1 proyecto con un proyectoid
    router.get("/:id", proyectos.findOne);

    // Eliminar solamente 1 proyecto
    router.delete("/:id", proyectos.delete);

    // Eliminar todos los proyectos
    router.delete("/", proyectos.deleteAll);

    app.use('/servidor/proyectos', router);
};  