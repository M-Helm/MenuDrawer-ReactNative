'use strict';

var React = require('react-native');
var NavigationParent = require('./navigationparent');


var {
  AppRegistry,
  StyleSheet,
  Component,
  Text,
  View,
  TouchableHighlight
} = React;

var styles = React.StyleSheet.create({
  container: {
    flex: 1,
  },
});
var MenuDrawerReact = React.createClass({

  render () {
        return (
          <View style={styles.container}>
            <NavigationParent></NavigationParent>
          </View>
        );
      }
});

AppRegistry.registerComponent('MenuDrawerReact', () => MenuDrawerReact);
