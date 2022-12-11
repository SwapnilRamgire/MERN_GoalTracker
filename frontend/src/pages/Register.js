import { useState, useEffect } from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const API_URL = "/api/users";
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    userName: "",
    password: "",
    confirmPassword: "",
  });
  const [boxMessage, setBoxMessage] = useState("");
  const [boxClass, setBoxClass] = useState("");
  const { userName, password, confirmPassword } = userData;

  const inputChangeHandler = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    let response;
    if (password !== confirmPassword) {
      setBoxMessage("Passwords didn't matched.");
      setBoxClass("error-box");
      return;
    }
    try {
      response = await axios.post(API_URL, userData);
      setBoxClass("success-box");
      setBoxMessage(
        "Account created successfully! redirecting to login page in 5s"
      );
      setTimeout(() => {
        navigate("/login");
      }, 5000);
    } catch (error) {
      setBoxClass("error-box");
      setBoxMessage(error.response.data);
      console.log(error);
    }
  };
  return (
    <div className="sub-cont">
      <div className="register-login">
        {boxMessage !== "" && <h1 className={boxClass}>{boxMessage}</h1>}
        <div className="heading">
          <h1>
            <FaUserAlt /> Register
          </h1>
          <h3>Please register to start setting goals.</h3>
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
            <input
              type="password"
              className="form-input"
              value={confirmPassword}
              onChange={inputChangeHandler}
              name="confirmPassword"
              placeholder="Confirm password."
            />
            <button type="submit">Sign Up</button>
            <p>
              Already having an account? <Link to="/login">Login here</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
