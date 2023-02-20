const db = require('../models');
const Pessoa = db.Pessoa;
const PessoaSeguidor = db.PessoaSeguidor;

async function criarPessoaSeguidor(pessoaSeguidor) {
    const pessoaSeguidorCriado = await PessoaSeguidor.create(pessoaSeguidor);

    console.log(pessoaSeguidorCriado);
}

/* criarPessoaSeguidor({
    pessoaId: 7,
    seguePessoaId: 2
}) */
