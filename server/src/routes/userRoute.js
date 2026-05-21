const express = require('express');
const router = express.Router();
const userControlle = require('../controllers/userControlle'); 

console.log('Conectando rota de usuário...', userControlle);

router.get('/login', userControlle.getLogin);
router.get('/api/user', userControlle.getUser);
router.post('/api/user', userControlle.postUser);

module.exports = router;