import React from 'react'
import {Route, Switch} from 'react-router-dom';

import Home from '../containers/Home';
import LogInPage from '../containers/LogInPage';
import SignUpPage from '../containers/SignUpPage';
// import Category from "./Category";

const Main = (props) => (
  <main>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/log-in" component={LogInPage}/>
      <Route path="/sign-up" component={SignUpPage}/>
    </Switch>
  </main>
);

export default Main;
