import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

// reactstrap requires bootstrap for its elements to be styled
import 'bootstrap/dist/css/bootstrap.min.css';

// semantic-ui-react requires semantic-ui-css for its elements to be styled
import 'semantic-ui-css/semantic.min.css';

import './index.css';
import App from './App';
import createStore from './store';

const store = createStore();

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
