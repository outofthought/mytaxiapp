import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Dimensions, Button, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default class SearchBox extends Component {
    render() {
        return (
            <View>
                <TextInput
                    style={styles.input}
                    placeholder='PICK UP'
                />
                <Icon name="ios-search" size={30} color='black' />
                <TextInput
                    style={styles.input}
                    placeholder='DROP-OFF'
                />
                <Icon name="ios-search" size={30} color='black' />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    input: {

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
        width: "100%",
        height: 30,
        fontSize: 14
    }


});