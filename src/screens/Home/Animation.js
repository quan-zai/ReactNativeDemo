import React, {Component} from 'react';
import FadeInView from '../../../components/FadeInView'
import {
  View,
  Text,
  Button
} from 'react-native';
export default class Animation extends Component {
  static navigationOptions = {
    title: 'Animation'
  }
  render () {
    return (
      <View>
        <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
          <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
        </FadeInView>      
      </View>
    )
  }
}
