const db = require('../models/index');
const Pessoa = db.Pessoa;

const pessoas = [
    {
        nome: 'João',
        sobrenome: 'Silva',
        cpf: '111.111.111-11',
        email: 'joao@email.com',
        rg: '1234568'
    },
    {
        nome: 'João',
        sobrenome: 'Silva',
        cpf: '111.111.111-11',
        email: 'joao@email.com',
        rg: '1234568'
    },
    {
        nome: 'João',
        sobrenome: 'Silva',
        cpf: '111.111.111-11',
        email: 'joao@email.com',
        rg: '1234568'
    },
    {
        nome: 'João',
        sobrenome: 'Silva',
        cpf: '111.111.111-11',
        email: 'joao@email.com',
        rg: '1234568'
    }
]

function criarPessoa() {
    Pessoa.bulkCreate(pessoas).then(pessoaCriada => console.log(pessoaCriada))
}

criarPessoa();
