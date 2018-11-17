import React from 'react'
import {Route, Switch} from 'react-router-dom';

import Home from './Home';
import LogIn from './LogIn';
import SignUp from './SignUp';

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/log-in" component={LogIn}/>
            <Route path="/sign-up" component={SignUp}/>
        </Switch>
    </main>
);

export default Main;