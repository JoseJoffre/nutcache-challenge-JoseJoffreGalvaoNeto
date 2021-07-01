const dotenv = require("dotenv");
dotenv.config();

const { env } = process;

module.exports = {
  client: "mysql2",
  connection: {
    host: "XXXXXX",
    user: "XXXXX",
    password: "XXXXXXX",
    database: "nutcache",
  },
  migrations: {
    tableName: "knex_migrations",
  },
  seeds: {},
};
