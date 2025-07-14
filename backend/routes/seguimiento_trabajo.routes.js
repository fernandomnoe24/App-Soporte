const express = require('express');
const router = express.Router();
const { obtenerSeguimientos } = require('../controllers/seguimiento_trabajo.controller');

router.get('/', obtenerSeguimientos);

module.exports = router;