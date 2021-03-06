﻿'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
    PixelRatio,
    Dimensions,
    AppRegistry,
    TimePickerAndroid,
    DatePickerAndroid,
    View,
    Text,
} = ReactNative;

var DatePickerAndroidExample = React.createClass({
    getInitialState() {
        return {
            content: 'Content will appear here',
            width:0,
            height:0,
            scale:1
        };
    },

    async _setDate(){
        try {
            const {action, year, month, day} = await DatePickerAndroid.open({
                // 要设置默认值为今天的话，使用`new Date()`即可。
                // 下面显示的会是2020年5月25日。月份是从0开始算的。
                date: new Date(2020, 4, 25)
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                // 这里开始可以处理用户选好的年月日三个参数：year, month (0-11), day
                let content = year + "年"+ (month+1) + "月" + day +"日" ;

                var {height, width} = Dimensions.get('window');
                var scale = PixelRatio.get();
                this.setState({width,height,scale,content});
            }
        } catch ({code, message}) {
            console.warn('Cannot open date picker', message);
        }
    },


    async _setTime(){
        try {
            const {action, hour, minute} = await TimePickerAndroid.open({
                hour: 14,
                minute: 0,
                is24Hour: true, // 会显示为'2 PM'   // 没有秒
            });
            if (action !== TimePickerAndroid.dismissedAction) {
                // 这里开始可以处理用户选好的时分两个参数：hour (0-23), minute (0-59)

                let content = hour + "时"+ minute + "分";
                this.setState({ content });
            }
        } catch ({code, message}) {
            console.warn('Cannot open time picker', message);
        }
    },

    render() {
        return (
            <View>
                <Text onPress={this._setDate} style={{color: 'blue'}}>
                    Tap to put "Hello World" in the setdate
                </Text>
                <Text onPress={this._setTime} style={{color: 'gray'}}>
                    Tap to put "Hello World" in the settime
                </Text>
                <Text style={{color: 'red', marginTop: 20}}>
                    {this.state.content}{'\n\n'}
                    width{this.state.width}{'\n\n'}
                    height{this.state.height}{'\n\n'}
                    scale{this.state.scale}
                </Text>
            </View>
        );
    }
});

// exports.title = 'Clipboard';
// exports.description = 'Show Clipboard contents.';
// exports.examples = [
//     {
//         title: 'Clipboard.setString() and getString()',
//         render() {
//             return <ClipboardExample/>;
//         }
//     }
// ];

AppRegistry.registerComponent("AwesomeProject",()=>DatePickerAndroidExample)