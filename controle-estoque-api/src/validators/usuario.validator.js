const { body, param } = require('express-validator');
const { validatorMessage } = require('../utils/errorMessage');

const create = function() {
    return [
        body('nome', validatorMessage('Nome')).exists().bail().isString(),
        body('email', validatorMessage('Email')).exists().bail().isString(),
        body('senha', validatorMessage('Senha')).exists().bail().isString()
    ]
}

const findUserById = function() {
    return [
        param('id', validatorMessage('Id')).exists().bail().isInt()
    ]
}

module.exports = {
    create: create,
    findUserById: findUserById
}