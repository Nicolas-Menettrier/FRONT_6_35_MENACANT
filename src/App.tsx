import React from "react";
import Login from "./components/Login/LoginForm";
import Register from "./components/RegistrationForm/RegistrationForm";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import { Route, Switch } from "react-router-dom";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgotPassword" component={ForgotPassword} />
      </Switch>
    </div>
  );
};

export default App;
