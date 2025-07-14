const db = require('../db');

const obtenerUsuarios = (req, res) => {
  db.query('SELECT * FROM usuarios', (err, resultados) => {
    if (err) {
      console.error('Error al obtener Usuarios:', err);
      res.status(500).send('Error al consultar Usuarios');
      return;
    }
    res.json(resultados);
  });
};

module.exports = { obtenerUsuarios };