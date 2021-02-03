import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { registerUser } from "../apis/apis";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await registerUser({ username, password });
      history.push("/register-success", user);
    } catch (error) {
      setMessage(JSON.stringify(error));
    }
  };

  return (
    <form>
      <h3>Sign Up</h3>
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
        Sign Up
      </button>
      <p className="forgot-password text-right">
        Already registered
        <Link to="/sign-in"> sign in?</Link>
      </p>
    </form>
  );
}

export default Signup;
