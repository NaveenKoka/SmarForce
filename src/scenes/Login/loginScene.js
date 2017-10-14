import { connect } from 'react-redux';
import LoginComponent from './../../components/Login/actual.js';

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
      dispatch(returnLoginStatus(loginSuccess))
    }
  }
}

const loginScene = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent)

export default loginScene
