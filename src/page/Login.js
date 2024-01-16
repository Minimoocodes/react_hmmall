import React from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  const loginUser = (e) => {
    e.preventDefault();
    setAuthenticate(true);
    navigate("/");
  };

  return (
    <div className="login_wrap">
      <h3>Log in</h3>
      <small>
        Become a member - don't miss out the sales and bonus checks!
      </small>
      <form onSubmit={(e) => loginUser(e)}>
        <div className="input_wrap">
          <label>Email </label>
          <input />
          <label>Password</label>
          <input />
          <button type="submit">Log in</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
