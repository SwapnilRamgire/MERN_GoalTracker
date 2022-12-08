import { Goal } from "../models/goalModel.js";
import { User } from "../models/userModel.js";
import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;

const getGoal = async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });
  res.send(goals);
};

const postGoal = async (req, res) => {
  if (!req.body.text) {
    return res.status(400).json({ message: "Please add some texts" });
  }
  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  });
  res.send(goal);
};

const putGoal = async (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    const goal = await Goal.findById(req.params.id);
    if (!goal)
      return res.status(404).send(`Goal with id ${req.params.id} not found`);

    const user = await User.findById(req.user.id);
    if (!user) return res.status(401).send("User not found");
    if (goal.user != user.id)
      return res.status(401).send("Not authorized bitch");

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.send(updatedGoal);
  } else return res.status(400).send(`Provide proper id`);
};

const deleteGoals = async (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    const goal = await Goal.findById(req.params.id);
    if (!goal)
      return res.status(404).send(`Goal with id ${req.params.id} not found`);

    const user = await User.findById(req.user.id);
    if (!user) return res.status(401).send("User not found");
    if (goal.user != user.id)
      return res.status(401).send("Not authorized bitch");

    const deletedGoal = await Goal.findByIdAndDelete(req.params.id);
    res.send(deletedGoal);
  } else return res.status(400).send(`Provide proper id`);
};

export { getGoal, postGoal, putGoal, deleteGoals };
