'use strict'

const mongoose = require('mongoose');
const Endereco = mongoose.model('Endereco');
const repository = require('../repositories/enderecos-repository');

exports.get = async(req, res, next) => {
  try{
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

exports.getByNum = async(req, res, next) => {
  try{
    var data = await repository.getByNum(req.params.num);
    res.status(200).send(data);
  }catch(e){
    res.status(500).send({
      message: "Falha na requisição"
    });
    console.log(e);
  }
}

exports.getByRua = async(req, res, next) => {
  try{
    var data = await repository.getByRua(req.params.rua);
    res.status(200).send(data);
  }catch(e){
    res.status(500).send({
      message: "Falha na requisição"
    });
    console.log(e);
  }
}

exports.getByCep = async(req, res, next) => {
  try{
    var data = await repository.getByCep(req.params.cep);
    res.status(200).send(data);
  }catch(e){
    res.status(500).send({
      message: "Falha na requisição"
    });
    console.log(e);
  }
}

exports.getByBairro = async(req, res, next) => {
  try{
    var data = await repository.getByBairro(req.params.bairro);
    res.status(200).send(data);
  }catch(e){
    res.status(500).send({
      message: "Falha na requisição"
    });
    console.log(e);
  }
}

exports.getByCidade = async(req, res, next) => {
  try{
    var data = await repository.getByCidade(req.params.cidade);
    res.status(200).send(data);
  }catch(e){
    res.status(500).send({
      message: "Falha na requisição"
    });
    console.log(e);
  }
}

exports.post = async(req, res, next) => {
  try{
    await repository.create(req.body)
    res.status(201).send({
      message: 'Endereco cadastrada com sucesso'
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
        message: "Endereco atualizada com sucesso!"
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
        message: "Endereco removida com sucesso!"
    });
  }catch(e){
    res.status(500).send({
      message: "Falha na requisição"
    });
  }
};
