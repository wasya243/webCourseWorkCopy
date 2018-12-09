import React, {Component} from 'react';
import {connect} from 'react-redux';

import './App.css';
import {history} from './_helpers';
import Header from './containers/Header';
import Footer from './components/Footer';
import Main from './components/Main'
import {alertActions} from "./actions";

class App extends Component {

  constructor(props) {
    super(props);
    const {dispatch} = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    })
  }

  render() {
    const {alert} = this.props;
    return (
      <div>
        <div>
          {
            alert.message &&
            <div className={`alert ${alert.type}`}>{alert.message}</div>
          }
        </div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {alert} = state;
  return {
    alert
  };
};

export default connect(mapStateToProps)(App);
