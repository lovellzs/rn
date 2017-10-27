
import React, { Component } from 'react';
import{ AppRegistry, ScrollView, Image, Text, View } from 'react-native'

class AwesomeProject extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView>
                {/*<Text style={{fontSize:96}}>Scroll me plz</Text>*/}
                {/*<Image source={require('./baidulogo.png')} />*/}
                {/*<Image source={require('./baidulogo.png')} />*/}
                {/*<Image source={require('./baidulogo.png')} />*/}
                {/*<Image source={require('./baidulogo.png')} />*/}
                {/*<Image source={require('./baidulogo.png')} />*/}
                {/*<Text style={{fontSize:96}}>If you like</Text>*/}
                {/*<Image source={require('./baidulogo.png')} />*/}
                {/*<Image source={require('./baidulogo.png')} />*/}
                {/*<Image source={require('./baidulogo.png')} />*/}
                {/*<Image source={require('./baidulogo.png')} />*/}
                {/*<Image source={require('./baidulogo.png')} />*/}
                {/*<Text style={{fontSize:96}}>Scrolling down</Text>*/}
                {/*<Image source={require('./baidulogo.png')} />*/}
                {/*<Image source={require('./baidulogo.png')} />*/}
                {/*<Image source={require('./baidulogo.png')} />*/}
                {/*<Image source={require('./baidulogo.png')} />*/}
                {/*<Image source={require('./baidulogo.png')} />*/}
                {/*<Text style={{fontSize:96}}>What's the best</Text>*/}
            </ScrollView>
        );
    }
}

// 注册应用(registerComponent)后才能正确渲染
// 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);