/* eslint-disable prettier/prettier */
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Home';
import SellItem from '../SellItem';
import Product from '../Product';
import Notification from '../Notification';
import { useState } from 'react';

export default function HomeNavigation({route}) {
    const HomeStack = createStackNavigator()

    const [Uid,SetUid] = useState(route.params.uid) 
    const [Uname,SetUname] = useState(route.params.uname)
    const [Ureg,SetUreg] = useState(route.params.ureg)
    const [phone,SetPhone] = useState(route.params.phone)

    console.log(route.params.uid)
  return (
        <HomeStack.Navigator>
            <HomeStack.Screen 
              name="Home2" 
              component={Home} 
              initialParams={{ uid: Uid, uname: Uname, ureg : Ureg, phone: phone }}
              options={{headerShown: false}}/>
            <HomeStack.Screen name="Sell Item" component={SellItem}/>
            <HomeStack.Screen name="Product" component={Product} options={{headerShown: false}}/>
        </HomeStack.Navigator>
  )
}
