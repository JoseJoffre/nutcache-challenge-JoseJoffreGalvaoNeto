const dotenv = require("dotenv");
dotenv.config();

const { env } = process;

module.exports = {
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "Zmhx8wqc.93",
    database: "nutcache",
  },
  migrations: {
    tableName: "knex_migrations",
  },
  seeds: {},
};
