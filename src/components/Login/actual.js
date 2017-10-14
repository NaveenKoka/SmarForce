import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  WebView
} from 'react-native';
import config from './config.js';
import queryString from 'query-string';

export default class actual extends Component{

  loginIfAuthenticated = (state, onLogin) => {
    const callbackUrl = config.callbackUrl;
    const { url } = state;
    if(!url.startsWith(callbackUrl)){
      return null;
    }
    const params = queryString.parse(url.split(callbackUrl)[1]);
    onLogin(true);
  }

  render(){
    const {
      clientId,
      callbackUrl,
      salesforceAuthorizeUrl
    } = config;

    const {
      onLogin
    } = this.props

    const url = "https://login.salesforce.com"
          + salesforceAuthorizeUrl
          + "&redirect_uri=" + callbackUrl
          + "&client_id=" + clientId
          + "&display=touch"
    return (
      <WebView
          source = {{uri: url}}
          style = {{marginTop: 20}}
          onNavigationStateChange = {(state) => { return this.loginIfAuthenticated(state, onLogin)}}/>
    );

  }
}

AppRegistry.registerComponent('LoginComponent', () => actual);
