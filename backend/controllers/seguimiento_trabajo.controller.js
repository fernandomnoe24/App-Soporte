const db = require('../db');

const obtenerSeguimientos = (req, res) => {
  db.query('SELECT * FROM seguimiento_trabajo', (err, resultados) => {
    if (err) {
      console.error('Error al obtener Seguimientos de Trabajos:', err);
      res.status(500).send('Error al consultar Seguimientos de Trabajos');
      return;
    }
    res.json(resultados);
  });
};

module.exports = { obtenerSeguimientos };