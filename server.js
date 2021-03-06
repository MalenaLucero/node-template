const express = require('express')
const bodyParser = require('body-parser')

const response = require('./network/response')
const router = require('./network/routes')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
router(app)

app.listen(3000)
console.log('Escuchando en puerto 3000')