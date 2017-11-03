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
    View,
    Image
} from 'react-native';
import ImageView from './ImageView.js';

if( !!Platform.Version ){
    console.log("当前api level是" + Platform.Version);
}

// console.log( React.global );
// __DEV__ = !__DEV__;
// console.log( __DEV__ );

export default class AwesomeProject extends Component {

    constructor(props){
        super(props);
        this.state={
            desc:"desc"
        }
    }

    componentWillMount(){
    }

    componentWillUnmount(){
    }

    render() {
        return (
            <View style={styles.container} >
                <Text style={styles.welcome} >

                    横看成岭侧成峰,远近高低各不同{"\n"}
                    不识庐山真面目,只缘身在此山中{"\n"}
                </Text>
                <View style={{width:200,height:150}}>

                    <ImageView style={styles.img}
                           resizeMode="contain"
                           src={ [{uri:'ic_launcher'}]}
                    />

                </View>
                <View style={{width:200,height:150}}>

                    <ImageView style={styles.img}
                               resizeMode="contain"
                               src={ [{uri:'http://img4.duitang.com/uploads/item/201602/07/20160207012133_8rYmd.jpeg'}]}
                    />

                </View>
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
    img:{
        height:150,
        width:200,
    },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
