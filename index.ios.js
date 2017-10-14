
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import App from './src/container/app.js';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './src/reducers/index.js'

let store = createStore(reducers)

export default class smartforce extends Component {

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <App />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#f4f5f7'
  }
});

AppRegistry.registerComponent('smartforce', () => smartforce);
