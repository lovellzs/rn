'use strict';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';


import { createStore } from 'redux'
import { Provider } from 'react-redux'

// import reducers from './reducers'
// import AddTodo from './containers/AddTodo'
import reducers from './ReduxDemo/reducers'
import AddTodo from './ReduxDemo/containers/AddTodo'

class Reduxdemo extends Component {

    render() {
        // let initState = { num: 0,text:""};
        let store = createStore(reducers);
        return (
            <Provider store={store}>
                <AddTodo />
            </Provider>
        )
    }
}

AppRegistry.registerComponent("AwesomeProject",()=>Reduxdemo);