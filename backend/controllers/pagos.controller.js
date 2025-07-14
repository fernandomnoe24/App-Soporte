const db = require('../db');

const obtenerPagos = (req, res) => {
  db.query('SELECT * FROM pagos', (err, resultados) => {
    if (err) {
      console.error('Error al obtener pagos:', err);
      res.status(500).send('Error al consultar pagos');
      return;
    }
    res.json(resultados);
  });
};

module.exports = { obtenerPagos };