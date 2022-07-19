/* eslint-disable prettier/prettier */
import { View, StyleSheet, Image } from 'react-native';
import React,{useEffect} from 'react';



export default function Intro({navigation}) {
  useEffect(()=>{
    setTimeout(()=> {navigation.navigate("Login")},2000)
  })
  return (
    <View style={styles.container}>
      <Image style={styles.Logo} source={require('../res/logo.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    color: 'black',
    fontSize: 25,
  },
  Logo: {
    width: '50%',
    height: 60,
    margin: 10,
  },
});
