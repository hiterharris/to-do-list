import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

const Header = ({ title }) => (
    <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{title.toUpperCase()}</Text>
    </View>
);

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 40,
    },
    headerText: {
        color: 'white',
        fontSize: 36,
        fontWeight: '500'
    },
});

export default Header;