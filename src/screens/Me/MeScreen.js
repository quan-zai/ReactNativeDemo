import React, {Component} from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
export default class MeScreen extends Component {
  static navigationOptions = {
    title: 'Me'
  }
  render () {
    return (
      <View>
        <Text>我的</Text>
      </View>
    )
  }
}
