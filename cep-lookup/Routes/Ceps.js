const express = require('express');

const Routes = express.Router();

const Ceps = require('../controllers/Ceps')

Routes.get('/ceps', Ceps.getAllCeps)

// Routes.get(
//   '/cep/:id',
//   Ceps.verifyCep
// )

module.exports = Routes;