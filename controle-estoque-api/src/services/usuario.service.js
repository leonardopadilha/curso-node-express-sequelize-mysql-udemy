const usuarioRepository = require('../repositories/usuario.repository');
const createError = require('http-errors');
require('dotenv').config();
const bcrypt = require('bcrypt');

const create = async function(usuario) {
    const existeUsuario = await usuarioRepository.findUserByWhere({email : usuario.email});

    if (existeUsuario) {
        return createError(409, 'Usuário já existe');
    }
    usuario.senha = await bcrypt.hash(usuario.senha, ~~process.env.SALT);
    const usuarioCriado = await usuarioRepository.create(usuario);
    return usuarioCriado;
};

const updateUser = async function(usuario, id) {
    const existeUsuario = await usuarioRepository.findUserById(id);

    if (!existeUsuario) {
        return createError(404, 'Usuário não existe');
    };
    await usuarioRepository.updateUser(usuario, id);

    return await usuarioRepository.findUserById(id);
};

const deleteUser = async function(id) {
    const usuario = await usuarioRepository.findUserById(id);

    if (!usuario) {
        return createError(404, 'Usuário não existe');
    }

    await usuarioRepository.deleteUser(id);
    return usuario;
};

const findUsers = async function() {
    const usuarios = await usuarioRepository.findUsers();
    return usuarios;
};

const findUserById = async function(idUser) {
    const usuarioId = await usuarioRepository.findUserById(idUser);

    if (!usuarioId) {
        return createError(404, 'Usuário não encontrado')
    }
    return usuarioId;
};

module.exports = {
    create: create,
    updateUser:updateUser,
    deleteUser: deleteUser,
    findUsers: findUsers,
    findUserById: findUserById
}