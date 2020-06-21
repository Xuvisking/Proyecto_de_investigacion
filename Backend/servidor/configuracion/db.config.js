module.exports = {
    HOST: "localhost",
    DB: "gestorsoftware",
    USER: 'root',
    PASSWORD:'Software123*',
    port: 3306,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
  };