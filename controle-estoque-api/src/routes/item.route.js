const express = require('express');
const router = express.Router();
const itemController = require('../controllers/item.controller');
const itemValidator = require('../validators/item.validator');
const verifyJWT = require('../middlewares/authorizator');

router
    .post('/', verifyJWT, itemValidator.criar(), itemController.criar)
    .get('/', verifyJWT, itemController.encontrarTodos)
    .get('/:id', verifyJWT, itemValidator.encontrarPorId(), itemController.encontrarPorId)
    .put('/:id', verifyJWT, itemValidator.atualizar(), itemController.atualizar)
    .delete('/:id', verifyJWT, itemValidator.deletar(), itemController.deletar)

module.exports = router;