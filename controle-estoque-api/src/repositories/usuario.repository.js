const db = require('../database/models/index');
const { Usuario } = require('../database/models/index');

const create = async function(usuario) {
    const usuarioCriado = await Usuario.create(usuario);
    return usuarioCriado;
};

const findUsers = async function() {
    const usuarios = await Usuario.findAll();
    return usuarios;
};

const findUserById = async function(idUser) {
    const usuarioId = await Usuario.findByPk(idUser);
    return usuarioId;
}

const findUserByWhere = async function(where) {
    const usuario = await Usuario.findOne({
        where: where
    });
    return usuario;
}

module.exports = {
    create: create,
    findUsers: findUsers,
    findUserById: findUserById,
    findUserByWhere: findUserByWhere
}