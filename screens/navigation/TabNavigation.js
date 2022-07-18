/* eslint-disable prettier/prettier */
import React from 'react'
import Home from '../Home';
import Test_1 from '../Test_1';
import Login from '../Login';
import Register from '../Register';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Colors from '../../contents/colors/Colors';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';


const BottomTab = createMaterialBottomTabNavigator()

export default function TabNavigation() {
  return (
        <BottomTab.Navigator
          initialRouteName="Home"
          activeColor="black"
          inactiveColor= {Colors.DEFAULT_GRAY}
          barStyle={{ backgroundColor: 'white' }}>
          <BottomTab.Screen 
            name="Home2" 
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <Icon name="home" color={color} size={26} />
              ),
            }} />
          <BottomTab.Screen 
            name="Test 1" 
            component={Test_1}
            options={{
              tabBarLabel: 'Compass',
              tabBarIcon: ({ color }) => (
                <Icon name="compass" color={color} size={24} />
              ),
            }} />
          <BottomTab.Screen 
            name="Register" 
            component={Register}
            options={{
              tabBarLabel: 'Compass',
              tabBarIcon: ({ color }) => (
                <Icon name="compass" color={color} size={24} />
              ),
            }} />
          <BottomTab.Screen 
            name="Login" 
            component={Login}
            options={{
              tabBarLabel: 'Compass',
              tabBarIcon: ({ color }) => (
                <Icon name="compass" color={color} size={24} />
              ),
            }} />
        </BottomTab.Navigator>
  )
}