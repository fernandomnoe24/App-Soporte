const mysql = require('mysql');

const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'soporte_tecnico'
});

conexion.connect((err) => {
  if (err) {
    console.error('Error al conectar la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

module.exports = conexion;