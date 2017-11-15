'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class SplashActivity extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>SplashActivity</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize:20,
        backgroundColor: 'green',
    }
});