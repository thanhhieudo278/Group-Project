/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import HomeScreen from './screens/HomeScreen';
import MainScreen from './screens/MainScreen';
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';

AppRegistry.registerComponent(appName, () => HomeScreen);
