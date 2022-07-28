/* eslint-disable prettier/prettier */
import {Easing } from 'react-native'
import React from 'react'
import Login from '../Login';
import Register from '../Register'
import TabNavigation from './TabNavigation';
import Colors from '../../contents/colors/Colors';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

const closeConfig = {
    animation: "timing",
    config: {
      duration: 250,
      easing : Easing.linear
    }
  }

export default function LoginNavigation() {
  return (
    <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          transitionSpec:{
            open : closeConfig,
            close: closeConfig,
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name="Login2" component={Login} options={{headerShown: false}}/>
        <Stack.Screen 
          name="Register"
          component={Register}
          options={{headerStyle:{backgroundColor: Colors.THEME_COLOR_LIGHT_1}}}
          />
        <Stack.Screen name="TabNavigation" component={TabNavigation} options={{headerShown: false}}/>
      </Stack.Navigator>
  )
}