'use strict';

var React = require('react-native');
var MenuPage = require('./menupage');
var LandingPage = require('./landingpage');

var {
  AppRegistry,
  StyleSheet,
  Component,
  Text,
  View,
  NavigatorIOS,
  TouchableHighlight,
  LayoutAnimation,
  Animated,
} = React;

var styles = React.StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar: {
    height: 68,
    backgroundColor: '#183E63',
    opacity: .75,
  },
  navShadow: {
    height: .5,
    backgroundColor: '#000000',
    opacity: 1,
  },
  title: {
    top: 30,
    fontSize: 25,
    color: '#000000',
    alignSelf: 'center',
  },
  menuButton: {
    position: 'absolute',
    height: 30,
    top: 30,
    right: 10,
  },
  menuText: {
    fontSize: 20,
    color: '#ffffff',
  },
  menuContainer:{
    flex: 1,
    backgroundColor: '#183E63',
  },
  menuShadow:{
    backgroundColor: '#000000',
  }
});

var NavigationParent = React.createClass({
  getInitialState: function() {
    return {
      menuShowing: false,
      menuWidth: 0,
    };
  },
  componentWillMount() {
    //component setup stuff if any
  },
  _onMenuPress() {
  //animates the menu in and out of the view
  LayoutAnimation.spring();
  if(this.state.menuShowing){
    this.setState({menuWidth: 0, menuShowing: false});
    return;
  }
  this.setState({menuWidth: 200, menuShowing: true});
  },
  render () {
        return (
          <View style={styles.container}>
            <View style={styles.navBar}>
              <Text style={styles.title}></Text>
              <TouchableHighlight underlayColor='#fffff0'
                onPress={this._onMenuPress}
                style={styles.menuButton}>
                <Text style={styles.menuText}>Menu</Text>
              </TouchableHighlight>
            </View>
            <View style={styles.navShadow}></View>
            <View style={[styles.menuContainer, {width: this.state.menuWidth}]}>
              <MenuPage/>
            </View>
            <LandingPage/>
          </View>
        );
      }
});

module.exports = NavigationParent;
