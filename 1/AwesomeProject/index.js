/**
 * @format
 */

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


