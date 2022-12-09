import { useState, useEffect } from "react";
import { FaUserAlt } from "react-icons/fa";

const Register = () => {
  const [userData, setUserData] = useState({
    userName: "",
    password: "",
    confirmPassword: "",
  });
  const { userName, password, confirmPassword } = userData;

  const inputChangeHandler = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(userData);
  };
  return (
    <div className="sub-cont">
      <div className="register">
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
