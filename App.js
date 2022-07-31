/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React from 'react';
import LoginNavigation from './screens/navigation/LoginContainer';
import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';
import Colors from './contents/colors/Colors';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Intro from './screens/Intro';
import LoginContainer from './screens/navigation/LoginContainer';

const IntroStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <IntroStack.Navigator>
        <IntroStack.Screen name="Intro" component={Intro} options={{headerShown: false}}/>
        <IntroStack.Screen name="LoginIntro" component={LoginContainer} options={{headerShown: false}}/>
      </IntroStack.Navigator>
    </NavigationContainer>
  );
}
