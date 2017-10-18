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
    'https://www.baidu.com/img/bd_logo1.png',
    'https://gss1.bdstatic.com/5eN1dDebRNRTm2_p8IuM_a/res/img/xiaoman2016_24.png',
    'https://gss0.bdstatic.com/5bVWsj_p_tVS5dKfpU_Y_D3/res/r/image/2017-10-13/3bbc18368d65449ae27da2034b42b188.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507888037629&di=beeb6a93fbb88415c2c651479daf336a&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F0d338744ebf81a4c34ff042add2a6059242da600.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507888037629&di=f065a44d206d7e997196765f7c93f83e&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F71cf3bc79f3df8dc6e3c4372c711728b461028d4.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507888037628&di=a36f189c47cd0c1ecd557054b01d4699&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fc2cec3fdfc0392457020c9eb8d94a4c27c1e25b8.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507888037628&di=415e6535608a1273d28068886b54d7d3&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fe850352ac65c1038ce524121b8119313b07e8921.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507888037628&di=e485df74eff5498553c5305a8cdc7bf3&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F4bed2e738bd4b31cfd502f5f8dd6277f9f2ff8e2.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507888037343&di=c14fc83bc0992801ee08e194263facc4&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201602%2F07%2F20160207012133_8rYmd.jpeg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507888037343&di=bc46fa8b17053474be80a19b45a068ce&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fbaike%2Fpic%2Fitem%2F242dd42a2834349b78098cd2cbea15ce36d3be5e.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507888037342&di=ec8aa5d54eaf861a791ca86e5796755a&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201309%2F18%2F20130918212815_8BQRj.thumb.600_0.jpeg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507888037341&di=0232ea0d8ebeb474b8c0c8df7611f54e&imgtype=0&src=http%3A%2F%2Fa3.topitme.com%2F9%2Fbd%2Fd0%2F1120211122e2dd0bd9o.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507888037340&di=4288d0ca47f17d6f95c24bfbc84f365b&imgtype=0&src=http%3A%2F%2Fimg.bimg.126.net%2Fphoto%2FZRFqJMJ8pEltpUwNyUj3jg%3D%3D%2F3721943617061830501.jpg',
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
                           source={require('./baidulogo.png')}
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
