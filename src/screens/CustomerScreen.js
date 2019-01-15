import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';
export default class CustomerScreen extends Component {
  static navigationOptions = {
    title: 'Customer'
  }
  render () {
    return (
      <View>
        <Text>客户管理</Text>
      </View>
    )
  }
}
