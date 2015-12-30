'use strict';

var React = require('react-native');

var menuArray = [
  {title: 'Menu Item 0', component: 'component0'},
  {title: 'Menu Item 1', component: 'component1'},
  {title: 'Menu Item 2', component: 'component2'},
  {title: 'Menu Item 3', component: 'component3'},
  {title: 'Menu Item 4', component: 'component4'},
  {title: 'Menu Item 5', component: 'component5'},
];

var {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Platform,
  TouchableHighlight,
  Component,
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  menuColumn: {
    flex: .5,
    width: 200,
    backgroundColor: '#183E63',
  },
  spacerColumn: {
    flex: .5,
    width: 300,
    backgroundColor: '#fffff0'
  },
  menuHeader: {
    paddingTop: 70,
    paddingLeft: 15,
    fontSize: 22,
    color: '#ffffff',
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
});

class MenuPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: 'nil'
    };
  }
  _onPressButton(i){
    var component = menuArray[i].component;
    var title = menuArray[i].title;
    console.log("clicked button: " + title + " " + component);
    //this.props.navigator.push({
    //  title: {menuItems[i].title},
    //  component: {menuItems[i].component},
    //});
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.spacerColumn}>
        </View>
        <View style={styles.menuColumn}>
          <Text style={styles.menuHeader}>Menu Header</Text>
          <TouchableHighlight underlayColor='#999999'
            style={styles.menuTouchable}
            onPress={() => this._onPressButton(0)}>
            <Text style={styles.menuItem}>{menuArray[0].title}</Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor='#999999'
            style={styles.menuTouchable}
            onPress={() => this._onPressButton(1)}>
            <Text style={styles.menuItem}>{menuArray[1].title}</Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor='#999999'
            style={styles.menuTouchable}
            onPress={() => this._onPressButton(2)}>
            <Text style={styles.menuItem}>{menuArray[2].title}</Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor='#999999'
            style={styles.menuTouchable}
            onPress={() => this._onPressButton(3)}>
            <Text style={styles.menuItem}>{menuArray[3].title}</Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor='#999999'
            style={styles.menuTouchable}
            onPress={() => this._onPressButton(4)}>
            <Text style={styles.menuItem}>{menuArray[4].title}</Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor='#999999'
            style={styles.menuTouchable}
            onPress={() => this._onPressButton(5)}>
            <Text style={styles.menuItem}>{menuArray[5].title}</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
module.exports = MenuPage;
