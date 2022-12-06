import { Goal } from "../models/goalModel.js";
import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;

const getGoal = async (req, res) => {
  const goals = await Goal.find();
  res.send(goals);
};

const postGoal = async (req, res) => {
  if (!req.body.text) {
    return res.status(400).json({ message: "Please add some texts" });
  }
  const goal = await Goal.create({
    text: req.body.text,
  });
  res.send(goal);
};

const putGoal = async (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedGoal)
      return res.status(404).send(`Goal with id ${req.params.id} not found`);
    res.send(updatedGoal);
  } else return res.status(400).send(`Provide proper id`);
};

const deleteGoals = async (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    const deletedGoal = await Goal.findByIdAndDelete(req.params.id);
    if (!deletedGoal)
      return res.status(404).send(`Goal with id ${req.params.id} not found`);
    res.send(deletedGoal);
  } else return res.status(400).send(`Provide proper id`);
};

export { getGoal, postGoal, putGoal, deleteGoals };
