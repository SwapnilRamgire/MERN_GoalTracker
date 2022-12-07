import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { User } from "../models/userModel.js";

const registereUser = async (req, res) => {
  const { userName, password } = req.body;
  if (!userName || !password) {
    return res.status(400).send("Please provide all the details");
  }
  const findUser = await User.findOne({ userName });
  if (findUser) return res.status(400).send("User already exists");

  const saltShit = await bcrypt.genSalt(10);
  const hashedPasswaord = await bcrypt.hash(password, saltShit);

  const user = await User.create({
    userName: userName,
    password: hashedPasswaord,
  });
  if (user) {
    return res.status(201).json({
      _id: user.id,
      userName: user.userName,
      token: generateToken(user._id),
    });
  } else {
    return res.status(400).send("Invalid user data and shit");
  }
};

const loginUser = async (req, res) => {
  const { userName, password } = req.body;
  if (!userName || !password) {
    return res.status(400).send("Please provide all the details");
  }

  const user = await User.findOne({ userName });
  if (user && (await bcrypt.compare(password, user.password))) {
    return res.json({
      _id: user.id,
      userName: user.userName,
      token: generateToken(user._id),
    });
  } else {
    return res.status(400).send("Invalid user data and shit");
  }
};

const getMe = async (req, res) => {
  const { _id, userName } = await User.findById(req.user.id);
  if (_id && userName) {
    return res.json({
      id: _id,
      userName,
    });
  } else {
    return res.status(400).send("Errrrrrrrr");
  }
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT, {
    expiresIn: "30d",
  });
};

export { registereUser, loginUser, getMe };
