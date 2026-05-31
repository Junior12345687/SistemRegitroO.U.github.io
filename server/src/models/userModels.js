const {DataTypes, DATE} = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcrypt');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nome:{
        type: DataTypes.STRING(255),
        allowNull: false
    },

    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
            isEmail: true
        },
        // unique: true
    },

    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
}, {timestamps: false});

const Categoria = sequelize.define('Categoria', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nome: {
        type: DataTypes.STRING(255),
        allowNull: true
    },

    descricao: {
        type: DataTypes.STRING(255),
        allowNull: true
    },

    tipo: {
        type: DataTypes.STRING(100),
        allowNull: true
    }

}, {timestamps: false});

const status = sequelize.define('Status', {

});

const nivel = sequelize.define('Nivel', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nome: {
        type: DataTypes.ENUM('Baixa', 'Media', 'Alta'),
        allowNull: false,
        unique: true
    },

    cor: {
        type: DataTypes.STRING(7),
        allowNull: true
    }
});

const Ocorrencia = sequelize.define('Ocorrencia', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    titulo: {
        type: DataTypes.TEXT,
        allowNull: true
    },

    descricao: {
        type: DataTypes.TEXT,
        allowNull: true
    },

    data_ocorrencia: {
        type: DataTypes.DATE,
        allowNull: true
    },

    endereco: {
        type: DataTypes.STRING(200),
        allowNull: true
    },
},{timestamps: false});

const anexo = sequelize.define('Anexo', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    id_Ocorrencia:{
        type: DataTypes.INTEGER
    },

    caminho_arquivo: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },

    tipo_arquivo: {
        type: DataTypes.STRING(30),
        allowNull: true
    },

    data_upload: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
    }
}, {timestamps: false});



module.exports = { User, Categoria, Ocorrencia };