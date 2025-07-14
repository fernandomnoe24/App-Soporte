const db = require('../db');

const obtenerNc = (req, res) => {
  db.query('SELECT * FROM notas_credito', (err, resultados) => {
    if (err) {
      console.error('Error al obtener Notas de Crédito:', err);
      res.status(500).send('Error al consultar Notas de Crédito');
      return;
    }
    res.json(resultados);
  });
};

module.exports = { obtenerNc };