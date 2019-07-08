import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo';
import { primaryGradientArray } from './src/assets/Colors';
import Main from './src/screens/Main';

export default class App extends Component {
  render() {
    return (
      <LinearGradient colors={primaryGradientArray} style={styles.container}>
        <StatusBar barStyle={"light-content"} />
        <Text style={styles.title}>Open up App.js to start working on your app!</Text>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
  }
});