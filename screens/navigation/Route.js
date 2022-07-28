/* eslint-disable prettier/prettier */
import React, { useContext, useState, useEffect } from 'react'
import LoginNavigation from './LoginNavigation'
import { NavigationContainer } from '@react-navigation/native'
import { AuthContext } from './AuthProvider'
import Home from '../Home'
import { auth } from 'react-native-firebase'
import App from '../../App'

export default function Route() {
    
    const [user,setUser] = useContext(AuthContext)
    const [initializing, setInitializing] = useState(true)

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
      }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
      }, []);

    if (initializing) return null; 


    return (
        <NavigationContainer>
            <Home/>
        </NavigationContainer>
    )
}