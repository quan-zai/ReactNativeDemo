import React, {Component} from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
  }
  render () {
    return (
      <View>
        <Text>首页</Text>
        <Button title="Go to me" onPress={() => this.props.navigation.navigate('Me')}></Button>
      </View>
    )
  }
}
