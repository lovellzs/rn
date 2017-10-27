import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = { showText: true ,num:1};
        // 每1000毫秒对showText状态做一次取反操作
        setInterval(() => {
            this.setState(previousState => {
                return { showText: !previousState.showText ,num:++previousState.num};
            });
        }, 1000);
    }

    //this.setState 可以传入一个函数，函数参数可以传入前一个状态，返回后一个状态

    render() {
        // 根据当前showText的值决定是否显示text内容
        let display = this.state.showText ? this.props.text : ' ';
        let num = this.state.num ;
        return (
            <View>
                <Text>{display}</Text>
                <Text>{num}</Text>
            </View>
        );
    }
}

class AwesomeProject extends Component {
    render() {
        return (
            <View>
                <Blink text='I love to blink' />
                <Blink text='Yes blinking is so great' />
                <Blink text='Why did they ever take this out of HTML' />
                <Blink text='Look at me look at me look at me' />
            </View>
        );
    }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);