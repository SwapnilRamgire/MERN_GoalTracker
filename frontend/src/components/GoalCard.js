import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import { motion } from "framer-motion";

const GoalCard = ({ goal, user, API_URL, setGoals }) => {
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
    <motion.div
      layout
      initial={{ scaleX: 0, originX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
      className="goal-card"
    >
      <h1>{goal.text}</h1>
      <div className="button-content">
        <p>{new Date(goal.createdAt).toDateString()}</p>
        <button
          onClick={async () => {
            const res = await axios.delete(API_URL + "/" + goal._id, config);
            getGoals();
          }}
        >
          <FaTrashAlt />
        </button>
      </div>
    </motion.div>
  );
};

export default GoalCard;
