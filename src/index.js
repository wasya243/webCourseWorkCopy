import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {PersistGate} from 'redux-persist/integration/react';

// reactstrap requires bootstrap for its elements to be styled
import 'bootstrap/dist/css/bootstrap.min.css';

// semantic-ui-react requires semantic-ui-css for its elements to be styled
import 'semantic-ui-css/semantic.min.css';

import {library} from '@fortawesome/fontawesome-svg-core';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';

import './index.css';
import App from './App';
import createStore from './store';
import {history} from './_helpers/history';

const {store, persistor} = createStore();

library.add(faShoppingCart);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router history={history}>
        <App/>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
