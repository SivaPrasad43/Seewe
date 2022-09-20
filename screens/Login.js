/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Image, ImageBackground } from 'react-native'
import React,{useState,useEffect, createContext} from 'react'
import Colors from '../contents/colors/Colors'
import Home from './Home'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import firestore from '@react-native-firebase/firestore';

export default function Login({navigation}) {

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [UserData,SetUserData] = useState("")

    const context = createContext()

    useEffect(()=>{
        firestore()
        .collection('Register')
        .get()
        .then(querySnapshot => {
            const UserData = []
            // console.log('Total users: ', querySnapshot.size);
            querySnapshot.forEach(doc => {
            const {uid,name,phone,password,reg_number} = doc.data()
            UserData.push({
                uid,
                name,
                phone,
                password,
                reg_number
              })
            SetUserData(UserData)  
            }); 
        });
    })

    function CheckLogin(user,pass){
        UserData.forEach(item => {
            console.log(item.name)
            try {
                if (item.reg_number == user && item.password == pass){
                    navigation.navigate('TabNavigation',{uid: item.uid, uname: item.name, ureg: item.reg_number, phone: item.phone})
                    setUsername(null)
                    setPassword(null)
                }             
            } catch (error) {
                console.warn(error);
            }
        })
    }
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../res/login_background.png')} resizeMode="cover" style={{flex:1,width:"100%",justifyContent:'center'}}/>
      <View style = {styles.bottomView}>
          <View style={styles.line}/>
          <Text style = {styles.LoginText}>Login</Text>
          <View style = {styles.InputContainer}>
              <View style = {{flexDirection: "row",alignItems:"center"}}>
                <Icon name="badge" size={20} color={Colors.DEFAULT_BLACK} style={{marginRight: 10}}/>  
                <TextInput
                    style = {styles.inputText} 
                    placeholder='Enter Register Number'
                    value={username}
                    onChangeText={setUsername}
                    placeholderTextColor= {Colors.DEFAULT_BLACK_LIGHT_2}/>
              </View>
          </View>
          <View style = {styles.InputContainer}>
              <View style = {{flexDirection: "row",alignItems:"center"}}>
                <Icon name="lock" size={20} color={Colors.DEFAULT_BLACK} style={{marginRight: 10}}/>  
                <TextInput
                    style = {styles.inputText}
                    secureTextEntry = {true} 
                    value={password}
                    onChangeText={setPassword}
                    placeholder='Enter Password'
                    placeholderTextColor= {Colors.DEFAULT_BLACK_LIGHT_2}/>
              </View>
          </View>
          <TouchableOpacity 
          style={styles.LoginBtn}
          onPress={()=>CheckLogin(username,password)}>
              <Text style={{fontWeight:'500',fontSize: 15,color:Colors.DEFAULT_BLACK}}>Login</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity 
          style={styles.LoginBtn}
          onPress={()=>navigation.navigate("TabNavigation")}>
              <Text style={{fontWeight:'500',fontSize: 15,color:Colors.DEFAULT_BLACK}}>Go to Home</Text>
          </TouchableOpacity> */}
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: Colors.DEFAULT_BLACK_LIGHT_2}}>Don't you have an account?</Text>
            <Text 
                style={styles.RegText}
                onPress={()=> navigation.navigate('Register')}>Register</Text>
          </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    bottomView: {
        width: '100%',
        height: 320,
        backgroundColor: 'white',
        position: 'absolute',
        elevation: 2,
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
        marginTop: -20,
        marginBottom: 10
    },
    LogoImg: {
        width: 200,
        height: 70,
        backgroundColor: 'white',
        position:'relative',
        top: 200
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
        color: 'black',
        flex: 1,
    },
    LoginBtn: {
        paddingHorizontal: 45,
        paddingVertical: 10,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 50,
        backgroundColor: Colors.DEFAULT_YELLOW
    },
    LoginText: {
        color: 'black',
        fontWeight:'500',
        fontSize:25,
        marginVertical:10
    },
    fpText: {
        color: 'black',
        alignSelf: 'flex-end',
        marginHorizontal: 10
    },
    RegText: {
        color: Colors.THEME_COLOR,
        fontWeight: 'bold',
        marginLeft: 5
    }
}) 