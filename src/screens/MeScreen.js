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
        <Button
          title="Go to Me... again"
          onPress={() => this.props.navigation.push('Me')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    )
  }
}
