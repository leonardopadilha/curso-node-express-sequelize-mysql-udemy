const express = require('express');
const router = express.Router();
const saidaController = require('../controllers/saida.controller');
const saidaValidator = require('../validators/saida.validator');
const verifyJWT = require('../middlewares/authorizator');

router
    .post('/', verifyJWT, saidaValidator.criar(), saidaController.criar)
    .get('/', verifyJWT, saidaController.encontrarTodos)
    .get('/:id', verifyJWT, saidaValidator.encontrarPorId(), saidaController.encontrarPorId)

module.exports = router;