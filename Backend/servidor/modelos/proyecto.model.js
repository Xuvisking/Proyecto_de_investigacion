module.exports = (sequelize, DataTypes) => {
     const Proyecto =sequelize.define("proyecto", {
  
      Nombre: {
        type: DataTypes.STRING
      },
      Descripcion: {
        type: DataTypes.TEXT
      },
      Estado: {
          type: DataTypes.STRING
        }
    });
    return Proyecto;
  };