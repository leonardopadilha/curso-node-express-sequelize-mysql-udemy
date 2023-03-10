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

async function encontrarPessoa(idPessoa) {
    const pessoaCriada = await Pessoa.findOne({
        where : {
            id : idPessoa
        },
        include : [
            {
                model: Pessoa,
                as: 'seguindo',
                through: {
                    attributes: []
                } 
            },
        
            {
                model: Pessoa,
                as: 'seguidores',
                through: {
                    attributes: []
                } 
            }
        ]
    });
    console.log(JSON.parse(JSON.stringify(pessoaCriada)))
}

encontrarPessoa(2);