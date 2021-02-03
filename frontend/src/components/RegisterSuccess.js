import React from "react";
import { Link } from "react-router-dom";

function RegisterSuccess(props) {
  let username = props.location.state.username;
  return (
    <div>
      Hey {username}, you have successfully registered please{" "}
      <Link to="sign-in">login!</Link>
    </div>
  );
}

export default RegisterSuccess;
