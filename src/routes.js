const express = require('express');
const ListaController = require('./controllers/ListaController');


const routes = express.Router();

routes.get('/lista', ListaController.index);

module.exports = routes;