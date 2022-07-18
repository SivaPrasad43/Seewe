/* eslint-disable prettier/prettier */
import { View, Text,StyleSheet,Pressable } from 'react-native'
import React from 'react'
import Colors from '../contents/colors/Colors'

const rupee = "₹"

const ProductCard = ({name,price}) => {
  return (
      <View style={{margin:"2%",width: "46%"}}>
        <Pressable style={styles.ProductConatainer}>
        <View style={styles.ProductImage}></View>
        <View style={styles.ProductDetails}>
            <View style={styles.ProductData}>
                <Text style={styles.ProductName}>{name}</Text>
                <Text style={styles.ProductDisc}>Discription</Text>
                <Text style={styles.PriceTitle}>Price</Text>
                <Text style={styles.Price}>{rupee}{price}</Text>
            </View>
            <View style={styles.UserData}></View>
        </View>
        </Pressable>
      </View>
  )
}

const  styles = StyleSheet.create({
    ProductConatainer:{
        width: "100%",
        height: 200,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.DEFAULT_LIGHT_GRAY
    },
    ProductImage: {
        width: "100%",
        height: "60%",
        backgroundColor: Colors.DEFAULT_LIGHT_GRAY,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    ProductDetails:{
        padding: 5,
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems: "center"
    },
    ProductName:{
        fontWeight: "bold"
    },
    ProductDisc:{
        fontSize:8
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
    }
    
})
export default ProductCard