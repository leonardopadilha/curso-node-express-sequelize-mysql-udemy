require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const handle404Error = require('./src/middlewares/handle-404Error');
const handleError = require('./src/middlewares/handleError');

const app = express();

const itemRoute = require('./src/routes/item.route');
const entradaRoute = require('./src/routes/entrada.route');
const usuarioRoute = require('./src/routes/usuario.route');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/usuarios', usuarioRoute)
app.use('/api/itens', itemRoute);
app.use('/api/entradas', entradaRoute);

app.use(handle404Error);
app.use(handleError)

app.listen(process.env.PORT, () => { console.log('rodando') })