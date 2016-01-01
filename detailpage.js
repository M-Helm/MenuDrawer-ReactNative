'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableHighlight,
  Component,
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#fffff0',
    top: 69,
    width: 414,
    height: 800,
  },
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
});

var DetailPage = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Here are some details!
        </Text>
      </View>
    );
  }
});

module.exports = DetailPage;
