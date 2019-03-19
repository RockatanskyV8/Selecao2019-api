'use strict';
const mongoose = require('mongoose');
const Endereco = mongoose.model('Endereco');

exports.get = async() => {
  const res = await Endereco.find({});
  return res;
}

exports.getById  = async(id) => {
  const res = await Endereco
    .findById(id);
  return res;
}

exports.getByNum  = async(num) => {
  const res = await Endereco.find({num: num});
  return res;
}

exports.getByRua  = async(rua) => {
  const res = await Endereco.find({rua: rua});
  return res;
}

exports.getByCep  = async(cep) => {
  const res = await Endereco.find({cep: cep});
  return res;
}

exports.getByBairro  = async(bairro) => {
  const res = await Endereco.find({bairro: bairro});
  return res;
}

exports.getByCidade  = async(cidade) => {
  const res = await Endereco.find({cidade: cidade});
  return res;
}

exports.create = async(data) => {
  var product = new Endereco(data);
  await product.save();
}
exports.update = async(id, data) => {
  await Endereco
    .findByIdAndUpdate(id, {
        $set: {
          num: data.num,
          rua: data.rua,
          cep: data.cep,
          bairro: data.bairro,
          cidade: data.cidade
        }
    });
}
exports.delete = async(id) => {
  await Endereco
    .findOneAndRemove(id);
}
