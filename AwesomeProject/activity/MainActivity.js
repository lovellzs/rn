'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
} from 'react-native';
import  CustomApp from "../mymodules/CustomAppModule";

const {width, height} = Dimensions.get('window');

export default class MainActivity extends Component {

    constructor(props) {
        super(props);
    }

    goto(topage){
        CustomApp.gotoPage("",topage,{});
    }

    gotoSinglePage(topage){
        CustomApp.gotoSinglePage("",topage,{});
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>静态Activity</Text><Text>{"\n"}{"\n"}</Text>
                <Text onPress={ this.goto.bind(this,"AboutActivity") }>跳转到AboutActivity</Text><Text>{"\n"}{"\n"}</Text>
                <Text onPress={ this.goto.bind(this,"SplashActivity") }>跳转到SplashActivity</Text><Text>{"\n"}{"\n"}</Text>

                <Text>{"\n"}{"\n"}</Text>
                <Text>{"\n"}{"\n"}</Text>
                <View style={{width:200,height:150}}>

                    <Image style={styles.img}
                           resizeMode="contain"
                           source={require('../img/baidulogo.png')}
                    />
                </View>
                <Text>动态的budle</Text><Text>{"\n"}{"\n"}</Text>
                <Text onPress={ this.gotoSinglePage.bind(this,"AboutActivity") }>跳转到AboutActivity</Text><Text>{"\n"}{"\n"}</Text>
                <Text onPress={ this.gotoSinglePage.bind(this,"SplashActivity") }>跳转到SplashActivity</Text><Text>{"\n"}{"\n"}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    img:{
        height:150,
        width:200
    }
});