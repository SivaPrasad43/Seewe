/* eslint-disable quotes */
// eslint-disable-next-line prettier/prettier
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import { View, Text,StyleSheet,TouchableOpacity, Image } from 'react-native'
import React, { useEffect,useState } from 'react'
import Colors from '../contents/colors/Colors'
import { useNavigation } from '@react-navigation/native';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import database from '@react-native-firebase/database'
import storage,{ firebase } from '@react-native-firebase/storage'

const rupee = "₹"
const productImg = "../res/product.jpg"
const UserImg = require("../res/userImg.jpg")
const link = 'https://firebasestorage.googleapis.com/v0/b/seewe-762fa.appspot.com/o/demo.jpg?alt=media&token=839d1cad-6e4c-4732-9902-58f1bab24925'

const secondaryStorageBucket = firebase.app().storage('gs://seewe-762fa.appspot.com');

const ProductCard = ({userid,id,name,description,price}) => {
    const navigation = useNavigation(); 
    const [liked,setLiked] = useState(false)
    const [url,setUrl] = useState("")
    const [owner,setOwner] = useState("")


    const user = id
    console.log("uuuuusseeer : ",user)
    console.log("userid---->",userid)
    let addItem = ()=>{
        database().ref('/Fav/'+id).push({
            id: id,
        })
    }

    async function getImage() {
        const url = await storage()
        .ref('images/'+ userid + '_' + id + '.jpeg')
        .getDownloadURL()
        console.log("download : ",url)
        setUrl(url)
        return url
      }

    async function getOwner() {
        const owner = await storage()
        .ref('user/' + userid +'.jpeg')
        .getDownloadURL()
        setOwner(owner)
    }  

      useEffect(() => {
        getImage()
        getOwner()
      },[])

    
    const ItemPush = () => {
        addItem()
        // console.log("Item ADDED SUCCESSFULLY")
    }

    const removeItem = () => {
        database().ref('/Fav/'+id).remove();
    }


  return (
      <View style={{margin:"2%",width: "46%",position:"relative"}}>
        <TouchableOpacity 
            style={styles.favorite}
            onPress={()=> setLiked ((isLiked) =>{
                setLiked(!isLiked)
                if (liked === false){
                    console.log(user+"Liked")
                    ItemPush()
                }else{
                    console.log("UnLiked")
                    removeItem()
                }
            })}>
            <Icon name={liked ? 'cards-heart':'cards-heart-outline'  } color={liked ? "red" : Colors.DEFAULT_BLACK_LIGHT_2  } size={23}/>
        </TouchableOpacity> 
        <TouchableOpacity 
            style={styles.ProductConatainer}
            onPress={()=>navigation.navigate('Product',{PName: name, Disc: description, Price: price,PImage: url})}>
            <View style={styles.ImageConatiner}>
                <Image
                    style={styles.ProductImage}
                    source={url ? {uri: url } : {uri: link}}/>
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
                        ellipsizeMode="tail">{description}</Text>
                </View>
                <View style={styles.UserData}>
                    <Image 
                        style={styles.UserImage}
                        source={owner ? {uri: owner } : {uri: link}}></Image>
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