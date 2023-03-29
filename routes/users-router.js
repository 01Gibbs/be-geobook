import server from 'express'
import { getUsers } from '../controllers/users-controllers'

const usersRouter = server.Router()

usersRouter.get('/', getUsers)


export default usersRouter