import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
// reactstrap requires bootstrap for its elements to be styled
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
