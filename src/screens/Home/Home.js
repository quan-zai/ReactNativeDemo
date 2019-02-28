import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  FlatList
} from 'react-native';
export default class Home extends Component {
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

  constructor(props) {
    super(props);
    this.state = {
      data: [
        { title: 'Basic', type: 'Basic' },
        { title: 'PlatformCode', type: 'PlatformCode' },
        { title: 'Gesture',  type: 'Gesture' },
        { title: 'Animation',  type: 'Animation' },
        { title: 'NativeiOS',  type: 'NativeiOS' },
        { title: 'NativeAndroid',  type: 'NativeAndroid' },
        { title: 'FlatListTest',  type: 'FlatListTest' },
      ]
    }
  }

  renderItem = ({ item }) => {
    return (
      <View>
        <Button title={item.title} onPress={() => this.props.navigation.navigate(item.title)}/> 
      </View>
    )
  }
  render () {
    const { data } = this.state
    return (
      <View>
        <FlatList data={data}
                  renderItem={this.renderItem}
                  keyExtractor={(item, index) => String(index)}
        />
      </View>
    )
  }
}
