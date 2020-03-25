const express = require('express');

const ongController = require('./controllers/ong.controller');
const incidentController = require('./controllers/incident.controller');
const profileController = require('./controllers/profile.controller');
const sessionController = require('./controllers/session.controller');


const routes = express.Router();

routes.post('/sessions', sessionController.create);

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.post('/incidents', incidentController.create);
routes.get('/incidents', incidentController.index);
routes.delete('/incidents/:id', incidentController.delete);

routes.get('/profile', profileController.index);


module.exports = routes;

/**
 * Rota/ Recurso
 */

 /**
  * Métodos Http
  * GET: Buscar dados no backend
  * POST: Criar dado no backend
  * PUT: Alterar dado no backend
  * DELETE: Deletar dado no backend
  */

 /**
  * Tipos de parâmetros
  * 
  * Query Params: Parametros nomeados enviados na rota após "?" (filtros, paginação)
  * Route Params: Parametros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar e alterar recursos
  * SQL: MySQl, **SQLite**, PostgreSQL
  * NoSQL: MongoDB, CouchDB
  */