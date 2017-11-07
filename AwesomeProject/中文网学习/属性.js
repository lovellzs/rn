import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}

class AwesomeProject extends Component {

    constructor(props){
        super(props)
        this.state={
            age:1,
            names:[
                "Rexxar","Jaina","Valeera"
            ]
        }
    }

    changeNames(){
        let index = this.state.age;
        this.state.names=["Rexxar" + index,"Jaina" + index,"Valeera" + index];
        this.setState({});
    }

    render() {
        return (
            <View style={{alignItems: 'center'}} onPress={this.changeNames}>
                <Greeting name='Rexxar' />
                <Greeting name='Jaina' />
                <Greeting name='Valeera' />
            </View>
        );
    }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);