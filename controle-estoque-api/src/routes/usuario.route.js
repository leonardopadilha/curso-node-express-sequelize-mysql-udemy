const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario.controller');
const usuarioValidator = require('../validators/usuario.validator');
const verifyJWT = require('../middlewares/authorizator');

router
    .post('/', usuarioValidator.create(), usuarioController.create)
    .post('/login', usuarioValidator.login(), usuarioController.login)
    .put('/:id', verifyJWT, usuarioValidator.updateUser(), usuarioController.updateUser)
    .delete('/:id', verifyJWT, usuarioValidator.deleteUser(), usuarioController.deleteUser)
    .get('/', verifyJWT, usuarioController.findUsers)
    .get('/:id', verifyJWT, usuarioValidator.findUserById(), usuarioController.findUserById)

module.exports = router;