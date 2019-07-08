import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Header from '../components/Header';

const headerTitle = "To Do List";

export default class Main extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header title={headerTitle} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
});
