/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    PixelRatio,
    Text,
    Image,
    TouchableOpacity,
    DrawerLayoutAndroid,
    ProgressBarAndroid,
    View
} from 'react-native';


class AwesomeProject extends Component {

    constructor(props){
        super(props);
        this.state = { slideNum:0, };

    }

    render() {
        var navigationView = (
            <View style={{flex: 1, backgroundColor: '#ff0'}}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>我是抽屉!</Text>
            </View>
        );
        return (
            <DrawerLayoutAndroid
                drawerWidth={200}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}
                onDrawerSlide={ (num)=>{  this.setState({ slideNum: ++this.state.slideNum });} }

            >

                <View style={{flex: 1, alignItems: 'center'}}>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>React Native World!</Text>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>{this.state.slideNum}</Text>
                </View>
            </DrawerLayoutAndroid>
        );
    }
}

const styles = StyleSheet.create({

    flex:{
        flex:1,
    },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
