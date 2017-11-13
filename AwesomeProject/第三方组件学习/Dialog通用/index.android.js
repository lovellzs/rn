import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text, View ,
    TextInput,Button,
    TouchableOpacity,
} from 'react-native';

import Dialog from './Dialog';

class AwesomeProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this._sourceData,
            refreshing: false, //初始化不刷新
            text: ''//跳转的行
        };
    }

    dialogShow(){
        this.refs.dialog.show("确定要取消订单吗");
    }

    callback(){
        alert(111);
    }

    render() {
        return (
            <View style={flatListStyles.container}>
                <Dialog ref="dialog" callback={this.callback.bind(this)}/>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>

                    <Button title="弹出Dialog" onPress={this.dialogShow.bind(this)} color={'red'}/>

                </View>
            </View>
        );
    }
};

const flatListStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);