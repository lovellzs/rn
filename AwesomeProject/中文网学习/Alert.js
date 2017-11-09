'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
    AppRegistry,
    Alert,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} = ReactNative;


// corporate ipsum > lorem ipsum
var alertMessage = 'Credibly reintermediate next-generation potentialities after goal-oriented ' +
    'catalysts for change. Dynamically revolutionize.';

/**
 * Simple alert examples.
 */
var SimpleAlertExampleBlock = React.createClass({

    render: function () {
        return (
            <View>
                <TouchableHighlight style={styles.wrapper} onPress={() => Alert.alert('Alert Title',alertMessage)}>
                    <View style={styles.button}>
                        <Text>Alert with message and default button</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.wrapper} onPress={() => Alert.alert(
                    'Alert Title',
                    alertMessage,
                    [
                      {text: 'OK', onPress: () => console.log('OK Pressed!')},
                    ])}>
                    <View style={styles.button}>
                        <Text>Alert with one button</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.wrapper} onPress={() => Alert.alert('Alert Title',alertMessage,
                            [
                              {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
                              {text: 'OK', onPress: () => console.log('OK Pressed!')},
                            ])}>
                    <View style={styles.button}>
                        <Text>Alert with two buttons</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.wrapper}
                                    onPress={() => Alert.alert(
                                    'Alert Title',
                                    null,
                                    [
                                      {text: 'Foo', onPress: () => console.log('Foo Pressed!')},
                                      {text: 'Bar', onPress: () => console.log('Bar Pressed!')},
                                      {text: 'Baz', onPress: () => console.log('Baz Pressed!')},
                                    ]
                                  )}>
                    <View style={styles.button}>
                        <Text>Alert with three buttons</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.wrapper}
                                    onPress={() => Alert.alert(
                                            'Foo Title',
                                            alertMessage,
                                            '......'.split('').map((dot, index) => ({
                                              text: 'Button ' + index,
                                              onPress: () => console.log('Pressed ' + index)
                                            }))
                                          )}>
                    <View style={styles.button}>
                        <Text>Alert with too many buttons</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    },
});

var styles = StyleSheet.create({
    wrapper: {
        borderRadius: 5,
        marginBottom: 5,
    },
    button: {
        backgroundColor: '#eeeeee',
        padding: 10,
    },
});


// 注册应用(registerComponent)后才能正确渲染
// 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
AppRegistry.registerComponent('AwesomeProject', () => SimpleAlertExampleBlock);