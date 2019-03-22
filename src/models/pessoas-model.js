'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
  nome:{type: String, required: true, trim:true},
  sobrenome:{type: String, required: true, trim:true},
});

module.exports = mongoose.model('Pessoa', schema);
