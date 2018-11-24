import React from 'react'
import {Route, Switch} from 'react-router-dom';

import Home from '../containers/Home';
import LogInPage from '../containers/LogInPage';
import SignUp from './SignUp';

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/log-in" component={LogInPage}/>
            <Route path="/sign-up" component={SignUp}/>
        </Switch>
    </main>
);

export default Main;