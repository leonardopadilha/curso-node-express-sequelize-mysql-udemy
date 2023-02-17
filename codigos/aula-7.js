const db = require("../models");
const Pessoa = db.Pessoa;
const Endereco = db.Endereco;

async function adicionarEndereco(endereco) {
    const enderecoCriado = await Endereco.create(endereco);
    console.log(enderecoCriado);
};

async function procurarEnderecoPorId(enderecoId) {
    const endereco = await Endereco.findOne({
        where : {
            id: enderecoId
        },
        include: [{
            model: Pessoa,
            attributes: ['nome', 'sobrenome', 'email'],
            required: true
        }],
        raw: true,
        nest: true,
    })
    console.log(endereco)
}

/* adicionarEndereco({
    bairro: 'coroa do teste',
    estado: 'estado de teste',
    cidade: 'cidade para os testes',
    rua: 'rua teste 1',
    numero: '192',
    pessoaId: 1
}); */

procurarEnderecoPorId(1);

