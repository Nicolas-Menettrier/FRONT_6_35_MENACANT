import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./components/Login/LoginForm";
import Register from "./components/RegistrationForm/RegistrationForm";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";

import ProfilePage from "./containers/ProfilePage";
import HomePage from "./containers/HomePage";
import PostView from "./containers/PostView";

import "./App.less";

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgotPassword" component={ForgotPassword} />
        <Route path="/homePage" component={HomePage} />
        <Route path="/post/:id" component={PostView} />
        <Route path="/profile" component={(): JSX.Element => <ProfilePage />} />
      </Switch>
    </div>
  );
};

export default App;
