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
import SigninScreen from './screens/SigninScreen'
import HomeScreen from './screens/HomeScreen'
import Doctor from './screens/Doctor'
import DiscoverWorkouts from './screens/DiscoverWorkouts'
import FindDoctor from './screens/FindDoctor'
import Nutrition from './screens/Nutrition'
import CoreTraining from './screens/CoreTraining'

/*AppRegistry.registerComponent(appName,() => WellcomeScreen);*/
AppRegistry.registerComponent(appName,() => CoreTraining);





>>>>>>> 5a93f5a6fec27f2bbb1ec7bd51062092d0071027

AppRegistry.registerComponent(appName, () => HomeScreen);
