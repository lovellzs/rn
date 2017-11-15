'use strict';
import React, { Component } from 'react';
import {
    StatusBar,
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

//     showHideTransition={this.state.showHideTransition}  slide  fade
// animated={this.state.animated}

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    showHideTransition={"fade"}
                    animated={false}
                    hidden={true}
                />
                <Text>AboutActivity</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});