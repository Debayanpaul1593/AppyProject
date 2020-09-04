import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {Actions} from 'react-native-router-flux';
class LoginComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 5.5}}>
          <TextInput
            mode="outlined"
            label="Username"
            value={'text'}
            style={{margin: 20, marginTop: 50}}
          />
          <TextInput
            mode="outlined"
            label="Password"
            value={'text'}
            style={{margin: 20}}
          />
        </View>
        <View
          style={{
            flex: 0.5,
            justifyContent: 'center',
          }}>
          <Button
            mode="contained"
            style={{marginLeft: 20, marginRight: 20}}
            onPress={() => Actions.empList()}>
            Login
          </Button>
        </View>
      </View>
    );
  }
}

export default LoginComponent;
