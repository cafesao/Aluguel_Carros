const mongo = require('mongoose')
const express = require('express')
const cors = require('cors')
const requireDir = require('require-dir')

const app = express()
app.use(express.json())
app.use(cors())

mongo.connect('mongodb://localhost:27017/api', {useNewUrlParser: true, useUnifiedTopology: true })
requireDir('../model/')

app.use('/api', require('../routes/routes'))

app.listen(3001)