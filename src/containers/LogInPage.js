import React, {Component} from 'react';
import {connect} from 'react-redux';

import LogIn from '../components/LogIn';
import {userActions} from '../actions';

class LogInPage extends Component {

  onLogin = async (email, password) => {
    await this.props.logIn(email, password);
  };

  render() {
    return (
      <LogIn onLogin={this.onLogin}/>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  logIn: userActions.logIn(dispatch)
});

export default connect(null, mapDispatchToProps)(LogInPage);
