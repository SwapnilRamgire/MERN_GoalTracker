import { Goal } from "../models/goalModel.js";

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
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!updatedGoal)
    return res.status(404).send(`Goal with id ${req.params.id} not found`);
  res.send(updatedGoal);
};

const deleteGoals = async (req, res) => {
  const deletedGoal = await Goal.findOneAndDelete(req.params.id);
  if (!deletedGoal)
    return res.status(404).send(`Goal with id ${req.params.id} not found`);
  res.send(deletedGoal);
};

export { getGoal, postGoal, putGoal, deleteGoals };
