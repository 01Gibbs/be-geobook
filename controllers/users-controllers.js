import userModel from "../model/user.js";

export const getUsers = async (req, res) => {
  try {
    const userData = await userModel.find();
    return res.status(200).send({ users: userData });
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const userData = await userModel
      .findOne({firebase_id: req.params.id})
      .setOptions({ sanitizeFilter: true });
    if (!userData) {
      await Promise.reject({ status: 404, msg: "User Not Found" });
    } else {
      return res.status(200).send({ user: userData });
    }
  } catch (error) {
    next(error);
  }
};

export const postUser = async (req, res, next) => {
  try {
    const newUser = new userModel({
      username: req.body.username,
      firebase_id: req.body.firebase_id,
      name: req.body.name,
    });
    const dataToSave = await newUser.save();
    return res.status(201).send({ user: dataToSave });
  } catch (error) {
    next(error);
  }
};
