import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Card} from 'react-native-paper';
import {connect} from 'react-redux';
class DashboardComponent extends Component {
  constructor(props) {
    super(props);
  }

  UNSAFE_componentWillMount() {
    this.props.navigation.setParams({
      title: this.props.selectedUser.name,
    });
  }

  render() {
    const {selectedUser} = this.props;
    return (
      <View
        style={{
          flex: 1,
          marginLeft: 20,
          marginRight: 20,
          justifyContent: 'center',
        }}>
        <Card style={{paddingTop: 20, paddingBottom: 20, elevation: 3}}>
          <Card.Title title={selectedUser.name} />
          <Card.Content>
            <Text>{`Age: ${selectedUser.age}`}</Text>
            <Text>{`Gender: ${selectedUser.gender}`}</Text>
            <Text>{`Email: ${selectedUser.email}`}</Text>
            <Text>{`Phone No.: ${selectedUser.phoneNo}`}</Text>
          </Card.Content>
        </Card>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  selectedUser: state.flowReducer.selectedUser,
});
export default connect(mapStateToProps)(DashboardComponent);
