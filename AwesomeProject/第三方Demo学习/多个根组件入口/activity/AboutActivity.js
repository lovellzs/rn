'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class AboutActivity extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>AboutActivity</Text>
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