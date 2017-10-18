
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    PixelRatio,
    Text,
    Image,
    TouchableOpacity,
    Picker,
    ProgressBarAndroid,
    Switch,
    View
} from 'react-native';

class AwesomeProject extends Component {

    constructor(props){
        super(props);
        this.state = {
            language:null
        };
    }

    //箭头函数 ES6
    render() {
        return (

            <View style={[styles.flex,{marginTop:45}]}>

                <Text>Picker组件</Text>

                <Picker
                    selectedValue={this.state.language}
                    onValueChange={lang => this.setState({language: lang})}
                    mode="dialog"
                    style={{color:'#f00'}}
                >

                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                    <Picker.Item label="C语言" value="c" />
                    <Picker.Item label="PHP开发" value="php" />
                </Picker>

                <Text>{this.state.language}</Text>
                <View>
                    <ProgressBarAndroid color='red' styleAttr='Inverse'/>
                    <ProgressBarAndroid color='purple' styleAttr='Horizontal' progress={0.8} indeterminate={false} style={{marginTop:10}} />
                    <ProgressBarAndroid color='green' styleAttr='Horizontal' indeterminate={true} style={{marginTop:10}}/>

                    <ProgressBarAndroid color='black' styleAttr='SmallInverse' style={{marginTop:10}} />
                    <ProgressBarAndroid color='black' styleAttr='Large' style={{marginTop:10}} />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    flex:{
        flex:1,
    },

});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
