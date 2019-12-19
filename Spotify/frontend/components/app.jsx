import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import TopBarContainer from './top-bar/top_bar_container';
import Home from './home';

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <AuthRoute path="/signup" component={SignupContainer} />
    <AuthRoute path="/login" component={LoginContainer} />
  </Switch>
)