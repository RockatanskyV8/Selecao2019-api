'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/pessoas-controller');

// router.get('/', (req, res, next) => {
//   res.status(200).send({
//     title: 'Seleção 2019',
//     version: '0.0.1'
//   });
// });

router.get('/', controller.get);
router.get('/nome/:nome', controller.getByNome);
router.get('/sobrenome/:sobrenome', controller.getBySobrenome);
router.get('/:id', controller.getById);

router.post('/', controller.post);

router.put('/:id', controller.put);

router.delete('/', controller.delete);

module.exports = router;
