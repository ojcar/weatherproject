import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import Forecast from './Forecast';

export default class WeatherProject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zip: '',
      forecast: {
        main: 'Clouds',
        description: 'few clouds',
        temp: 45.7
      }
    };
  }

  handleTextChange(evt) {
    console.log('event:',evt)

    let zip = evt.nativeEvent.text;
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + zip + '&units=imperial&APPID=dcb19c90442d039504ec6e404c496200';

    console.log('the url:', url);

    this.setState({
      zip: zip
    });

    fetch(url, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: null
    })
      .then((res) => {
        console.log('raw response', res);
        return res.json();
      })
      .then((res) => {
        console.log('the response', res);

        this.setState({
          forecast: {
            main: res.weather[0].main,
            description: res.weather[0].description,
            temp: res.main.temp
          }
        })
      })
      // .catch((err) => {
      //   console.warn(err);
      // })


  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Your input {this.state.zip}
        </Text>
        <Forecast 
          main={this.state.forecast.main}
          description={this.state.forecast.description}
          temp={this.state.forecast.temp}
        />
        <TextInput
          style={styles.input}
          returnKeyType='go'
          onSubmitEditing={this.handleTextChange.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    fontSize: 20,
    borderWidth: 2,
    height: 40
  },
});
