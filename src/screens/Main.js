import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    ScrollView,
    AsyncStorage,
} from 'react-native';
import { LinearGradient } from 'expo';
import { primaryGradientArray } from '../assets/Colors';
import { gradientStart, gradientEnd } from '../assets/Colors';
import uuid from 'uuid/v1';
import Header from '../components/Header';
import Input from '../components/Input';
import List from '../components/List';

const headerTitle = "To Do List";

export default class Main extends Component {
    state = {
        inputValue: '',
        loadingItems: false,
        allItems: {},
        isCompleted: false,
    };
    componentDidMount = () => {
        this.loadingItems();
    };
    newInputValue = value => {
        this.setState({
            inputValue: value,
        });
    };
    loadingItems = async () => {
        try {
            const allItems = await AsyncStorage.getItem('ToDos');
            this.setState({
                loadingItems: true,
                allItems: JSON.parse(allItems) || {},
            });
        } catch (err) {
            console.log(err);
        }
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
                <View style={styles.list}>
                    <ScrollView contentContainerStyle={styles.scrollableList}>
                        {Object.values(allItems)
                            .reverse()
                            .map(item => (
                                <List
                                    key={item.id}
                                    {...item}
                                    deleteItem={this.deleteItem}
                                    completeItem={this.completeItem}
                                    incompleteItem={this.incompleteItem}
                                />
                            ))
                        }
                    </ScrollView>
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
    },
    list: {
        flex: 1,
        marginTop: 70,
        paddingLeft: 15,
        marginBottom: 10
    },
    scrollableList: {
        marginTop: 15
    },
});
