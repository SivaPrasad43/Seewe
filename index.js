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
import SellItem from './screens/SellItem';
import Notification from './screens/Notification';
import Product from './screens/Product';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
