const db = require('../models');
const Pessoa = db.Pessoa;
const Op = db.Sequelize.Op;

function encontrarPorId(id) {
    Pessoa.findByPk(id).then(pessoa => console.log(JSON.stringify(pessoa)));
}

//encontrarPorId(1);

function encontrarPorNome(nome) {
    Pessoa.findOne({
        attributes: ['nome', 'sobrenome'], 
        where : {
            nome : nome
        },
        raw : true,
    }).then(pessoa => console.log(pessoa));
}

//encontrarPorNome('Jerrie');

function encontrarComIdIn(arrayIds) {
    Pessoa.findAll({
        where : {
            id : arrayIds,
        },
        raw : true,
    }).then(pessoa => console.log(pessoa))
}

//encontrarComIdIn([1,2,3,4]);

function encontrarComOffsetELimit() {
    Pessoa.findAll({
        offset: 990, // Retornar dados a partir do id 991
        limit: 10,
        raw : true,
    }).then(pessoa => console.log(pessoa))
}

//encontrarComOffsetELimit();

function encontrarComLike() {
    Pessoa.findAll({
        where : {
            nome : {
                [Op.like]: 'Ro%'
            }
        },
        raw : true,
        limit : 10
    }).then(pessoa => console.log(pessoa))
}

//encontrarComLike();

function encontrarUtilizandoOperadores() { // Consulta utilizando or
    Pessoa.findAll({
        where : {
            [Op.or] : [
                {
                    id: {
                        [Op.lte]: 5
                    }
                },
                {
                    sobrenome : 'Harpham'
                }
            ]
        },
        raw : true,
    }).then(pessoa => console.log(pessoa))
}

encontrarUtilizandoOperadores();

