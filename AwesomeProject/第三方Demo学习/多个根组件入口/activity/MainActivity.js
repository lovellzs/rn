'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
} from 'react-native';
import  CustomApp from "../mymodules/CustomAppModule";

const {width, height} = Dimensions.get('window');

export default class MainActivity extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>MainActivity</Text><Text>{"\n"}{"\n"}</Text>
                <Text onPress={alert(111) }>跳转到AboutActivity</Text><Text>{"\n"}{"\n"}</Text>
                <Text onPress={alert(222) }>跳转到SplashActivity</Text><Text>{"\n"}{"\n"}</Text>
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