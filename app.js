const express = require('express')
const {
  handle500s,
  handleCustomError,
  handleMongooseErrors
} = require('./controllers/errors-controllers.js')
const apiRouter = require('./routes/api-router.js')
const decodeIDToken = require('./authenticateToken.js')

const app = express()

app.use(express.json())

app.use(decodeIDToken)
app.use('/api', apiRouter)

app.use(handleCustomError)
app.use(handleMongooseErrors)
app.use(handle500s)

module.exports = app
