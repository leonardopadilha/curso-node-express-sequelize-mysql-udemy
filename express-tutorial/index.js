const express = require('express');
const bodyParser = require('body-parser');

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

http://localhost:3000/usuarios
app.get('/usuarios', (req, res) => {
  res.send([
    {
        nome: 'joao'
    },
    {
        nome: 'maria'
    }
  ])
});

http://localhost:3000/nomes/1
app.get('/nomes/:id', (req, res) => {
    const nomes = [
        {
            id: 1,
            nome: "Souza"
        },
        {
            id: 2,
            nome: 'Pires'
        }
    ]
    const nomesUsuarios = nomes.find(nome_do_usuario => ~~req.params.id === nome_do_usuario.id)
    res.send(nomesUsuarios)
});

// http://localhost:3000/usuarios/souza@souza.com/123a
app.get("/usuarios/:email/:senha", (req, res) => {
    const inforUsers = [
        {
            id: 1,
            email: 'souza@souza.com',
            nome: "Souza",
            senha: '123a'
        },
        {
            id: 2,
            email: 'pires@pires.com',
            nome: 'Pires',
            senha: '123b'
        }
    ]
    const usuario = inforUsers.find(infoUsuarios => 
                                    req.params.email === infoUsuarios.email && 
                                    req.params.senha === infoUsuarios.senha);
    res.send(usuario)
});

// http://localhost:3000/carros?nome=Audi
app.get("/carros", (req, res) => {
    const carros = [
        {
            nome: 'Ferrari'
        },
        {
            nome: 'Audi'
        }
    ];

    const carro = carros.find(car => car.nome === req.query.nome)
    res.send(carro)
});

const musicas = [];

// http://localhost:3000/musicas
app.post("/musicas", (req, res) => {
    const musica = req.body;
    musicas.push(musica);

    res.send(req.body.nome);
})

app.get("/musicas", (req, res) => {
    res.send(musicas)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})