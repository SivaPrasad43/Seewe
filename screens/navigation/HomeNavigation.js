/* eslint-disable prettier/prettier */
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Home';
import SellItem from '../SellItem';
import Product from '../Product';

export default function HomeNavigation() {
    const HomeStack = createStackNavigator()
  return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home2" component={Home} options={{headerShown: false}}/>
            <HomeStack.Screen name="Sell Item" component={SellItem}/>
            <HomeStack.Screen name="Product" component={Product}/>
        </HomeStack.Navigator>
  )
}
