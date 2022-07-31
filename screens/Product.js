/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React,{useEffect} from 'react'
import Colors from '../contents/colors/Colors'
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';

const rupee = "₹"
const productImg = require("../res/product.jpg")

export default function Product({fname}) {
    const navigation = useNavigation()

  return (
    <View style={styles.container}>
        <View style={styles.ImageConatiner}>
            <Image
                style={styles.ProductImage} 
                source={productImg}></Image>
        </View>
        <View style={styles.ProductContainer}>
            <View style={styles.TitleContainer}>
                <View style={styles.ProductTitle}>
                    <Text style={{fontWeight: "500"}}>Product Name</Text>
                    <Text style={styles.TitleText}></Text>
                </View>
            </View>
            <Text style={{marginTop: 6,fontWeight: "500"}}>Discription</Text>
            <Text style={{width: "90%"}}></Text>
            <View>
                <Text style={{marginTop: 6,fontWeight: "500"}}>Price</Text>
                <Text style={styles.PriceText}>{rupee}</Text>
            </View>
        </View>
        <View style={{flex:1,alignItems: "center"}}>
            <View style={styles.ProfileContainer}>
                <View style = {styles.Profile}>
                    <Image style = {styles.ProfileImg}/>
                    <Text style={{fontSize: 15,fontWeight: "500",marginHorizontal:5}}>Sivaprasad</Text>
                </View>
                <TouchableOpacity  style={styles.whatsapp}>
                    <Icon name='whatsapp' size={25} color="white"/>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
    },
    ImageConatiner: {
        width: "100%",
        height: 250,
        backgroundColor: "lightgray"
    },
    ProductContainer: {
        padding: 10
    },
    ProductImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover"
    },
    TitleContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    ProductTitle: {
        width: "80%",
        marginVertical: 5
    },
    TitleText: {
        fontSize: 20,
        color: Colors.DEFAULT_BLACK
    },
    PriceText: {
        fontSize: 22,
        color: "green",
    },
    ProfileContainer: {
        width: "90%",
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems: "center",
        margin: 5,
        padding: 6,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "green",
        position: "absolute",
        bottom: 0
    },
    Profile:{
        flexDirection: "row",
        alignItems: "center"
    },
    ProfileImg:{
        width: 45,
        height: 45,
        borderRadius: 50,
        backgroundColor: "lightgray",
        padding: 5
    },
    whatsapp: {
        width: 40,
        height: 40,
        justifyContent:"center",
        alignItems: "center",
        borderRadius: 50,
        backgroundColor: "green"
    }
})