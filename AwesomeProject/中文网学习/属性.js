import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Greeting extends Component {
    render() {
        return (
            <Text>H  ello {this.props.name}!</Text>
        );
    }
}

class AwesomeProject extends Component {

    constructor(props){
        super(props)
        this.state={
            age:1,
            str:"hhhh",
            names:[
                "Rexxar","Jaina","Valeera"
            ]
        }
    }

    changeNames(index){
        // let index = ++this.state.age;
        this.state.names=["Rexxar" + index,"Jaina" + index,"Valeera" + index];
        this.setState({});
    }
    changeStr(i){
        let index = ++this.state.age;
        this.state.names=["Rexxar" + index, "Jaina" + index,"Valeera" + index];
        this.state.str = "shizhe"
        this.setState({});
    }

    render() {
        return (
            <View style={{alignItems: 'center'}} >
                <Text onPress={this.changeNames.bind(this,11) } > Hello1  </Text>
                <Text  > 乘风破浪会有时{"\n"}直挂云帆济沧海  </Text>
                <Greeting name={this.state.names[0] } />
                <Greeting name={this.state.names[1] } />
                <Greeting name={this.state.names[2] } />
                <Greeting name={this.state.str } />
                <Text onPress={this.changeStr.bind(this,22) } > Hello2  </Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);