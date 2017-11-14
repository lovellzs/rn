'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    AppRegistry,
    View,
    WebView,
    Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const url = "http://www.58.com";
export default class WebViewExample extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <WebView
                    style={{width:width,height:height-20,backgroundColor:'red'}}
                    source={{uri:url,method: 'GET'}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    scalesPageToFit={false}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        paddingTop:20,
    },
});



AppRegistry.registerComponent("AwesomeProject",()=>WebViewExample)