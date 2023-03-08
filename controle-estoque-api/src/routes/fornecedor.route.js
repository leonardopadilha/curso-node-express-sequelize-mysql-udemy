const express = require('express');
const router = express.Router();
const fornecedorController = require('../controllers/fornecedor.controller');
const fornecedorValidator = require('../validators/fornecedor.validator');
const verifyJWT = require('../middlewares/authorizator');

router
    .post('/', verifyJWT, fornecedorValidator.criar(), fornecedorController.criar)
    .get('/', verifyJWT, fornecedorController.encontrarTodos)
    .get('/:id', verifyJWT, fornecedorValidator.encontrarPorId(), fornecedorController.encontrarPorId)
    .put('/:id', verifyJWT, fornecedorValidator.atualizar(), fornecedorController.atualizar)
    .delete('/:id', verifyJWT, fornecedorValidator.deletar(), fornecedorController.deletar)

module.exports = router;