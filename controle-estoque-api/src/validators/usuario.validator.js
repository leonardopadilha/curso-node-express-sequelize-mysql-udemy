const { body, param } = require('express-validator');
const { validatorMessage } = require('../utils/errorMessage');

const create = function() {
    return [
        body('nome', validatorMessage('Nome')).exists().bail().isString(),
        body('email', validatorMessage('Email')).exists().bail().isString(),
        body('senha', validatorMessage('Senha')).exists().bail().isString()
    ]
};

const updateUser = function() {
    return [
        body('nome', validatorMessage('Nome')).exists().bail().isString(),
        param('id', validatorMessage('Id')).exists().bail().isInt()
    ]
};

const findUserById = function() {
    return [
        param('id', validatorMessage('Id')).exists().bail().isInt()
    ]
}

const deleteUser = function() {
    return [
        param('id', validatorMessage('Id')).exists().bail().isInt()
    ]
}

const login = function() {
    return [
        body('email', validatorMessage('Email')).exists().bail().isString(),
        body('senha', validatorMessage('Senha')).exists().bail().isString(),
    ]
}

module.exports = {
    create: create,
    updateUser: updateUser,
    deleteUser: deleteUser,
    findUserById: findUserById,
    login: login
}