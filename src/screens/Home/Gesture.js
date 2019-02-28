import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  PanResponder,
  StyleSheet
} from 'react-native';
export default class Gesture extends Component {
  static navigationOptions = {
    title: 'Gesture'
  }

  constructor(props) {
    super(props);
    this.state = {
        bg: 'white',
        pan_bg: 'white',
        top: 300,
        left: 0,
    }
    this._top = 0
    this._left = 0
    this._gestureHandles = {
        onStartShouldSetResponder: () => true,
        onMoveShouldSetResponder: () => true,
        onResponderGrant: () => { this.setState({bg: 'red'}) },
        onResponderMove: () => { console.log('一直在按压') },
        onResponderRelease: () => { this.setState({bg: 'white'}) }
    }

    this._panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: ()=> true,
        onPanResponderGrant: ()=>{
          this._top = this.state.top
          this._left = this.state.left
          this.setState({ pan_bg: 'red' })
        },
        onPanResponderMove: (e,gs)=>{
          console.log(gs.dx + ' ' + gs.dy)
          this.setState({
            top: this._top + gs.dy,
            left: this._left + gs.dx
          })
        },
        onPanResponderRelease: (e, gs)=>{
          this.setState({
            pan_bg: 'white',
            top: this._top + gs.dy,
            left: this._left + gs.dx
        })}
      })
  }

  onPress = () => {
    alert('on press')
  }

  onPressIn = () => {
    alert('on press in')
  }

  onPressOut = () => {
    alert('on press out')
  }

  onLongPress = () => {
    alert('on long press')
  }

  render () {
    const { bg, top, left, pan_bg } = this.state;
    return (
      <View style={styles.container}>
          <TouchableHighlight onPress={() => this.onPress()}
                            onPressIn={() => this.onPressIn()}
                            onPressOut={() => this.onPressOut()}
                            onLongPress={() => this.onLongPress()}
          >
            <Text style={styles.button}>点击</Text>
          </TouchableHighlight>
          <View {...this._gestureHandles}
                style={[styles.gestureView, {
                    backgroundColor: bg
                }]}
          >
             <Text>我只是一个普通的View</Text>
         </View>

         <View {...this._panResponder.panHandlers}
               style={[styles.panView, {
                   backgroundColor: pan_bg,
                   top: top,
                   left: left
               }]}
         >
            <Text>拖动</Text>
         </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
    container: {
        margin: 20,
        flex: 1,
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#DDDDDD',
        padding: 10,
    },
    gestureView: {
        padding: 10,
        marginTop: 50,
    },
    panView: {
        position: 'absolute',
        width: 200,
        height: 200,
        borderWidth: 1,
        borderColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})