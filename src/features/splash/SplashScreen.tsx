import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../styles';

export default () => (
  <View style={styles.container}>
    <Text style={styles.text}>
        Splash Screen
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  text: {
    color: colors.primary,
    fontSize: fonts.big,
    fontWeight: fonts.bold,
  },
});
