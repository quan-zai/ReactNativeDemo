import React, {Component} from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
export default class SearchBar extends Component {
  static navigationOptions = {
    title: 'SearchBar'
  }
  render () {
    return (
      <View>
        <Text>SearchBar</Text>
      </View>
    )
  }
}
