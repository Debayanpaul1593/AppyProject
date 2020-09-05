import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {
  updateUsername,
  updatePassword,
  updateUsernameError,
  updatePasswordError,
} from '../actions/actionDefs';
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
            style={{margin: 20, marginTop: 50, marginBottom: 5}}
            onChangeText={text => {
              this.props.updateUsernameError('');
              this.props.updateUsername(text);
            }}
          />
          {this.props.usernameError !== '' && (
            <Text style={{color: 'red', marginLeft: 20}}>
              {this.props.usernameError}
            </Text>
          )}
          <TextInput
            mode="outlined"
            label="Password"
            value={this.props.password}
            style={{margin: 20, marginBottom: 5}}
            secureTextEntry={true}
            onChangeText={text => {
              this.props.updatePasswordError('');
              this.props.updatePassword(text);
            }}
          />
          {this.props.passwordError !== '' && (
            <Text style={{color: 'red', marginLeft: 20}}>
              {this.props.passwordError}
            </Text>
          )}
        </View>
        <View
          style={{
            flex: 0.5,
            justifyContent: 'center',
          }}>
          <Button
            mode="contained"
            style={{
              marginLeft: 20,
              marginRight: 20,
              backgroundColor: '#6A1B9A',
            }}
            onPress={() => {
              this.validateCreds();
            }}>
            Login
          </Button>
        </View>
      </View>
    );
  }

  validateCreds = () => {
    if (this.props.username === '') {
      this.props.updateUsernameError('Please enter username!');
      return;
    }

    if (this.props.password === '') {
      this.props.updatePasswordError('Please enter password!');
      return;
    }
    if (this.props.username !== 'hruday@gmail.com') {
      this.props.updateUsernameError('Invalid username!');
      return;
    }

    if (this.props.password !== 'hruday123') {
      this.props.updatePasswordError('Invalid password!');
      return;
    }

    Actions.empList();
  };
}

const mapStateToProps = state => ({
  username: state.flowReducer.username,
  password: state.flowReducer.password,
  usernameError: state.flowReducer.usernameError,
  passwordError: state.flowReducer.passwordError,
});

const mapDispatchToProps = dispatch => ({
  updateUsername: username => dispatch(updateUsername(username)),
  updatePassword: password => dispatch(updatePassword(password)),
  updateUsernameError: err => dispatch(updateUsernameError(err)),
  updatePasswordError: err => dispatch(updatePasswordError(err)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginComponent);
