import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ setUser, user }) => {
  const API_URL = "/api/users";
  const navigate = useNavigate();

  const [error, setError] = useState(false);
  const [loginData, setLoginData] = useState({
    userName: "",
    password: "",
  });
  const { userName, password } = loginData;

  const inputChangeHandler = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_URL + "/login", loginData);
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
        setUser(response.data);
        navigate("/");
      }
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <div className="sub-cont">
      <div className="register-login">
        {error && (
          <h1 className="error-box">Please enter accurate credentials.</h1>
        )}
        <div className="heading">
          <h1>
            <FaSignInAlt /> Login
          </h1>
          <h3>Please login before continuing.</h3>
        </div>
        <div className="form-cont">
          <form onSubmit={formSubmitHandler}>
            <input
              type="text"
              className="form-input"
              value={userName}
              onChange={inputChangeHandler}
              name="userName"
              placeholder="Enter username."
            />
            <input
              type="password"
              className="form-input"
              value={password}
              onChange={inputChangeHandler}
              name="password"
              placeholder="Enter password."
            />
            <button type="submit">Login</button>
            <p>
              Don't having an account? <Link to="/register">Register here</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
