const db = require('../db');

const obtenerClientes = (req, res) => {
  db.query('SELECT * FROM clientes', (err, resultados) => {
    if (err) {
      console.error('Error al obtener clientes:', err);
      res.status(500).send('Error al consultar clientes');
      return;
    }
    res.json(resultados);
  });
};

module.exports = { obtenerClientes };