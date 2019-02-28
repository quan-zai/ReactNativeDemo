import React, { Component } from "react";

import {
  Image,
  FlatList, 
  StyleSheet,
  Text,
  View
} from "react-native";

var REQUEST_URL =
  "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

export default class FlatListTest extends Component {
  static navigationOptions = {
    title: 'Basic'
  }

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      refreshing: false,
    };
    // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向会变为空
    // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData(data=[]) {
    fetch(REQUEST_URL)
      .then(response => response.json())
      .then(responseData => {
        // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
        this.setState({
          data: data.concat(responseData.movies.map((movie, index) => {
            movie.id = data.length + index
            return movie;
          })),
          loaded: true
        });
      });
  }

  _header = () => {
    return (
      <Text style={{fontWeight: 'bold', fontSize: 20}}>热门电影</Text>
    );
  }

  _footer = () => {
    return (
      <Text style={{fontSize: 14, alignSelf: 'center'}}>加载更多...</Text>
    );
  }

  createEmptyView = () => {
    return (
      <Text style={{fontSize: 40, alignSelf: 'center'}}>还没有数据哦！</Text>
    )
  }

  loadMore = () => {
    this.fetchData(this.state.data);
  }

  onRefresh = () => {
    this.setState({
       refreshing: true
    })

    this.fetchData();

    setTimeout(() => {
      this.setState({refreshing: false});
    }, 3000);
  }

  randomHeight = () => {
    return Math.random() * 200;
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <FlatList
        data={this.state.data}
        renderItem={this.renderMovie}
        style={styles.list}
        keyExtractor={item => String(item.id)}
        onEndReachedThreshold={0.1}   //上拉10%执行
        onEndReached={this.loadMore}
        ListHeaderComponent={this._header}
        ListFooterComponent={this._footer}
        refreshing={this.state.refreshing}
        onRefresh={this.onRefresh}
      />
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>Loading movies...</Text>
      </View>
    );
  }

  renderMovie = ({ item }) => {
    // { item }是一种“解构”写法，请阅读ES2015语法的相关文档
    // item也是FlatList中固定的参数名，请阅读FlatList的相关文档
    return (
      <View style={{...styles.container, height: this.randomHeight()}}>
        <Image
          source={{ uri: item.posters.thumbnail }}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.year}>{item.year}</Text>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  rightContainer: {
    flex: 1
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: "center"
  },
  year: {
    textAlign: "center"
  },
  thumbnail: {
    width: 53,
    height: 81
  },
  list: {
    paddingTop: 20,
    backgroundColor: "#F5FCFF"
  }
});