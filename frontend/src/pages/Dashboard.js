import { useEffect, useState } from "react";
import axios from "axios";
import GoalCard from "../components/GoalCard";
import { motion } from "framer-motion";

const Dashboard = ({ goals, setGoals, user }) => {
  const API_URL = "/api/goals";
  const [goalText, setGoalText] = useState({
    text: "",
  });
  useEffect(() => {
    if (user) getGoals();
  }, []);
  const config = {
    headers: {
      authorization: `Bearer ${user.token}`,
    },
  };
  const getGoals = async () => {
    const goalResponse = await axios.get(API_URL, config);
    setGoals(goalResponse.data);
  };

  return (
    <div className="dashboard">
      <div className="dash-header">
        <h1>Dashboard</h1>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              if (goalText.text !== "") {
                const response = await axios.post(API_URL, goalText, config);
                getGoals();
                setGoalText({ text: "" });
              }
            } catch (error) {
              console.log(error);
            }
          }}
        >
          <motion.input
            type="text"
            value={goalText.text}
            placeholder="Add goal."
            onChange={(e) => setGoalText({ text: e.target.value })}
          />
          <button type="submit">Add Goal</button>
        </form>
      </div>
      {goals && (
        <motion.div layout className="goals-cont">
          {goals.map((goal) => (
            <GoalCard
              key={goal._id}
              goal={goal}
              user={user}
              API_URL={API_URL}
              setGoals={setGoals}
            />
          ))}
        </motion.div>
      )}
      {goals && goals.length === 0 && (
        <h1 className="no-goals">You have no goals, start setting goals.</h1>
      )}
    </div>
  );
};

export default Dashboard;
