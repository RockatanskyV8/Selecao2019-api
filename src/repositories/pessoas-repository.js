'use strict';
const mongoose = require('mongoose');
const Pessoa = mongoose.model('Pessoa');

exports.get = async() => {
  const res = await Pessoa.find({});
  return res;
}

exports.getById  = async(id) => {
  const res = await Pessoa
    .findById(id);
  return res;
}

exports.getByNome  = async(nome) => {
  const res = await Pessoa.find({nome: nome});
  return res;
}

exports.getBySobrenome  = async(sobrenome) => {
  const res = await Pessoa.find({sobrenome: sobrenome});
  return res;
}

exports.create = async(data) => {
  var product = new Pessoa(data);
  await product.save();
}
exports.update = async(id, data) => {
  await Pessoa
    .findByIdAndUpdate(id, {
        $set: {
          nome: data.nome,
          sobrenome: data.sobrenome
        }
    });
}
exports.delete = async(id) => {
  await Pessoa
    .findOneAndRemove(id);
}
