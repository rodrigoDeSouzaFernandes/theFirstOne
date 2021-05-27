const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'rodrigo',
  password: 'Odafiraxomla2',
  database: 'cep_lookup',
});

module.exports = connection;
