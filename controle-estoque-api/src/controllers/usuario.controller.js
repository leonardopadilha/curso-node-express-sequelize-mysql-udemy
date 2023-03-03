const usuarioService = require('../services/usuario.service')

const create = async function(req, res, next) {
    try {
        const response = await usuarioService.create(req.body);
        
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
        next(error);
    }
};

const findUserById = async function(req, res, next) {
    try {
        const response = await usuarioService.findUserById(req.params.id);

        if (response && response.message) {
            throw response;
        }
        res.send(response);
    } catch (error) {
        return next(error);
    }
    
}
module.exports = {
    create: create,
    findUsers: findUsers,
    findUserById: findUserById
}