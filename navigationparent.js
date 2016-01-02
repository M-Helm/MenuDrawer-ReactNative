'use strict';

var React = require('react-native');
var LandingPage = require('./landingpage');
var DetailPage = require('./detailpage');

var {
  AppRegistry,
  StyleSheet,
  Component,
  Text,
  Image,
  View,
  TouchableHighlight,
  LayoutAnimation,
  ListView,
} = React;

var menuArray = [
  {title: 'Landing Detail', component: <LandingPage/>},
  {title: 'Detail Page', component: <DetailPage/>},
];

var NavigationParent = React.createClass({
  getInitialState() {
    //Assign the initial state of the app and setup the menu options as a
    //listview data source.
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      menuShowing: false,
      menuWidth: 0,
      currentPage: <LandingPage/>,
      dataSource: ds.cloneWithRows(menuArray),
    };
  },
  componentWillMount() {

  },
  _onMenuPress() {
  // When user presses the menu toggle this animates
  // the menu in and out of the view
    LayoutAnimation.spring();
    if(this.state.menuShowing){
      this.setState({menuWidth: 0, menuShowing: false});
      return;
    }
    this.setState({menuWidth: 200, menuShowing: true});
  },
  _onMenuItemPress(view){
    // When the user selects a menu item this switch will
    // close the menu drawer and change the view
    LayoutAnimation.spring();
    this.setState({menuWidth:0, menuShowing: false, currentPage: view});
  },
  _renderRow(rowData, sectionID, rowID) {
    return (
      <TouchableHighlight underlayColor='#999999'
        style={styles.menuTouchable}
        onPress={() => this._onMenuItemPress(rowData.component)}>
         <Text style={styles.menuItem}>{rowData.title}</Text>
      </TouchableHighlight>
    );
  },
  render () {
        return (
          <View style={styles.container}>
            <View style={styles.navBar}>
              <Text style={styles.title}></Text>
              <TouchableHighlight underlayColor='#183E63'
                onPress={this._onMenuPress}
                style={styles.menuButton}>
                <Image source={require('./ic_burger_44px.png')}
                  style={styles.icon}/>
              </TouchableHighlight>
            </View>
            <View style={styles.navShadow}></View>
            {this.state.currentPage}
            <View style={[styles.menuContainer, {width: this.state.menuWidth}]}>
              <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
              />
            </View>
          </View>
        );
      }
});

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
  menuContainer:{
    flex: 1,
    backgroundColor: '#183E63',
  },
  menuShadow:{
    backgroundColor: '#000000',
  },
  menuColumn: {
    flex: .5,
    backgroundColor: '#183E63',
    opacity: .75,
  },
  menuTouchable:{
    paddingTop: 10,
    paddingBottom: 10,
  },
  menuItem: {
    paddingLeft: 30,
    fontSize: 20,
    color: '#ffffff',
  },
  icon: {
    top:-14,
    width:55,
    height:55,
  },
});

module.exports = NavigationParent;
