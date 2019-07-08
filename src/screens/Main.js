import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo';
import { primaryGradientArray } from '../assets/Colors';
import { gradientStart, gradientEnd } from '../assets/Colors';
import Header from '../components/Header';
import Input from '../components/Input';

const headerTitle = "To Do List";

export default class Main extends Component {
    state = {
        inputValue: ''
    };
    newInputValue = value => {
        this.setState({
            inputValue: value
        });
    };
    render() {
        const { inputValue } = this.state;
        return (
            <LinearGradient
                colors={primaryGradientArray}
                style={styles.container}
            >
                <StatusBar barStyle="light-content" />
                <View style={styles.header}>
                    <Header title={headerTitle} />
                </View>
                <View style={styles.inputContainer}>
                    <Input inputValue={inputValue} onChangeText={this.newInputValue} />
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        alignItems: 'center',
    },
    inputContainer: {
        marginTop: 40,
        paddingLeft: 15
    }
});
