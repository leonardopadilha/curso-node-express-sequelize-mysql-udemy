const usuarioRepository = require('../repositories/usuario.repository');

const create = async function(usuario) {
    const usuarioCriado = await usuarioRepository.create(usuario);
    return usuarioCriado;
};

const findUsers = async function() {
    const usuarios = await usuarioRepository.findUsers();
    return usuarios;
};

const findUserById = async function(idUser) {
    const usuarioId = await usuarioRepository.findUserById(idUser);
    return usuarioId;
};

module.exports = {
    create: create,
    findUsers: findUsers,
    findUserById: findUserById
}