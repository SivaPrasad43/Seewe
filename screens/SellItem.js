/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React,{useEffect, useState} from 'react'
import Colors from '../contents/colors/Colors'
import Icon from 'react-native-vector-icons/FontAwesome'
import ProductCategory from '../components/ProductCategory'
import ImagePicker from 'react-native-image-crop-picker';
import firestore from '@react-native-firebase/firestore';
import CList from '../contents/Category_items'

const data = [
  { value: 'Apple' },
  { value: 'Samsung' },
  { value: 'Blackberry' },
  { value: 'Apple' },
  { value: 'Samsung' },
  { value: 'Blackberry' },
];

var ImgPath=""

function LoadImg() {
  ImagePicker.openPicker({
    width: 300,
    height: 400,
    cropping: true
  }).then(image => {
    ImgPath = image.path
  });
}

function DisplayData(ProductName,Discription,Price){
  firestore()
  .collection('productList')
  .add({
    Category: "",
    ProductName: ProductName,
    Discription: Discription,
    Price : Price,
    Image: ""
  })
  .then(() => {
    console.log('Product added!');
  });
  console.log("useEffect run")
}

export default function SellItem() {

  const [ProductName,SetProductName] = useState("")
  const [Discription,SetDiscription] = useState("")
  const [Category,SetCategory] = useState("")
  const [ProductImg,SetProductImg] = useState("")
  const [Price,SetPrice] = useState(null)

  return (
    <View style={styles.container}>
      <View style={{marginVertical: 5}}>
        <Text style={styles.inputText}>Product name</Text>
        <View style = {styles.inputContainer}>
              <View style = {{flexDirection: "row",alignItems:"center"}}>
              <Icon name="shopping-basket" size={16} color={Colors.DEFAULT_BLACK} style={{marginRight: 10}}/>  
                <TextInput
                    style = {styles.inputText} 
                    value = {ProductName}
                    onChangeText = {SetProductName}
                    placeholder='Enter Product Name'
                    placeholderTextColor= {Colors.DEFAULT_BLACK_LIGHT_2}/>
              </View>
          </View>
      </View>
      <View>
        <Text style={styles.inputText}>Category</Text>
        <ProductCategory/>
      </View>
      <View style={{marginVertical: 5}}>
        <Text style={styles.inputText}>Discription</Text>
        <View style = {styles.inputContainer}>
              <View style = {{flexDirection: "row",alignItems:"center"}}>
                <TextInput
                    style = {styles.inputText} 
                    multiline={true}
                    value = {Discription}
                    onChangeText = {SetDiscription}
                    placeholder='Enter Discription'
                    placeholderTextColor= {Colors.DEFAULT_BLACK_LIGHT_2}/>
              </View>
          </View>
      </View>
      <View style={{marginVertical: 5}}>
        <Text style={styles.inputText}>Price</Text>
        <View style = {styles.inputContainer}>
              <View style = {{flexDirection: "row",alignItems:"center"}}>
                <Icon name="rupee" size={20} color={Colors.DEFAULT_BLACK} style={{marginRight: 10}}/>  
                <TextInput
                    style = {styles.inputText} 
                    placeholder='Enter Product Price'
                    keyboardType='number-pad'
                    value={Price}
                    onChangeText={SetPrice}
                    placeholderTextColor= {Colors.DEFAULT_BLACK_LIGHT_2}/>
              </View>
          </View>
      </View>
      <View style={{marginVertical: 5,flexDirection: "row", justifyContent:"center"}}>
        <TouchableOpacity 
          style={styles.UploadImg}
          onPress={LoadImg}>
          <Text style={{color: "white",fontWeight:'500',fontSize: 15,textAlign:"center"}}>Upload Image</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: "row", justifyContent:"center"}}>
        <TouchableOpacity 
          style={styles.SubmitBtn}
          onPress={()=>DisplayData(ProductName,Discription,Price)}>
            <Text style={{fontWeight:'500',fontSize: 15,textAlign:"center"}}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        padding: 20
    },
    inputText: {
        color: Colors.DEFAULT_BLACK,
        width: "90%",
        marginVertical: 3
    },
    inputContainer: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Colors.THEME_COLOR,
        paddingHorizontal: 10,
        marginVertical: 4
    },
    SubmitBtn: {
        width: "50%",
        paddingHorizontal: 45,
        paddingVertical: 10,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 50,
        backgroundColor: Colors.DEFAULT_YELLOW
    },
    UploadImg : {
        width: "40%",
        backgroundColor: Colors.THEME_COLOR,
        paddingHorizontal: 5,
        paddingVertical:4,
        borderRadius: 50  
      }
})