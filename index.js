/* eslint-disable prettier/prettier */
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Login from './screens/Login';
import Intro from './screens/Intro';
import Register from './screens/Register';
import Home from './screens/Home';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
