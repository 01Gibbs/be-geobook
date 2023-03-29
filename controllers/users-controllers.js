import userModel from "../model/user.js";
import { sanitizeFilter } from "mongoose";

export const getUsers = async (req, res) => {
  try {
    const userData = await userModel.find();
    return res.status(200).send({ users: userData });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const userData = await userModel
      .findOne({ username: req.params.username })
      .setOptions({ sanitizeFilter: true });
    return res.status(200).send({ user: userData });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
