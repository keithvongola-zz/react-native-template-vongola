import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fonts, colors } from '../styles';

export default () => (
  <View style={styles.container}>
    <Text style={styles.text}>
        Home Page
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  text: {
    fontSize: fonts.big,
    fontWeight: fonts.bold,
    colors: colors.white,
  },
});
