import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../styles';

export default ({ screenProps: { t } }: any) => (
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
