/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    PixelRatio,
    Text,
    Image,
    TouchableOpacity,
    View
} from 'react-native';



var imgs=[
    'http://img4.duitang.com/uploads/item/201602/07/20160207012133_8rYmd.jpeg',
    'http://f.hiphotos.baidu.com/image/pic/item/0d338744ebf81a4c34ff042add2a6059242da600.jpg',
    'http://h.hiphotos.baidu.com/image/pic/item/71cf3bc79f3df8dc6e3c4372c711728b461028d4.jpg',
    'http://g.hiphotos.baidu.com/image/pic/item/c2cec3fdfc0392457020c9eb8d94a4c27c1e25b8.jpg',
    'http://f.hiphotos.baidu.com/image/pic/item/e850352ac65c1038ce524121b8119313b07e8921.jpg',
    'http://c.hiphotos.baidu.com/image/pic/item/4bed2e738bd4b31cfd502f5f8dd6277f9f2ff8e2.jpg',
    'ic_launcher',

];

class AwesomeProject extends Component {
    render() {
        return (
            <View style={[styles.flex,{marginTop:45}]}>
                <MyImage imgs={imgs}> </MyImage>
            </View>
        );
    }
}

class MyImage extends Component{
    constructor(props){
        super(props);
        this.state = {
            count:0,
            imgs:this.props.imgs,
        };
    }


    //source={{uri:this.state.imgs[this.state.count]}}  网络图片

    //source={require('./xiaoman2016_24.png')}   本地图片
    render(){

        return(
            <View style={[styles.flex,{alignItems:'center'}]}>

                <View style={styles.image}>

                    <Image style={styles.img}
                           resizeMode="contain"
                           source={{uri:this.state.imgs[this.state.count]}}

                    />

                </View>


                <View style={styles.btns}>


                    <TouchableOpacity onPress={this.goPreview.bind(this)}><View style={styles.btn}><Text>上一张</Text></View></TouchableOpacity>

                    <TouchableOpacity onPress={this.goNext.bind(this)}><View style={styles.btn}><Text>下一张</Text></View></TouchableOpacity>

                </View>
                <View style={{width:200,height:150}}>

                    <Image style={styles.img}
                           resizeMode="contain"
                           source={require('./../baidulogo.png')}
                    />

                </View>
                <View style={{width:200,height:150}}>

                    <Image style={styles.img}
                           resizeMode="contain"
                           source={{uri: 'ic_launcher'}}
                    />

                </View>
                <Text>上一张</Text>
            </View>
        );
    }


    goPreview(){
        var count=this.state.count;
        count--;
        if(count>=0){
            this.setState({
                count:count,
            });
        }
    }

    goNext(){
        var count=this.state.count;
        count++;
        if(count<this.state.imgs.length){
            this.setState({
                count:count,
            });
        }
    }


}



const styles = StyleSheet.create({

    btn:{
        width:60,
        height:30,
        borderColor:'#0089FF',
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:3,
        marginRight:20,

    },

    btns:{
        flexDirection:'row',
        marginTop:20,
        justifyContent:'center',
    },


    img:{
        height:150,
        width:200,
    },


    image:{
        borderWidth:1,
        width:250,
        height:150,
        borderRadius:5,
        borderColor:'#ccc',
        justifyContent:'center',
        alignItems:'center',
    },



    flex:{
        flex:1,
    },




});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
