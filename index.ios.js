'use strict';

var React = require('react-native');
var LandingPage = require('./landingpage');
var MenuPage = require('./menupage');

var {
  AppRegistry,
  StyleSheet,
  Component,
  Text,
  View,
  NavigatorIOS,
  TouchableHighlight
} = React;

var styles = React.StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar: {
    backgroundColor: '#ff0000',
  }
});
var MenuDrawerReact = React.createClass({
  getInitialState: function() {
    return {
      menuShowing: false,
    };
  },
  onRightButtonPress: function() {
    if(!this.state.menuShowing){
      this.setState({menuShowing: true});
      this.refs.nav.push({
        title: '',
        component: MenuPage,
        rightButtonTitle: 'Menu',
        leftButtonTitle:'',
        onRightButtonPress: this.onRightButtonPress,
      })
      return;
     }
    else{
      this.setState({menuShowing: false});
      this.refs.nav.pop()
    }
  },
  render () {
        return (
          <NavigatorIOS ref="nav" style={styles.container} initialRoute={{
              component: LandingPage,
              title: '',
              rightButtonTitle: 'Menu',
              onRightButtonPress: this.onRightButtonPress,
          }}
          barTintColor="#183E63"
          tintColor="#ffffff"
          titleTextColor="#FFFFFF"/>
        );
  }
});


AppRegistry.registerComponent('MenuDrawerReact', () => MenuDrawerReact);
