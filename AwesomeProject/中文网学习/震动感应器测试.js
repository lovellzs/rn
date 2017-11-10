'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
    AppRegistry,
    Clipboard,
    View,
    Text,
} = ReactNative;

var ClipboardExample = React.createClass({
    getInitialState() {
        return {
            content: 'Content will appear here'
        };
    },

    async _setClipboardContent(){
        Clipboard.setString('Hello World');
        try {
            var content = await Clipboard.getString();
            this.setState({content});
        } catch (e) {
            this.setState({content:e.message});
        }
    },

    render() {
        return (
            <View>
                <Text onPress={this._setClipboardContent} style={{color: 'blue'}}>
                    Tap to put "Hello World" in the clipboard
                </Text>
                <Text style={{color: 'red', marginTop: 20}}>
                    {this.state.content}
                </Text>
            </View>
        );
    }
});

AppRegistry.registerComponent("AwesomeProject",()=>ClipboardExample)