const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario.controller');
const usuarioValidator = require('../validators/usuario.validator');

router
    .post('/', usuarioValidator.create(), usuarioController.create)
    .put('/:id', usuarioValidator.updateUser(), usuarioController.updateUser)
    .get('/', usuarioController.findUsers)
    .get('/:id', usuarioValidator.findUserById(), usuarioController.findUserById)

module.exports = router;