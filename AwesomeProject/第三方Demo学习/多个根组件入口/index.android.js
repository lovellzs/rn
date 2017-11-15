'use strict'
import {
    AppRegistry,
} from 'react-native';

import Splash_Activity from './activity/SplashActivity'
import Main_Activity from './activity/MainActivity'
import About_Activity from './activity/AboutActivity'

AppRegistry.registerComponent('SplashActivity', () => Splash_Activity);
AppRegistry.registerComponent('AwesomeProject', () => Main_Activity);
AppRegistry.registerComponent('AboutActivity', () => About_Activity);