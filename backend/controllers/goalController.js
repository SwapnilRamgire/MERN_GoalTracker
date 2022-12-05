const getGoal = (req, res) => {
  res.send("Get Goals");
};
const postGoal = (req, res) => {
  if (!req.body.text) {
    res.status(400).json({ message: "Please add some texts" });
  }
  let obj = req.body;
  res.send(obj);
};
const putGoal = (req, res) => {
  res.send(`update goal ${req.params.id}`);
};
const deleteGoals = (req, res) => {
  res.send(`delete goal ${req.params.id}`);
};

export { getGoal, postGoal, putGoal, deleteGoals };
