require('dotenv').config();

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