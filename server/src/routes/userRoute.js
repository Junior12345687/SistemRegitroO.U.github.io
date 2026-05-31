const express = require('express');
const router = express.Router();
const userControlle = require('../controllers/userControlle');
const userModels = require('../models/userModels');

console.log('tabelas que foram criadas...', userModels)
console.log('Conectando rota de usuário...', userControlle);

router.get('/login', userControlle.getLogin);
router.get('/cadastro', userControlle.getCadastro);
router.get('/tela', userControlle.getTela);
router.post('/tela', userControlle.postLogin);
router.post('/user', userControlle.postUser);

module.exports = router;