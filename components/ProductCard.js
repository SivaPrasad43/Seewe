/* eslint-disable prettier/prettier */
import { View, Text,StyleSheet,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Colors from '../contents/colors/Colors'
import { useNavigation } from '@react-navigation/native';

const rupee = "₹"
const productImg = require("../res/product.jpg")
const UserImg = require("../res/userImg.jpg")

const ProductCard = ({name,discription,price}) => {
    const navigation = useNavigation()
  return (
      <View style={{margin:"2%",width: "46%"}}>
        <TouchableOpacity 
            style={styles.ProductConatainer}
            onPress={()=>navigation.navigate("Product",{name: "siva"})}>
            <View style={styles.ImageConatiner}>
                <Image
                    style={styles.ProductImage}
                    source={productImg}/>
            </View>
            <View style={styles.ProductDetails}>
                <View style={styles.ProductData}>
                    <Text 
                        style={styles.ProductName}
                        numberOfLines={1}
                        ellipsizeMode="tail">{name}</Text>
                    <Text 
                        style={styles.ProductDisc}
                        numberOfLines={2}
                        ellipsizeMode="tail">{discription}</Text>
                </View>
                <View style={styles.UserData}>
                    <Image 
                        style={styles.UserImage}
                        source={UserImg}></Image>
                </View>
            </View>
            <View style={styles.ProductPrize}>
                        <Text style={styles.PriceTitle}>Price</Text>
                        <Text style={styles.Price}>{rupee}{price}</Text>
            </View>
        </TouchableOpacity>
      </View>
  )
}

const  styles = StyleSheet.create({
    ProductConatainer:{
        width: "100%",
        height: 230,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.DEFAULT_LIGHT_GRAY,
    },
    ImageConatiner: {
        width: "100%",
        height: "60%",
        backgroundColor: Colors.DEFAULT_LIGHT_GRAY,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    ProductImage:{
        width: "100%",
        height: "100%",
        resizeMode: "cover"
    },
    ProductDetails:{
        width: "100%",
        padding: 5,
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems: "center"
    },
    ProductData: {
        width: "70%"
    },
    ProductName:{
        fontWeight: "bold"
    },
    ProductDisc:{
        fontSize:8
    },
    ProductPrize:{
        position: "absolute",
        bottom: 2,
        left: 5
    },
    PriceTitle:{
        fontSize: 10,
        fontWeight:"800",
        marginTop: 3
    },
    Price: {
        fontWeight: "bold",
        color: "green",
        fontSize:19,
        marginTop: -2
    },
    UserData: {
        height: 45,
        width:45,
        backgroundColor: Colors.DEFAULT_LIGHT_GRAY,
        borderRadius: 50,
    },
    UserImage: {
        height: "100%",
        width: "100%",
        resizeMode: "cover",
        borderRadius: 50
    }   
})
export default ProductCard