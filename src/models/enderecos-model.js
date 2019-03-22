'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
  num:{type: String, required: true, trim:true},
  rua:{type: String, required: true, trim:true},
  cep:{type: String, required: true, trim:true},
  bairro:{type: String, required: true, trim:true},
  cidade:{type: String, required: true, trim:true},
  tipo:{type: String, enum: ['residencial', 'comercial'], default: 'residencial'},
  residente:{type: mongoose.Schema.Types.ObjectId , ref:'Pessoa'}
});

module.exports = mongoose.model('Endereco', schema);
