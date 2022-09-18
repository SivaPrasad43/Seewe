/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native'
import React,{useEffect, useState} from 'react'
import Colors from '../contents/colors/Colors'
import Icon from 'react-native-vector-icons/FontAwesome'
import ProductCategory from '../components/ProductCategory'
import ImagePicker from 'react-native-image-crop-picker';
import firestore from '@react-native-firebase/firestore';
import { CList2 } from '../contents/Category_items'
import { utils } from '@react-native-firebase/app'
import storage,{ firebase } from '@react-native-firebase/storage'
import uuid from 'react-native-uuid';

var ImgPath=""
const imageName = 'images'
let id = ""

const defaultStorageBucket = storage();
const secondaryStorageBucket = firebase.app().storage('gs://seewe-762fa.appspot.com');

const reference = secondaryStorageBucket.ref("imageName/image.jpeg");

function DisplayData(userid,ProductName,Discription,Price,Category){
  firestore()
  .collection('productList')
  .add({
    userid: userid,
    id : id,
    Category: Category,
    ProductName: ProductName,
    Discription: Discription,
    Price : Price,
  })
  .then(() => {
    // console.log('Product added!');
  });
  console.log("useEffect run")
}

// function uploadImage(ImgPath){
//   const task = reference.putFile(ImgPath);
//   task.on('state_changed', taskSnapshot => {
//     console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
//   });
  
//   task.then(() => {
//     console.log('Image uploaded to the bucket!');
//   });
//  }

export default function SellItem({navigation,route}) {

  const [ProductName,SetProductName] = useState("")
  const [Discription,SetDiscription] = useState("")
  const [Category,SetCategory] = useState(null)
  const [ProductImg,SetProductImg] = useState(null)
  const [Price,SetPrice] = useState(null)
  const [Active,SetActive] = useState(null)
  const [uploading,setUploading] = useState(null)
  const [userid,setUuid] = useState(route.params.userid)

  useEffect(() => { 
    id = uuid.v4(); 
    console.log(id)
  },[]);


  const uploadImage = async () => {
    const uploadUri = ProductImg
    // let filename = uploadUri.substring(uploadUri.lastIndexOf("/") + 1)
    let filename = id+".jpeg"
    setUploading(true)

    try {
      console.log("file naaaaaaaaameeeee :",filename)
      await storage().ref('/images/' + userid + '_' +filename).putFile(uploadUri)
      setUploading(false)
      Alert.alert('Successfully uploaded')
    } catch (error) {
      console.log(error)
    }

    SetProductImg(null)
  }

  function LoadImg() {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true
    }).then(image => {
      ImgPath = image.path
      console.log(ImgPath)
      SetProductImg(ImgPath)
    });
  }

  return (
    <ScrollView>
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
          <View>
              <View style={styles.CategoryContainer}>
                  {CList2.map((item,index)=>{
                      return(
                          <TouchableOpacity 
                              key={index} 
                              style={[styles.SelectBtn,Active === index && styles.ActiveSelectBtn]} 
                              onPress={() => {SetCategory(item),SetActive(index)}}>
                              <Text style={[styles.CategoryText,Active === index && {color:"white"}]}>{item}</Text>
                          </TouchableOpacity>
                      )
                  })}
              </View>
              <View>
                  <Text>Selected option: {Category}</Text>
              </View>
          </View>
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
            onPress={()=>{
              DisplayData(userid,ProductName,Discription,Price,Category)
              uploadImage(ImgPath)
              navigation.navigate('Home2')
            }}>
              <Text style={{fontWeight:'500',fontSize: 15,textAlign:"center"}}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
        backgroundColor: Colors.DEFAULT_YELLOW,
    },
    UploadImg : {
        width: "40%",
        backgroundColor: Colors.THEME_COLOR,
        paddingHorizontal: 5,
        paddingVertical:4,
        borderRadius: 50  
      },
      SelectBtn: {
        borderWidth: 1,
        borderColor: Colors.THEME_COLOR ,
        paddingVertical: 3,
        paddingHorizontal: 10,
        borderRadius: 50,
        margin: 3
    },
    ActiveSelectBtn:{
        borderWidth: 1,
        borderColor: Colors.THEME_COLOR ,
        paddingVertical: 3,
        paddingHorizontal: 10,
        backgroundColor:Colors.THEME_COLOR,
        borderRadius: 50,
        margin: 3
    },
    CategoryText: {
        color: Colors.DEFAULT_BLACK
    }, 
    CategoryContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      paddingVertical:5
  },
})