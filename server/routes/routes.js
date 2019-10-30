const express = require('express')
const carroControl = require('../controllers/carroControl')
const routes = express.Router()

routes.get('/carros', carroControl.coletarTudo)
routes.get('/carros/:modelo', carroControl.coletar)
routes.post('/carros', carroControl.adicionar)
routes.delete('/carros/:id', carroControl.deletar)

module.exports = routes
