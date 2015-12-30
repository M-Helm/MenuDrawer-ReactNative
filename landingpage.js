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
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffff0',
  },
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
});

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: 'nil'
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Landing Page!
        </Text>
      </View>
    );
  }
}

module.exports = LandingPage;
