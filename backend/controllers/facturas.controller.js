const db = require('../db');

const obtenerFacturas = (req, res) => {
  db.query('SELECT * FROM facturas', (err, resultados) => {
    if (err) {
      console.error('Error al obtener facturas:', err);
      res.status(500).send('Error al consultar facturas');
      return;
    }
    res.json(resultados);
  });
};

module.exports = { obtenerFacturas };