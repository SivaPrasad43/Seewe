/* eslint-disable prettier/prettier */
import React from 'react'
import Home from '../Home';
import Test_1 from '../Test_1';
import Login from '../Login';
import Register from '../Register';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Colors from '../../contents/colors/Colors';
import Icon  from 'react-native-vector-icons/MaterialIcons';
import SellItem from '../SellItem';
import Notification from '../Notification';
import Product from '../Product';
import HomeNavigation from './HomeNavigation';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


const BottomTab = createMaterialBottomTabNavigator()

export default function TabNavigation({navigation,route}) {

  const [Uid,SetUid] = useState(route.params.uid) 
  const [Uname,SetUname] = useState(route.params.uname)
  const [Ureg,SetUreg] = useState(route.params.ureg)

  console.log("Tab naaaaaavigation ethy : ",Uid)

  return (
        <BottomTab.Navigator
          initialRouteName="Home"
          activeColor="black"
          inactiveColor= {Colors.DEFAULT_GRAY}
          barStyle={{ backgroundColor: 'white' }}>
          <BottomTab.Screen 
            name="HomeNavigation" 
            component={HomeNavigation}
            initialParams={{ uid: Uid, uname: Uname, ureg : Ureg }}
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
              tabBarLabel: 'Favorites',
              tabBarIcon: ({ color }) => (
                <Icon name="favorite" color={color} size={24} />
              ),
            }} />
          <BottomTab.Screen 
            name="Notification" 
            component={Notification}
            options={{
              tabBarLabel: 'Notifications',
              tabBarIcon: ({ color }) => (
                <Icon name="notifications" color={color} size={24} />
              ),
            }} />
          <BottomTab.Screen 
            name="Login" 
            component={Login}
            options={{
              tabBarLabel: 'Logout',
              tabBarIcon: ({ color }) => (
                <Icon name="logout" color={color} size={24} />
              ) ,
            }} />
        </BottomTab.Navigator>
  )
}