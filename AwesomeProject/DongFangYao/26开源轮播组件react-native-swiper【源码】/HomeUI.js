/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
} from 'react-native';

import Swiper from 'react-native-swiper'

var str = "defal";
var dot1 = <View style={{backgroundColor:'rgba(0,0,0,.2)', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />
var dot2 = <View style={{backgroundColor: '#007aff', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />
var nextButton = <Text style={{fontSize:60, color:'#ff0000', paddingTop:30, paddingBottom:30}}>›</Text>
var prevButton = <Text style={{fontSize:60, color:'#00a7ec', paddingTop:30, paddingBottom:30}}>‹</Text>
export default class HomeUI extends Component{

    constructor(props) {
        super(props);//这一句不能省略，照抄即可
        this.str = "asdads";
    }

    render(){
        return (
            // Swiper 设置宽度，有偏差 ，horizontal 控制小圆点的方向
            <Swiper style={styles.wrapper} dot={dot1} activeDot={dot2} showsButtons={true} nextButton={nextButton} prevButton={prevButton}
                    showsPagination={true} horizontal={true}  loop={true} autoplay={false} autoplayTimeout={2.5} >
                <View style={styles.slide1}>
                    <Image
                        style={{width:200,height:300}}
                        resizeMode='stretch'
                        source={{uri:'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'}}
                    />
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>And simple{this.str}{str}</Text>
                </View>
            </Swiper>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex:1,
    },
    slide1: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
});