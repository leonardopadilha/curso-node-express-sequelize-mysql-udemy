const db = require('../models')
const Pessoa = db.Pessoa;

async function criarPessoa() {
    const t = await db.sequelize.transaction();

    try {
        await Pessoa.create({
            nome: 'Gabriel',
            sobrenome: 'test',
            cpf: '1234567',
            email: 'gabriel@gmail.com',
            rg: '123456'
        }, {transaction: t})

        await Pessoa.create({
            nome: 'Dorgival',
            sobrenome: 'test',
            cpf: '1234567',
            email: 'dorgival@gmail.com',
            rg: afdsafdsa
        }, {transaction: t})

        await t.commit();
        console.log("cadastro com sucesso!");
    } catch (error) {
        await t.rollback();
        console.log("Deu ruim...");
    }
}

async function criarPessoasTransaction() {
    try {
        const result = await db.sequelize.transaction(async(t) => {
            await Pessoa.create({
                nome: 'Dorgival6',
                sobrenome: 'test',
                cpf: '1234567',
                email: 'dorgival6@gmail.com',
                rg: '123456'
            }, {transaction: t})

            await Pessoa.create({
                nome: 'Ana',
                sobrenome: 'test',
                cpf: '1234567',
                email: 'ana@gmail.com',
                rg: '12345678'
            }, {transaction: t})

            return true;
        })

        console.log('usuários cadastrados')
    } catch(error) {
        console.log(error);
    }
}

//criarPessoa();
criarPessoasTransaction();