import React, { Component } from 'react';
import {
    AppRegistry,
    Text, View,
    Keyboard,TextInput
} from 'react-native';

class Example extends Component {
    componentWillMount () {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }

    componentWillUnmount () {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    _keyboardDidShow () {
        alert('Keyboard Shown');
    }

    _keyboardDidHide () {
        alert('Keyboard Hidden');
    }

    render() {
        return (
            <TextInput
                onSubmitEditing={Keyboard.dismiss}
            />
        );
    }
}

AppRegistry.registerComponent('AwesomeProject', () => Example);