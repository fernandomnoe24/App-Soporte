const express = require('express');
const router = express.Router();
const { obtenerNc } = require('../controllers/notas_credito.controller');

router.get('/', obtenerNc);

module.exports = router;