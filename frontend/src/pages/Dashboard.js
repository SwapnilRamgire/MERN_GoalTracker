import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = ({ goals, setGoals, user }) => {
  const API_URL = "/api/goals";
  useEffect(() => {
    if (user) getGoals();
  }, []);
  const getGoals = async () => {
    const config = {
      headers: {
        authorization: `Bearer ${user.token}`,
      },
    };
    const goalResponse = await axios.get(API_URL, config);
    setGoals(goalResponse.data);
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
