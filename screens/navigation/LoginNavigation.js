/* eslint-disable prettier/prettier */
import React from 'react'
import LoginProvider from './LoginProvider';
import { NavigationContainer } from '@react-navigation/native';
import LoginContainer from './LoginContainer';

export default function LoginNavigation() {
  return (
    <LoginProvider>
      <NavigationContainer>
        <LoginContainer/>
      </NavigationContainer>
    </LoginProvider>
  )
}