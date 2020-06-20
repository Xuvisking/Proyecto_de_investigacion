module.exports = app => {
    const reportes = require("../controladores/reportes.controlador.js");

    var router = require("express").Router();

    // Crear nuevo Reporte
    router.post("/", reportes.create);

    // Retornar todos los Reportes
    router.get("/", reportes.findAll);

    // Retornar 1 reporte con un reporteid
    router.get("/:Rep_ID", reportes.findOne);

    // Eliminar solamente 1 Reporte
    router.delete("/:Rep_ID", reportes.delete);

    // Eliminar todos los Reportes
    router.delete("/", reportes.deleteAll);

    app.use('/servidor/reportes', router);
};  