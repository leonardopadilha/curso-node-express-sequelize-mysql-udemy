const usuarioRepository = require('../repositories/usuario.repository');

const create = async function(usuario) {
    const usuarioCriado = await usuarioRepository.create(usuario);
    return usuarioCriado;
}

module.exports = {
    create: create
}