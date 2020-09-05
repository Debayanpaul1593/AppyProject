import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Button, Card} from 'react-native-paper';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/actionDefs';

class EmployeeListComponent extends Component {
  constructor() {
    super();
  }

  renderEmpItem = item => {
    return (
      <Card
        style={{marginTop: 10, marginLeft: 20, marginRight: 20, elevation: 3}}
        onPress={() => {
          this.props.selectUser(item);
          Actions.dashboard();
        }}>
        <Card.Title title={item.name} />
        <Card.Content>
          <Text>{`Age: ${item.age}`}</Text>
          <Text>{`Gender: ${item.gender}`}</Text>
          <Text>{`Email: ${item.email}`}</Text>
          <Text>{`Phone No.: ${item.phoneNo}`}</Text>
        </Card.Content>
      </Card>
    );
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          style={{paddingBottom: 50}}
          data={this.props.mUsers}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return this.renderEmpItem(item);
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  mUsers: state.flowReducer.mUsers,
});

const mapDispatchToProps = dispatch => ({
  selectUser: user => dispatch(selectUser(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EmployeeListComponent);
