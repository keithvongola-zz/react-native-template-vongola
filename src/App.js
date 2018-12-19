import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import HomePage from './pages/Home';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HomePage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
