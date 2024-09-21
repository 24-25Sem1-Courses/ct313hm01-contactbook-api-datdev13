const { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME } = process.env;

module.exports = require('knex') ({
 client: 'mysql',
  connection: {
    host: DB_HOST || 'localhost',  
    port: DB_PORT || 3306,
    user: DB_USER || 'root',
    password: DB_PASS || '',
    database: DB_NAME || 'ct313h_labs',
},
pool: { min: 0, max: 10 },

});