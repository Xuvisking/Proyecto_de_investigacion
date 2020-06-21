module.exports = (sequelize, DataTypes) => {
  return sequelize.define("reporte", {
    'Nombre': {
      type: DataTypes.TEXT
    },
    'Fecha_inicial': {
      type: DataTypes.DATE
    },
    'Fecha_final': {
      type: DataTypes.DATE
    },
    'Proyecto_Proy_ID': {
      type: DataTypes.INTEGER
    }

  });
};