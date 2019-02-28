import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  NativeModules,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
var CalendarManager = NativeModules.CalendarManager;
console.log('calendarmanager ==== ', CalendarManager)
class CustomButton extends React.Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="#a5a5a5"
        onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}
export default class NativeiOS extends Component {
  static navigationOptions = {
    title: 'NativeiOS'
  }
  render () {
    return (
      <View>
        <Text>封装iOS原生模块</Text>
        <CustomButton text="点击调用原生模块addEvent方法"
            onPress={()=>CalendarManager.addEvent('约会', '上海市 南京路')}
        />
        <CustomButton text="点击调用原生模块test方法"
            onPress={()=>CalendarManager.test('test')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    margin:5,
    backgroundColor: 'white',
    padding: 10,
    borderWidth:1,
    borderColor: '#cdcdcd',
  },
});