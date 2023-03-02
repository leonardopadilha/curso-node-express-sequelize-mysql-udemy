const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario.controller');

router
    .post('/', usuarioController.create)
    .get('/', usuarioController.findUsers)
    .get('/:id', usuarioController.findUserById)

module.exports = router;