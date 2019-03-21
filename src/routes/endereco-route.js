'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/enderecos-controller');

router.get('/', controller.get);
router.get('/:id', controller.getById);
router.get('/num/:num', controller.getByNum);
router.get('/rua/:rua', controller.getByRua);
router.get('/cep/:cep', controller.getByCep);
router.get('/bairro/:bairro', controller.getByBairro);
router.get('/cidade/:cidade', controller.getByCidade);


router.post('/', controller.post);

router.put('/:id', controller.put);

router.delete('/:id', controller.delete);

module.exports = router;
