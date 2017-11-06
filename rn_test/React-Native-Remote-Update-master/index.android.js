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

                    横看成岭侧成峰, 远近高低各不同{"\n"}
                    不识庐山真面目, 只缘身在此山中{"\n"}
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
