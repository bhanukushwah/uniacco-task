import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { loginUser } from "../apis/apis";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await loginUser({ username, password });
      localStorage.setItem("token", user.token);
      history.push("/login-success");
    } catch (error) {
      setMessage(JSON.stringify(error));
    }
  };

  return (
    <form>
      <h3>Sign In</h3>

      <p className="text-danger">{message}</p>

      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary btn-block"
        onClick={onSubmit}
      >
        Submit
      </button>
      <p className="forgot-password text-right">
        Don't have an <Link to="/sign-up">account?</Link>
      </p>
    </form>
  );
}

export default Login;
