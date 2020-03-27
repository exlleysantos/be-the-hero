const express = require('express');

const routes = express.Router();

const ongController = require('./controllers/ongControllers');
const incidentCrontroller = require('./controllers/incidentControllers');
const profileController = require('./controllers/profileControllers');
const sessionController = require('./controllers/sessionCOntrollers');

routes.post('/sessions', sessionController.create);

routes.get('/ongs', ongController.list);
routes.post('/ongs', ongController.create);

routes.get('/incidents', incidentCrontroller.list);
routes.post('/incidents', incidentCrontroller.create);
routes.delete('/incidents/:id', incidentCrontroller.delete);

routes.get('/profile', profileController.index);

module.exports = routes;
