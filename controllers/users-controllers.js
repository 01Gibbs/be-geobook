const userModel = require('../model/user.js')

exports.getUsers = async (req, res) => {
  try {
    const userData = await userModel.find()
    return res.status(200).send({ users: userData })
  } catch (error) {
    next(error)
  }
}

exports.getUser = async (req, res, next) => {
  try {
    const userData = await userModel
      .findOne({ firebase_id: req.params.id })
      .setOptions({ sanitizeFilter: true })
    if (!userData) {
      await Promise.reject({ status: 404, msg: 'User Not Found' })
    } else {
      return res.status(200).send({ user: userData })
    }
  } catch (error) {
    next(error)
  }
}

exports.postUser = async (req, res, next) => {
  const auth = req.currentUser
  if (auth) {
    console.log('authorized!')
    try {
      const newUser = new userModel({
        username: req.body.username,
        firebase_id: req.body.firebase_id,
        name: req.body.name
      })
      const dataToSave = await newUser.save()
      return res.status(201).send({ user: dataToSave })
    } catch (error) {
      next(error)
    }
  }
  console.log('not authorised')
  return res.status(403).send({msg:'Not authorized'})
}
