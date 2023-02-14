const db = require('../models/index');
const Pessoa = db.Pessoa;

function criarPessoa() {
    Pessoa.create({
        nome: 'João',
        sobrenome: 'Silva',
        cpf: '111.111.111-11',
        email: 'joao@email.com',
        rg: '1234568'
    }).then(pessoaCriada => console.log(pessoaCriada))
}

//criarPessoa();

function atualizarPessoa(id) {
    Pessoa.update({
        cpf: '000.000.00-00',
        rg: '123.32156'
    }, {
        where: {
            id : Number(id)
        },
    }).then(pessoaAtualizada => console.log(pessoaAtualizada))
}

//atualizarPessoa(1);

function deletarPessoa(id) {
    Pessoa.destroy({
        where : {
            id: Number(id)
        }
    }).then(pessoaDeletada => console.log(pessoaDeletada))
}

deletarPessoa(1);