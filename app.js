import express from 'express'
import {
  handle500s,
  handleCustomError,
  handleMongooseErrors
} from './controllers/errors-controllers.js'
import apiRouter from './routes/api-router.js'
import decodeIDToken from './authenticateToken.js'

const app = express()


app.use(express.json())

app.use(decodeIDToken)
app.use('/api', apiRouter)

app.use(handleCustomError)
app.use(handleMongooseErrors)
app.use(handle500s)

export default app
