
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'views/containers/home/';
import Blocks from 'views/containers/home/blocks';
import Details from 'views/containers/home/details';
import VerifyEmail from 'views/containers/Pages/verify-email';
import Register from 'views/containers/Pages/register';
import Login from 'views/containers/login/index';

export default function Dashboard() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/blocks" component={Blocks} />
        <Route path="/details" component={Details} />
        <Route path="/verify-email" component={VerifyEmail} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </div>
  );
}
