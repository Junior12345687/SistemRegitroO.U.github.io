const {User, Categoria} = require('../models/userModels');

const getLogin = async (req, res) => {
    res.render('login', {error: null});
};

const getUser = async (req, res) => {
    try {
        const {nome, password} = req.body;
        if(!nome || !password){
            return res.status(400).render('login', {error: "Nome e senha são obrigatórios"});
        }

        const user = await User.findOne({ where: { nome, password } });
        if (!user) {
            return res.status(404).render('login', {error: "Usuario nao encontrado "});
        }

        res.render('/dashboard');

    } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        res.status(500).render('login', {error: "Error interno ao buscar usuario"});
    }
};

const postUser = async (req, res) => {
    try {
        const {id, nome, email, password} = req.body;
        if(!nome || !email || !password){
            return res.status(400).render('cadastro', {error: "Nome, email e senha são obrigatórios"});
        }

        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(409).render('cadastro', {error: "Email já cadastrado"});
        }

        const newuser = await User.create({id, nome, email, password});
        res.status(201).render('login', {error: "Usuario criado com sucesso, faça login"});

    } catch (error) {
        console.error( error);
        res.status(500).render('cadastro', {error: "Error ao criar usuario"});
    }
};
module.exports = {getLogin, getUser, postUser};