/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import LoginComponent from './components/loginComponent';
import EmployeeListComponent from './components/empListComponent';
import DashboardComponent from './components/dashboardComponent';
class App extends Component {
  render() {
    return (
      <Router>
        <Scene
          key="root"
          headerLayoutPreset={'center'}
          navigationBarStyle={{
            backgroundColor: '#6A1B9A',
            color: '#fff',
          }}
          titleStyle={{color: '#FFF'}}>
          <Scene
            key="login"
            component={LoginComponent}
            initial
            title={'Login'}
          />
          <Scene
            key="empList"
            component={EmployeeListComponent}
            title={'Employee List'}
          />
          <Scene
            key="dashboard"
            component={DashboardComponent}
            title={'Dashboard'}
          />
        </Scene>
      </Router>
    );
  }
}

export default App;
