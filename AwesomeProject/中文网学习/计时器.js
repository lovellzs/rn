import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class AwesomeProject extends Component {

    constructor(props){
        super(props);
        this.state = {age: 0};
    }

    componentDidMount() {
        // this.timer = setInterval( ()=>{
        //     this.setState((preState)=>{
        //         return {age:++preState.age};
        //     });
        // },1000);

        var that = this;
        this.timer = setInterval(function(){
            that.setState(function(preState){
                console.log("=======" + ++preState.age);
                return {age : ++preState.age};
            });
        },1000);

        // this.timer = setInterval(
        //     () => this.setState({age:++this.state.age}) ,
        //     1000
        // );
    }

    componentWillUnmount() {
        // 请注意Un"m"ount的m是小写

        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    }

    render(){
        return <Text>{ this.state.age }</Text>
    }
};

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);