const db = require('../db');

const obtenerPresupuestos = (req, res) => {
  db.query('SELECT * FROM presupuestos', (err, resultados) => {
    if (err) {
      console.error('Error al obtener Presupuestos:', err);
      res.status(500).send('Error al consultar Presupuestos');
      return;
    }
    res.json(resultados);
  });
};

module.exports = { obtenerPresupuestos };