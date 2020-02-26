const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const http = require('http')

const { setupWebSocket } = require('./websocket')
const routes = require('../src/routes')

const app = express()
const server = http.Server(app)

setupWebSocket(server)

mongoose.connect('mongodb://carlos:carlos123@cluster0-shard-00-00-r859r.mongodb.net:27017,cluster0-shard-00-01-r859r.mongodb.net:27017,cluster0-shard-00-02-r859r.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())
    // Isto configura o express para usar em todas as rotas, cadastrando o JSON, pois o express não entende o JSON por padrão
app.use(express.json())
app.use(routes)

// Métodos HTTP: GET, POST, PUT , DELETE

// Tipos de Parâmetros: 

// Query Params: request.query (Fitros, ordenação, paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)

server.listen(3333)