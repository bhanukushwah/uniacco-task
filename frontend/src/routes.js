import { Switch, Route } from "react-router-dom";
import React from "react";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Welcome from "./components/Welcome";
import RegisterSuccess from "./components/RegisterSuccess";
import LoginSuccess from "./components/LoginSuccess";

function routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/sign-in" component={Login} />
      <Route path="/sign-up" component={Signup} />
      <Route path="/welcome" component={Welcome} />
      <Route path="/register-success" component={RegisterSuccess} />
      <Route path="/login-success" component={LoginSuccess} />
    </Switch>
  );
}

export default routes;
