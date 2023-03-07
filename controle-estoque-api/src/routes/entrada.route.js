const express = require('express');
const router = express.Router();
const entradaController = require('../controllers/entrada.controller');
const entradaValidator = require('../validators/entrada.validator');
const verifyJWT = require('../middlewares/authorizator');

router
    .post('/', verifyJWT, entradaValidator.criar(), entradaController.criar)
    .get('/', verifyJWT, entradaController.encontrarTodos)
    .get('/:id', verifyJWT, entradaValidator.encontrarPorId(), entradaController.encontrarPorId)

module.exports = router;