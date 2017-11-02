// FadeInView.js
import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
    Animated,Easing,
    StyleSheet,
} from 'react-native';

class FadeInView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0),            // 透明度初始值设为0
        };
    }

    componentDidMount() {
        Animated.timing(                                // 随时间变化而执行的动画类型
            this.state.fadeAnim,                        // 动画中的变量值
            {
                toValue: 1,                             // 透明度最终变为1，即完全不透明
                easing: Easing.back,
                duration: 5000,
            }
        ).start();                                      // 开始执行动画
    }

    render() {
        return (
            <Animated.View                              // 可动画化的视图组件
                style={{
                          ...this.props.style,
                          opacity: this.state.fadeAnim, // 将透明度指定为动画变量值
                        }}
            >
                {this.props.children}
            </Animated.View>
        );
    }
}


export default class AwesomeProject extends Component {
    render() {
        return (
            <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}} >
                <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
            </FadeInView>
        )
    }
}

const styles = StyleSheet.create({})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);