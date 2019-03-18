'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router();

mongoose.connect(config.connectionString);

const Pessoa = require('./models/pessoas-model.js');

const pessoaRoute = require("./routes/pessoa-route");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use('/pessoas', pessoaRoute);


module.exports = app;
