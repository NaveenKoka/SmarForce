
import React, { Component } from 'react';
import {
  Text
} from 'react-native';
import { connect } from 'react-redux';
import LoginScene from './../scenes/Login/loginScene.js';

class loginContainer extends Component {

  render() {
    debugger;
      if (this.props.loginSuccess) {
          return <Text>Login Successfully....</Text>;
      } else {
          return <LoginScene />;
      }
  }
}

const mapStateToProps = state => {
  return {
    loginSuccess: state.login.loginSuccess
  }
}

const returnLoginStatus = loginSuccess => {
  return { type: 'ON_LOGIN', loginSuccess }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (loginSuccess) => {
      //dispatch(returnLoginStatus(loginSuccess))
    }
  }
}

const app = connect(
  mapStateToProps,
  mapDispatchToProps
)(loginContainer)

export default app;
