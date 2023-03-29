import server from 'express'
import usersRouter from './users-router'


const apiRouter = server.Router()

apiRouter.use('/users', usersRouter)


export default apiRouter