const { db } = require("./index");
const { username, password, host, database } = db;
console.log(db);

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: "postgres",
    seederStorage: "sequelize",
  },
  // production: {
  //   "username": username,
  //   "password": null,
  //   "database": "database_production",
  //   "host": "127.0.0.1",
  //   "dialect": "postgres",
  //   "seederStorage": "sequelize"
  // }
};
