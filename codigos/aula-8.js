const db = require('../models');
const Pessoa = db.Pessoa;
const Telefone = db.Telefone;
const Endereco = db.Endereco;

async function adicionarTelefone(telefone) {
    const telefoneCriado = await Telefone.create(telefone);
    console.log(telefoneCriado);
};

async function encontrarPessoaComTelefone(idPessoa, idTelefone) {
    const pessoa = await Pessoa.findOne({
        where: {
            id: idPessoa,
        },
        include: [
            {
                model: Telefone,
                where : { id: idTelefone}
            },
            {
                model: Endereco
            }
    ],
    });
    console.log(JSON.parse(JSON.stringify(pessoa)));
    
}

/* adicionarTelefone({
    numero: '11999999988',
    pessoaId: 3
}); */


encontrarPessoaComTelefone(3, 2);