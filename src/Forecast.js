import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Forecast extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.bigText}>
          {this.props.main}
        </Text>
        <Text style={styles.mainText}>
          Current conditions: {this.props.description}
        </Text>
        <Text style={styles.mainText}>
          {this.props.temp}°F
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bigText: {
    flex: 2,
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
    color: '#000000'
  },
  mainText: {
    flex: 1,
    fontSize: 14,
    textAlign: 'center',
    color: '#000000'
  }
});