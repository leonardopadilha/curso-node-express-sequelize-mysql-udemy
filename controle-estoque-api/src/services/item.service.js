const itemRepository = require('../repositories/item.repository');
const createError = require('http-errors');

const criar = async function(item) {
    const itemCriado = await itemRepository.criar(item);
    return itemCriado;
};

const atualizar = async function(item, id) {
    const existeItem = await itemRepository.encontrarPorId(id);

    if (!existeItem) {
        return createError(404, 'Item não existe');
    };
    await itemRepository.atualizar(item, id);

    return await itemRepository.encontrarPorId(id);
};

const deletar = async function(id) {
    const item = await itemRepository.encontrarPorId(id);

    if (!item) {
        return createError(404, 'Item não existe');
    }

    await itemRepository.deletar(id);
    return item;
};

const encontrarTodos = async function() {
    const itens = await itemRepository.encontrarTodos();
    return itens;
};

const encontrarPorId = async function(id) {
    const item = await itemRepository.encontrarPorId(id);

    if (!item) {
        return createError(404, 'Item não encontrado')
    }
    return item;
};

module.exports = {
    criar: criar,
    atualizar:atualizar,
    deletar: deletar,
    encontrarTodos: encontrarTodos,
    encontrarPorId: encontrarPorId
}