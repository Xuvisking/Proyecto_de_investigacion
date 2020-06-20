const dbConfig = require("../configuracion/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: dbConfig.port,
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.proyectos = require("./proyecto.model.js")(sequelize, Sequelize);
db.reportes = require("./reporte.model.js")(sequelize, Sequelize);

db.proyectos.hasMany(db.reportes, { as: "reportes" });
db.reportes.belongsTo(db.proyectos, {
  foreignKey: "Proyecto_Proy_ID",
  as: "proyecto",
});

module.exports = db;