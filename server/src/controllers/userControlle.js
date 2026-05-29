const bcrypt = require("bcrypt");
const {User, Categoria} = require('../models/userModels');

const getLogin = async (req, res) => {
    res.render('login', {error: null});
};

const getCadastro = async (req, res) => {
    res.render('cadastro', {error: null});
};

const getTela = async(req, res) => {
    res.render('tela', {error: null});
}

const postLogin = async (req, res) => {
    try {
        const {nome, password} = req.body;
        if(!nome || !password){
            return res.status(400).render('login', {error: "Nome e senha são obrigatórios !"});
        }

        const user = await User.findOne({ where: { nome} });

        if (!user) {
            return res.status(404).render('login', {error: "Usuario nao encontrado !"});
        }

        const senhaValida = await bcrypt.compare(password, user.password);

        if(!senhaValida){
            return res.status(401).render('login', {error: "Senha incorreta !"});
        }

        return res.redirect('/tela');

    } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        res.status(500).render('login', {error: "Error interno ao buscar usuario"});
    }
};

const postUser = async (req, res) => {
    try {
        const {nome, email, password} = req.body;
        if(!nome || !email || !password){
            console.log(email, nome, password);
            return res.status(400).render('cadastro', {error: "Nome, email e senha são obrigatórios"});
        }

        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(409).render('cadastro', {error: "Email já cadastrado"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        
        const newUser = await User.create({
            nome: nome,
            email:email,
            password: hashedPassword
        });

        console.log(`Usuario criado com ID ${newUser.id}`);
        res.redirect('/login?sucess=1');

    } catch (error) {
        console.error( error);
        return res.status(500).render('cadastro', {error: "Error ao criar usuario"});
    }
};
module.exports = {getLogin, getCadastro, getTela ,postLogin, postUser};