const express = require('express');
const router = express.Router();
const { obtenerFacturas } = require('../controllers/facturas.controller');

router.get('/', obtenerFacturas);

module.exports = router;