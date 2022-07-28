/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React from 'react';
import LoginNavigation from './screens/navigation/LoginNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Intro from './screens/Intro';

const IntroStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <IntroStack.Navigator>
        <IntroStack.Screen name="Intro" component={Intro} options={{headerShown: false}}/>
        <IntroStack.Screen name="LoginNavigation" component={LoginNavigation} options={{headerShown: false}}/>
      </IntroStack.Navigator>
    </NavigationContainer>
  );
}
