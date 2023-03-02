const usuarioService = require('../services/usuario.service')

const create = async function(req, res) {
    const usuario = await usuarioService.create(req.body);
    res.send(usuario);
}

const findUsers = async function(req, res) {
    const usuarios = await usuarioService.findUsers();
    res.send(usuarios);
};

const findUserById = async function(req, res) {
    const usuarioId = await usuarioService.findUserById(req.params.id);
    res.send(usuarioId);
}
module.exports = {
    create: create,
    findUsers: findUsers,
    findUserById: findUserById
}