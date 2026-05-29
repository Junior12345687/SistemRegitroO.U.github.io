const { version } = require('react');

const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'API Sistema de Registro de Ocorrências Urbanas ',
        version: '1.0.0',
        description: 'Documentação criada pelo swagger-autogen Aluno Junior Santos'
    },
    host:'localhost:3000',
    schemes: ['http', 'https'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);