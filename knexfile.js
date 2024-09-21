require('dotenv').config();
<<<<<<< HEAD
const { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME } = process.env;

/**
 * @type { import("knex").Knex.Config }
 */
module.exports = {
  client: 'mysql',
  connection: {
    host: DB_HOST || 'localhost',  
    port: DB_PORT || 3306,
    user: DB_USER || 'root',
    password: DB_PASS || '',
    database: DB_NAME || 'ct313h_labs',
  },
  pool: { min: 0, max: 10 },
  seeds: {
    directory: './seeds',
  },
};
=======

/**
* @type { import("knex").Knex.Config }
*/
module.exports = {
client: 'mysql',
connection: {
host: 'localhost',
port: 3306,
user: 'root',
password: null,
database: "ct313h_labs",
},
pool: { min: 0, max: 10 },
seeds: {
directory: './seeds',
},
};
>>>>>>> 302f1edf263857308f97fff6d592dedec7655e72
