import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  FlatList
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

  constructor(props) {
    super(props);
    this.state = {
      data: [
        { title: 'SearchBar' },
        { title: '1' },
        { title: '2' },
        { title: '3' },
        { title: '4' },
        { title: '5' },
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
                  keyExtractor={(item, index) => index}
        />
      </View>
    )
  }
}
