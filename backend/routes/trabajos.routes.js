const express = require('express');
const router = express.Router();
const { obtenerTrabajos } = require('../controllers/trabajos.controller');

router.get('/', obtenerTrabajos);

module.exports = router;