const express = require('express');
const router = express.Router();
const { obtenerClientes } = require('../controllers/clientes.controller');

router.get('/', obtenerClientes);

module.exports = router;