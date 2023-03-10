const usuarioService = require('../services/usuario.service')
const { validationResult } = require('express-validator');
const createError = require('http-errors');

const login = async function(req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() })
        }

        const response = await usuarioService.login(req.body);

        if (response && response.message) {
            throw response;
        }

        res.send(response);
    } catch (error) {
        return next(error);
    }
}

const create = async function(req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() })
        }
        const response = await usuarioService.create(req.body);
        
        if (response && response.message) {
            throw response;
        }
        res.send(response);
    } catch (error) {
        return next(error);
    }
}

const updateUser = async function(req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() })
        }

        const response = await usuarioService.updateUser({
            nome: req.body.nome
        }, req.params.id);

        if (response && response.message) {
            throw response;
        }

        res.send(response);
    } catch (error) {
        return next(error); 
    }
}

const findUsers = async function(req, res, next) {
    try {
        const usuarios = await usuarioService.findUsers();
        res.send(usuarios);
    } catch (error) {
       return next(error);
    }
};

const findUserById = async function(req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() });
        }

        const response = await usuarioService.findUserById(req.params.id);

        if (response && response.message) {
            throw response;
        }
        res.send(response);
    } catch (error) {
        return next(error);
    }
}

const deleteUser = async function(req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() })
        }
        const response = await usuarioService.deleteUser(req.params.id);

        if (response && response.message) {
            throw response;
        }

        res.send(response);
    } catch (error) {
        return next(error);
    }
}
module.exports = {
    login: login,
    create: create,
    updateUser: updateUser,
    deleteUser: deleteUser,
    findUsers: findUsers,
    findUserById: findUserById
}