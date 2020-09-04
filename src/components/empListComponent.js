import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import {Actions} from 'react-native-router-flux';
class EmployeeListComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 5.5, backgroundColor: 'red'}}>
          <Text>Employee List</Text>
        </View>
        <View
          style={{
            flex: 0.5,
            backgroundColor: 'blue',
            justifyContent: 'center',
          }}>
          <Button
            mode="contained"
            style={{marginLeft: 20, marginRight: 20}}
            onPress={() => Actions.dashboard()}>
            Dashboard
          </Button>
        </View>
      </View>
    );
  }
}

export default EmployeeListComponent;
