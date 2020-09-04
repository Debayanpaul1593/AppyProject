import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {updateUsername, updatePassword} from '../actions/actionDefs';
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
            value={this.props.username}
            style={{margin: 20, marginTop: 50}}
            onChangeText={text => this.props.updateUsername(text)}
          />
          <TextInput
            mode="outlined"
            label="Password"
            value={this.props.password}
            style={{margin: 20}}
            onChangeText={text => this.props.updatePassword(text)}
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

const mapStateToProps = state => ({
  username: state.flowReducer.username,
  password: state.flowReducer.password,
});

const mapDispatchToProps = dispatch => ({
  updateUsername: username => dispatch(updateUsername(username)),
  updatePassword: password => dispatch(updatePassword(password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginComponent);
