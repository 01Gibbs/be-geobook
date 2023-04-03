const usersRouter = require('./users-router.js')
const booksRouter = require('./books-router.js')

const apiRouter = require('express').Router()

apiRouter.use('/users', usersRouter)

apiRouter.use('/books', booksRouter)

module.exports = apiRouter
