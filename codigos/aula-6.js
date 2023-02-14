const db = require('../models');
const sequelize = db.sequelize;

function encontrarPorId(idPessoa) {
    sequelize.query(
        'SELECT * FROM pessoas WHERE id = :id',
        {
            replacements: {id: idPessoa},
            type: sequelize.QueryTypes.SELECT,
            raw: true,
            plain: true //Retorna apenas 1 linha
        }
    ).then(pessoa => console.log(pessoa));
}

//encontrarPorId(500);

function encontrarPorNome(nomePessoa) {
    sequelize.query(
        'SELECT * FROM pessoas WHERE nome = :nome',
        {
            replacements: {nome: nomePessoa},
            type: sequelize.QueryTypes.SELECT,
            raw: true,
            plain: true
        }
    ).then(pessoa => console.log(pessoa))
}

//encontrarPorNome('Jerrie');

function encontrarComIdIn(arrayIds) {
    sequelize.query(
        'SELECT * FROM pessoas WHERE id IN (:arrayIds)',
        {
            replacements: { arrayIds },
            type: sequelize.QueryTypes.SELECT,
            raw: true
        }
    ).then(pessoa => console.log(pessoa))
}

//encontrarComIdIn([1,2,3,4]);

function encontrarComOffsetELimit() {
    sequelize.query(
        'SELECT * FROM pessoas LIMIT 10 OFFSET 990;',
        {
            type: sequelize.QueryTypes.SELECT,
            raw: true
        }
    ).then(pessoa => console.log(pessoa))
}

//encontrarComOffsetELimit();


function encontrarComLike(replacements) {
    sequelize.query(
        'SELECT * FROM pessoas WHERE nome LIKE :nome LIMIT :limit;',
        {
            replacements: replacements,
            type: sequelize.QueryTypes.SELECT,
            raw: true
        }
    ).then(pessoa => console.log(pessoa))
};

/* encontrarComLike({
    nome: 'Ro%',
    limit: 10
}) */

function encontrarUtilizandoOperadores(replacements) {
    sequelize.query(
        'SELECT * FROM pessoas WHERE id <= :id OR sobrenome = :sobrenome;',
        {
            replacements,
            type: sequelize.QueryTypes.SELECT,
            raw: true,
        }
    ).then(pessoa => console.log(pessoa))
}

encontrarUtilizandoOperadores({
    id: 5,
    sobrenome: "Harpham"
})