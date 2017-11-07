/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class DoubanMovie extends Component {

    constructor(props){
        super(props);
        this.state={
            desc:"desc"
        }
    }

    render() {
        return (
            <View style={styles.container} >
                <Text style={styles.welcome} >
                    乘风破浪会有时{"\n"}
                    直挂云帆济沧海{"\n"}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

AppRegistry.registerComponent('DoubanMovie', () => DoubanMovie);
