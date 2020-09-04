/**
 * @format
 */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import store from './src/store/store';
const AppyProject = () => (
  <Provider store={store}>
    <PaperProvider>
      <App />
    </PaperProvider>
  </Provider>
);
AppRegistry.registerComponent(appName, () => AppyProject);
