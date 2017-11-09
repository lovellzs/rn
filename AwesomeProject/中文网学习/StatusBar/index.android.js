
'use strict';

const React = require('react');
const ReactNative = require('react-native');
const {
    AppRegistry,
    StatusBar,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} = ReactNative;

import  examples from './StatusbarExample.js';
const statubarsexapmles = examples;
// const statubarsexapmles = require('./StatusbarExample.js');

const StatusBarHiddenExample = statubarsexapmles.examples[0].render();

const StatusBarStyleExample = statubarsexapmles.examples[1].render();//ios
const StatusBarNetworkActivityExample = statubarsexapmles.examples[2].render();//ios

const StatusBarBackgroundColorExample = statubarsexapmles.examples[3].render();//android
const StatusBarTranslucentExample = statubarsexapmles.examples[4].render();//android

const StatusBarStaticIOSExample = statubarsexapmles.examples[5].render();//ios

const StatusBarStaticAndroidExample = statubarsexapmles.examples[6].render();//android
const StatusBarDimensions = statubarsexapmles.examples[7].render();

const StatusBarsExample = React.createClass({
    render() {
        return StatusBarDimensions;
    },
});


// const React = require('react');
// const ReactNative = require('react-native');
// const {
//     AppRegistry,
//     StatusBar,
//     StyleSheet,
//     Text,
//     TouchableHighlight,
//     View,
// } = ReactNative;
//
// const colors = [
//     '#ff0000',
//     '#00ff00',
//     '#0000ff',
// ];
//
// const barStyles = [
//     'default',
//     'light-content',
// ];
//
// const showHideTransitions = [
//     'fade',
//     'slide',
// ];
//
// function getValue<T>(values: Array<T>, index: number): T {
//     return values[index % values.length];
// }
//
//
// const StatusBarBackgroundColorExample = React.createClass({
//     getInitialState() {
//         return {
//             animated: true,
//             backgroundColor: getValue(colors, 0),
//         };
//     },
//
//     _colorIndex: 0,
//
//     _onChangeBackgroundColor() {
//         this._colorIndex++;
//         this.setState({backgroundColor: getValue(colors, this._colorIndex)});
//     },
//
//     _onChangeAnimated() {
//         this.setState({animated: !this.state.animated});
//     },
//
//     render() {
//         return (
//             <View>
//                 <StatusBar
//                     backgroundColor={this.state.backgroundColor}
//                     animated={this.state.animated}
//                 />
//                 <TouchableHighlight
//                     style={styles.wrapper}
//                     onPress={this._onChangeBackgroundColor}>
//                     <View style={styles.button}>
//                         <Text>backgroundColor: '{getValue(colors, this._colorIndex)}'</Text>
//                     </View>
//                 </TouchableHighlight>
//                 <TouchableHighlight
//                     style={styles.wrapper}
//                     onPress={this._onChangeAnimated}>
//                     <View style={styles.button}>
//                         <Text>animated: {this.state.animated ? 'true' : 'false'}</Text>
//                     </View>
//                 </TouchableHighlight>
//             </View>
//         );
//     },
// });
//
// var styles = StyleSheet.create({
//     wrapper: {
//         borderRadius: 5,
//         marginBottom: 5,
//     },
//     button: {
//         borderRadius: 5,
//         backgroundColor: '#eeeeee',
//         padding: 10,
//     },
//     title: {
//         marginTop: 16,
//         marginBottom: 8,
//         fontWeight: 'bold',
//     }
// });

AppRegistry.registerComponent('AwesomeProject', () => StatusBarsExample);