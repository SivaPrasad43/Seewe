/* eslint-disable prettier/prettier */
import { View, Text,StyleSheet,TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Colors from '../contents/colors/Colors'
import { useNavigation } from '@react-navigation/native';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

const rupee = "₹"
const productImg = require("../res/product.jpg")
const UserImg = require("../res/userImg.jpg")

const ProductCard = ({name,discription,price}) => {
    const navigation = useNavigation(); 
    const [liked,setLiked] = useState(false)
  return (
      <View style={{margin:"2%",width: "46%",position:"relative"}}>
        <TouchableOpacity 
            style={styles.favorite}
            onPress={()=> setLiked ((isLiked) =>!isLiked)}>
            <Icon name={liked ? 'cards-heart':'cards-heart-outline'  } color={liked ? "red" : Colors.DEFAULT_BLACK_LIGHT_2  } size={23}/>
        </TouchableOpacity> 
        <TouchableOpacity 
            style={styles.ProductConatainer}
            onPress={()=>navigation.navigate('HomeNavigation',{screen:"Product"})}>
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
        position: "relative"
    },
    ImageConatiner: {
        width: "100%",
        height: "60%",
        backgroundColor: Colors.DEFAULT_LIGHT_GRAY,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    ProductImage:{
        width: "100%",
        height: "100%",
        resizeMode: "cover"
    },
    ProductDetails:{
        width: "100%",
        padding: 8,
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
        fontSize:9
    },
    ProductPrize:{
        position: "absolute",
        bottom: 2,
        left: 8
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
    },
    favorite:{
        position: "absolute",
        zIndex: 10,
        right: 5,
        top: 5
    }  
})
export default ProductCard