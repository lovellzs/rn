﻿import React, {Component} from 'react';
var {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    PixelRatio,
    TouchableHighlight,
    Dimensions,
    TextInput,
    TouchableWithoutFeedback,
    TouchableOpacity,
} = require('react-native')

const {screenWidth, screenHeight} = Dimensions.get('window');
const PxRatio = 2;

class CourseType extends Component {

    constructor(props) {
        super(props);
        this.state = {
            choosed: this.props.choosed,
        }
    }

    modifyChoosed(choosed) {
        this.setState({choosed: choosed});
    }

    //<Image source={this.state.choosed == 0 ?require('image!unselected') :require('image!red_selected') }   />
    render() {
        return (
            <View style={styles.row}>
                <TouchableOpacity style={styles.imageView} onPress={this.props.onPress}>
                    <Image
                        source={this.state.choosed == 0 ?require('./unselected.png') :require('./red_selected.png') }/>
                </TouchableOpacity>
                <View style={styles.textInputTitle}>
                    <Text
                        style={styles.textTitle}>
                        {this.props.title}
                    </Text>
                </View>
                <Text style={{flex:1}}/>
                {
                    this.state.choosed == 0 ? null :
                        <TextInput
                            style={styles.ksValueView}
                            maxLength={5}
                            placeholder="0"
                            placeholderTextColor="#b2b2b2"
                            multiline={false}
                            onChangeText={()=>{}}
                            keyboardType="numeric"
                        />
                }
                {
                    this.state.choosed == 0 ? null :
                        <View style={styles.ksTipView}>
                            <Text style={styles.ksTipText}>元/课时</Text>
                        </View>
                }
            </View>
        );
    }
}

class ChooseForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type_stu: 0
        }
    }

    render() {
        return (
            <View>
                <CourseType ref="stu" title="学生上门" choosed={this.state.type_stu} onPress={()=>{
                  let choosed = this.state.type_stu == 0 ? 1:0;

                  console.log(choosed);
                  this.refs.stu.modifyChoosed(choosed);
                  this.setState({type_stu:choosed})
                }}/>
                <CourseType ref="couch" title="老师上门" choosed={this.state.type_stu} onPress={()=>{
                  let choosed = this.state.type_stu == 0 ? 1:0;

                  console.log(choosed);
                  this.refs.couch.modifyChoosed(choosed);
                  this.setState({type_stu:choosed})
                }}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        height: 90 / PxRatio,
        alignItems: 'center',
        width: screenWidth,
    },
    imageView: {
        marginLeft: 30 / PxRatio,
    },

    textInputTitle: {
        marginLeft: 20 / PxRatio,
        alignItems: 'center',
    },
    textTitle: {
        fontSize: 28 / PxRatio,
        color: '#666666',
    },

    ksValueView: {
        width: 128 / PxRatio,
        height: 52 / PxRatio,
        alignSelf: 'center',
        borderWidth: 1 / PxRatio,
        borderColor: '#dbdbdb',
        textAlign: 'center'
    },

    ksTipView: {
        marginRight: 30 / PxRatio,
        marginLeft: 20 / PxRatio,
    },
    ksTipText: {
        fontSize: 28 / PxRatio,
        color: '#333333',
    },
});


AppRegistry.registerComponent('AwesomeProject', () => ChooseForm);