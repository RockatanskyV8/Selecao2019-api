'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
  nome:{type: String, required: true, trim:true},
  sobrenome:{type: String, required: true, trim:true},
  enderecos:[{type: mongoose.Schema.Types.ObjectId , ref:'Endereco'}]
});

module.exports = mongoose.model('Pessoa', schema);
