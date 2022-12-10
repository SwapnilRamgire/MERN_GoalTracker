import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";

const Login = () => {
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

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(loginData);
  };
  return (
    <div className="sub-cont">
      <div className="register-login">
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
