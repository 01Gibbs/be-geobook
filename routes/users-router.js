import server from 'express'
import { getUser, getUsers, postUser } from '../controllers/users-controllers'

const usersRouter = server.Router()

usersRouter.route('/').get(getUsers).post(postUser)

//Get by Id Method
usersRouter.route('/:id').get(getUser)

export default usersRouter
