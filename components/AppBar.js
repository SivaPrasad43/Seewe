/* eslint-disable prettier/prettier */
import { View, StyleSheet,Image } from 'react-native'
import React from 'react'

export default function AppBar() {
  return (
    <View style={styles.Appbar}>
        <Image style={styles.AppBarLogo} source={require("../res/logo.png")}/>
    </View>
  )
}

const styles = StyleSheet.create({
    Appbar:{
        height: 25,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 5,
      },
    AppBarLogo:{
        height:25,
        width: "25%"
      },
})