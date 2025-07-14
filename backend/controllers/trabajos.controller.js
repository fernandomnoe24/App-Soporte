const db = require('../db');

const obtenerTrabajos = (req, res) => {
  db.query('SELECT * FROM trabajos', (err, resultados) => {
    if (err) {
      console.error('Error al obtener Trabajos:', err);
      res.status(500).send('Error al consultar Trabajos');
      return;
    }
    res.json(resultados);
  });
};

module.exports = { obtenerTrabajos };