'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Platform,
  TouchableHighlight,
  Component,
  NavigatorIOS,
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

var LandingPage = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Landing Page!
        </Text>
      </View>
    );
  }
});

module.exports = LandingPage;
