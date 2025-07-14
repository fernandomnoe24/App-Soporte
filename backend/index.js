/*
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const PUERTO = 3000;

// Habilita CORS
app.use(cors());
app.use(express.json());

// Conexión a la base de datos (ajustá los valores si es necesario)
const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'soporte_tecnico'
});

conexion.connect((err) => {
  if (err) {
    console.error('Error de conexión: ', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API de Soporte Técnico funcionando');
});

// app.get('/usuarios', (req, res) => {
//   const query = 'SELECT * FROM usuarios';
//   conexion.query(query, (err, resultados) => {
//     if (err) {
//       res.status(500).send('Error en la consulta');
//       return;
//     }
//     res.json(resultados);
//   });
// });

app.use('/api/clientes', require('./routes/clientes.routes'));
app.use('/api/facturas', require('./routes/facturas.routes'));
app.use('/api/notas_credito', require('./routes/notas_credito.routes'));
app.use('/api/pagos', require('./routes/pagos.routes'));
app.use('/api/presupuestos', require('./routes/presupuestos.routes'));
app.use('/api/seguimiento_trabajo', require('./routes/seguimiento_trabajo.routes'));
app.use('/api/trabajos', require('./routes/trabajos.routes'));
app.use('/api/usuarios', require('./routes/usuarios.routes'));


// Levantar servidor
app.listen(PUERTO, () => {
  console.log(`Servidor escuchando en http://localhost:${PUERTO}`);
});

*/


const express = require('express');
const cors = require('cors');
const app = express();
const PUERTO = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API de soporte técnico en funcionamiento');
});

// Rutas
app.use('/api/clientes', require('./routes/clientes.routes'));
app.use('/api/facturas', require('./routes/facturas.routes'));
app.use('/api/notas_credito', require('./routes/notas_credito.routes'));
app.use('/api/pagos', require('./routes/pagos.routes'));
app.use('/api/presupuestos', require('./routes/presupuestos.routes'));
app.use('/api/seguimiento_trabajo', require('./routes/seguimiento_trabajo.routes'));
app.use('/api/trabajos', require('./routes/trabajos.routes'));
app.use('/api/usuarios', require('./routes/usuarios.routes'));

app.listen(PUERTO, () => {
  console.log(`Servidor escuchando en http://localhost:${PUERTO}`);
});
