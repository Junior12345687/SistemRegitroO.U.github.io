const express = require('express');
const router = express.Router();
const userControlle = require('../controllers/userControlle'); 

console.log('Conectando rota de usuário...', userControlle);

router.get('/login', userControlle.getUser);
router.post('/user', userControlle.postUser);

module.exports = router;