import userModel from '../model/user.js'

export const getUsers = async (req, res) => {
  try {
    const userData = await userModel.find()
    return res.status(200).send({ users: userData })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
