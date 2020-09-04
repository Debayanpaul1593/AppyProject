import React, {Component} from 'react';
import {View, Text} from 'react-native';
class DashboardComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 5.5, backgroundColor: 'red'}}>
          <Text>Dashboard</Text>
        </View>
        <View style={{flex: 0.5, backgroundColor: 'blue'}}></View>
      </View>
    );
  }
}

export default DashboardComponent;
