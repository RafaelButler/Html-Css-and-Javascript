const express = require('express');
const routes = express.Router();
const cenprotController = require('./controllers/CenprotController');
const receitaController = require('./controllers/ReceitaController');
const hookCenprotController = require('./controllers/HookCenprotController');

routes.post('/cenprot', cenprotController.enviarDadosCenprot);
routes.get('/cenprot', cenprotController.receberDadosCenprot);

routes.post('/receita', receitaController.enviarDadosReceita);
routes.get('/receita', receitaController.receberDadosReceita);

routes.post('/hookcenprot', hookCenprotController.mostrar);

module.exports = routes;   