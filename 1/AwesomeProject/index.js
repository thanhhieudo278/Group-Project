/**
 * @format
 */

<<<<<<< HEAD
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import HomeScreen from './screens/HomeScreen';
import MainScreen from './screens/MainScreen';
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';
=======
import React from 'react'
import{Text} from 'react-native'
import {AppRegistry} from 'react-native'
import App from './App'
import {name as appName} from './app.json'
import MainScreen from './screens/MainScreen'
import SelectWorkout from './screens/SelectWorkout'
import WellcomeScreen from './screens/WellcomeScreen'

/*AppRegistry.registerComponent(appName,() => WellcomeScreen);*/
AppRegistry.registerComponent(appName,() => SelectWorkout);


>>>>>>> 5a93f5a6fec27f2bbb1ec7bd51062092d0071027

AppRegistry.registerComponent(appName, () => HomeScreen);
