'use strict'

const mongoose = require('mongoose');
const Pessoa = mongoose.model('Pessoa');

exports.get = (req, res, next) => {
  Pessoa.find({}).then( data => {
    res.status(201).send(data);
  }).catch(e => {
    res.status(400).send({message: '', data: e});
  })
}

exports.post = (req, res, next) => {
  var pessoa = new Pessoa(req.body);
  pessoa.save().then(x => {
    res.status(201).send({message: "Pessoa cadastrada com sucesso"});
  }).catch(e => {
    res.status(400).send({message: "Falha no cadastro", data: e});
  });
};

exports.put = (req, res, next) => {
  Pessoa
    .findByIdAndUpdate(req.params.id, {
      $set: {
        nome: req.body.nome,
        sobrenome: req.body.sobrenome
      }
    }).then( x => {
      res.status(200).send({
        message: 'Pessoa atualizada com sucesso'
      });
    }).catch( e => {
      res.status(400).send({
        message: 'Falha ao atualizar'
      });
    });
};

exports.delete = (req, res, next) => {
  Pessoa
    .findByIdAndRemove(req.body.id)
    .then(x => {
      res.status(200).send({
        message:'Pessoa removida com sucesso'
      });
    }).catch(e => {
      res.status(400).send({
        message: 'Falha ao remover produto',
        data: e
      });
    });
};
