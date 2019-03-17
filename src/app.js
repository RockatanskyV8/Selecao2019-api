'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

const pessoaRoute = require("./routes/pessoa-route")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use('/pessoas', pessoaRoute);


module.exports = app;
