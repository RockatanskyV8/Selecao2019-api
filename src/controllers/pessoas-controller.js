'use strict'

const mongoose = require('mongoose');
const Pessoa = mongoose.model('Pessoa');
const repository = require('../repositories/pessoas-repository');

exports.get = async(req, res, next) => {
  try{
    // process.stdout.write(req.body, req.params);
    console.log(req.body);
    var data = await repository.get();
    res.status(200).send(data)
  }catch(e){
    res.status(500).send({
      message: "Falha na requisição"
    });
    console.log(e)
  }
}

exports.getById = async(req, res, next) => {
  try{
    var data = await repository.getById(req.params.id);
    res.status(200).send(data);
  }catch(e){
    res.status(500).send({
      message: "Falha na requisição"
    });
    console.log(e);
  }
}

exports.getByNome = async(req, res, next) => {
  try{
    var data = await repository.getByNome(req.params.nome);
    res.status(200).send(data);
  }catch(e){
    res.status(500).send({message:"teste"});
    console.log(e);
  }
}

exports.getBySobrenome = async(req, res, next) => {
  try{
    var data = await repository.getBySobrenome(req.params.sobrenome);
    res.status(200).send(data);
  }catch(e){
    res.status(500).send({message:"teste"});
    console.log(e);
  }
  // Pessoa
  //   .findById(req.params.sobrenome)
  //     .then(data => {
  //       res.status(200).send(data);
  //     }).catch(e => {
  //       res.status(400).send(e);
  //     });
}

exports.post = async(req, res, next) => {
  try{
    await repository.create(req.body)
    res.status(201).send({
      message: 'Pessoa cadastrada com sucesso'
    });
  }catch(e){
    res.status(500).send({
      message: "Falha na requisição"
    });
  }
};

exports.put = async(req, res, next) => {
  try{
    await repository.update(req.params.id, req.body);
    res.status(200).send({
        message: "Pessoa atualizada com sucesso!"
    });
  }catch(e){
    res.status(500).send({
      message: "Falha na requisição"
    });
  }
};

exports.delete = async(req, res, next) => {
  try{
    await repository.delete(req.params.id);
    res.status(200).send({
        message: "Pessoa removida com sucesso!"
    });
  }catch(e){
    res.status(500).send({
      message: "Falha na requisição"
    });
  }
};
