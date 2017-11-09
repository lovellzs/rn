import React, { Component } from 'react';
import {
    BackHandler,
    AppRegistry,
    Text, View
} from 'react-native';

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = { showText: true ,num:1};
    }

    componentWillMount(){
        BackHandler.addEventListener('hardwareBackPress', ()=> {
            // this.onMainScreen and this.goBack are just examples, you need to use your own implementation here
            // Typically you would use the navigator here to go to the last state.

            // if (!this.onMainScreen()) {
            //     this.goBack();
            //     return true;
            // }
            // return false;

            if( this.state.num >=10 ){
                BackHandler.exitApp();
                return true ;  //此处 return false  会多打印一次num  至今不解
            }

            console.log( ++this.state.num );
            return true;
        });
    }

    componentWillUnmount(){
        BackHandler.removeEventListener('hardwareBackPress', ()=>{});
    }

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