/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import AppBar from '../components/AppBar'

export default function Favourates() {
  return (
    <View style={StyleSheet.container}>
      <AppBar/>  
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1
    }
})