import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fonts, colors } from '../styles';

export default ({ screenProps: { t } }) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      {t('home:home__title')}
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
    color: colors.white,
  },
});
