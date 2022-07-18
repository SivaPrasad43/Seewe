/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React from 'react';
import LoginNavigation from './screens/navigation/LoginNavigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <LoginNavigation/>
    </NavigationContainer>
  );
}
