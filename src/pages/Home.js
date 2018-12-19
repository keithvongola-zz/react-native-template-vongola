import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fonts } from '../styles';

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
    },
    text : {
        fontSize: fonts.big,
    },
})