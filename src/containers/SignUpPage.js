import React, {Component} from 'react';
import {connect} from 'react-redux';

import SignUp from '../components/SignUp';
import {userActions} from '../actions';

class SignUpPage extends Component {

  onSignUp = async (userInfo) => {
    await this.props.signUp(userInfo);
  };

  render() {
    return (
      <SignUp onSignUp={this.onSignUp}/>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUp: userActions.signUp(dispatch)
});

export default connect(null, mapDispatchToProps)(SignUpPage);
