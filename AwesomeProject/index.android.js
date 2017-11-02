/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    DeviceEventEmitter,
    Platform,
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {ToastExample,UIManager} from './ToastExample';

if( !!Platform.Version ){
    console.log("当前api level是" + Platform.Version);
}

// console.log( React.global );
// __DEV__ = !__DEV__;
// console.log( __DEV__ );

export default class AwesomeProject extends Component {

    constructor(props){
        super(props);
    }

    show(txt){
        console.log("=========show====");
        ToastExample.show(txt, ToastExample.SHORT);
    }

    mLayout(){
        UIManager.measureLayout(
            100,
            100,
            (msg) => {
                console.log(msg);

            },
            (x, y, width, height) => {
                console.log(x + ':' + y + ':' + width + ':' + height);
            }
        );
    }
    componentWillMount(){
        this.listener = DeviceEventEmitter.addListener('keyboardWillShow', function(e:Event ) {
            console.log( e );
            alert( "11111" + !!e.aaa?e.aaa:e.name );
        });
    }

    componentWillUnmount(){
        // 移除 一定要写
        this.listener.remove();
    }

    render() {
        return (
            <View style={styles.container} >
                <Text style={styles.welcome} onPress={ this.show.bind(this,"dadad") }>
                    横看成岭侧成峰,远近高低各不同
                </Text>
                <Text style={styles.instructions} onPress={ ()=>{ DeviceEventEmitter.emit('keyboardWillShow', {name:"zhangsan",age:19}); } }>
                    要使劲的摇
                </Text>
                <Text style={styles.instructions} onPress={ this.mLayout.bind(this) }>
                    我得意地笑{'\n'}
                    我得意地笑{'\n'}
                    我得意地笑{'\n'}
                    啊  啊 啊爱的
                    我艹
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
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
