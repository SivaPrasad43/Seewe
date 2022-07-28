/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Image, ImageBackground } from 'react-native'
import React from 'react'
import Colors from '../contents/colors/Colors'
import Icon from 'react-native-vector-icons/MaterialIcons'


export default function Register() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../res/login_background.png")} resizeMode="cover" style={{flex:1,width:"100%",justifyContent:'center'}}/>    
      <View style = {styles.bottomView}>
          <View style={styles.line}/>
          <Text style = {styles.RegisterText}>Register</Text>
          <View style={{width: '100%',alignItems: 'center'}}>
            <View style = {styles.InputContainer}>
                <View style = {{flexDirection: "row",alignItems:"center"}}>
                    <Icon name="person" size={20} color={Colors.DEFAULT_BLACK} style={{marginRight: 10}}/>  
                    <TextInput
                        style = {styles.inputText} 
                        placeholder='Name'
                        placeholderTextColor= {Colors.DEFAULT_BLACK_LIGHT_2}/>
                </View>
            </View>
            <View style = {styles.InputContainer}>
                <View style = {{flexDirection: "row",alignItems:"center"}}>
                    <Icon name="badge" size={20} color={Colors.DEFAULT_BLACK} style={{marginRight: 10}}/>  
                    <TextInput
                        style = {styles.inputText} 
                        placeholder='Register Number (eg: VDA19CS043)'
                        placeholderTextColor= {Colors.DEFAULT_BLACK_LIGHT_2}/>
                </View>
            </View>
            <View style = {styles.InputContainer}>
                <View style = {{flexDirection: "row",alignItems:"center"}}>
                    <Icon name="lock-outline" size={20} color={Colors.DEFAULT_BLACK} style={{marginRight: 10}}/>  
                    <TextInput
                        style = {styles.inputText} 
                        placeholder='Password'
                        placeholderTextColor= {Colors.DEFAULT_BLACK_LIGHT_2}/>
                </View>
            </View>
            <View style = {styles.InputContainer}>
                <View style = {{flexDirection: "row",alignItems:"center"}}>
                    <Icon name="lock" size={20} color={Colors.DEFAULT_BLACK} style={{marginRight: 10}}/>  
                    <TextInput
                        style = {styles.inputText} 
                        placeholder='Confirm Password'
                        placeholderTextColor= {Colors.DEFAULT_BLACK_LIGHT_2}/>
                </View>
            </View>                                   
          </View>
          <TouchableHighlight style={styles.LoginBtn}>
              <Text style={{fontWeight:'500',color:Colors.DEFAULT_BLACK}}>Register</Text>
          </TouchableHighlight>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bottomView: {
        width: "100%",
        height: 400,
        backgroundColor: 'white',
        position: 'absolute',
        elevation: 5,
        bottom: 0,
        left: 0,
        right: 0,
        padding: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    line:{
        width:70,
        height:4,
        backgroundColor: Colors.DEFAULT_LIGHT_GRAY,
    },
    LogoImg: {
        width: 200,
        height: 70,
        backgroundColor: 'white',
        position:'relative',
        top: 80
    },
    InputContainer: {
        width: '100%',
        height: 45,
        backgroundColor: Colors.THEME_COLOR_LIGHT_1,
        borderRadius: 8,
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.THEME_COLOR_LIGHT_2,
        marginVertical: 10,
        justifyContent: "center"
    },
    inputText : {
        fontSize: 15,
        textAlignVertical: 'center',
        padding: 0,
        height: 20,
        color: Colors.DEFAULT_BLACK,
        flex: 1,
    },
    LoginBtn: {
        paddingHorizontal: 45,
        paddingVertical: 10,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 50,
        backgroundColor: Colors.DEFAULT_YELLOW,
    },
    RegisterText: {
        color: Colors.DEFAULT_BLACK,
        fontWeight:'500',
        fontSize:25,
        marginVertical:10
    },
}) 