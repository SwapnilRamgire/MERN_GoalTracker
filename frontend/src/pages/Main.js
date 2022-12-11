import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Register from "./Register";
import Header from "../components/Header";
import { useEffect, useState } from "react";

const Main = () => {
  const [user, setUser] = useState(null);
  const [goals, setGoals] = useState(null);
  useEffect(() => {
    const userFromLocalStorage = JSON.parse(localStorage.getItem("user"));
    if (userFromLocalStorage) setUser(userFromLocalStorage);
  }, []);

  return (
    <div className="main">
      <Router>
        <Header user={user} setUser={setUser} setGoals={setGoals} />
        <Routes>
          <Route
            path="/"
            element={
              user != null ? (
                <Dashboard goals={goals} setGoals={setGoals} user={user} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/login"
            element={
              !user ? (
                <Login setUser={setUser} user={user} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Main;
