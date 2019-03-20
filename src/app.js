'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const swaggerUI = require('swagger-ui-express');
const swaggerDoc = require('./swagger/swagger.json');

const config = require('./config');

const app = express();
const router = express.Router();

mongoose.connect(config.connectionString);

const Pessoa = require('./models/pessoas-model.js');
const Endereco = require('./models/enderecos-model.js');

const pessoaRoute = require("./routes/pessoa-route");
const enderecoRoute = require("./routes/endereco-route");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));
app.use('/pessoas', pessoaRoute);
app.use('/enderecos', enderecoRoute);


module.exports = app;
