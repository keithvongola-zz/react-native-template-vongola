import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import HomePage from './pages/Home';
import LaunchGate from './LaunchGate';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LaunchGate>
          <HomePage />
        </LaunchGate>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
