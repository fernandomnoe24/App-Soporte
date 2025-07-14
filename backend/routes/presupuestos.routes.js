const express = require('express');
const router = express.Router();
const { obtenerPresupuestos } = require('../controllers/presupuestos.controller');

router.get('/', obtenerPresupuestos);

module.exports = router;