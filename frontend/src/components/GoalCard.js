const GoalCard = ({ goal }) => {
  return (
    <div className="goal-card">
      <p>{goal.text}</p>
    </div>
  );
};

export default GoalCard;
