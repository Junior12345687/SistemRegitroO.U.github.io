const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

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
        unique: true
    },

    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
});

const Categoria = sequelize.define('Categoria', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nome: {
        type: DataTypes.STRING(255),
        allowNull: false
    },

    descricao: {
        type: DataTypes.STRING(255),
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
        type: DataTypes.STRING(255),
        allowNull: false
    },

    descricao: {
        type: DataTypes.STRING(255),
        allowNull: true
    },

    data_ocorrencia: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

module.exports = { User, Categoria, Ocorrencia };