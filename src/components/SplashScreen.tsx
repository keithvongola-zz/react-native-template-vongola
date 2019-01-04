import React from 'react';
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { colors, fonts } from '../styles';

export default () => (
  <View style={styles.container}>
    <Text style={styles.text}>
        Splash Screen
    </Text>
  </View>
);

interface IStyles {
  container: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
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
