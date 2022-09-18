/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView,ScrollView } from 'react-native'
import React,{useEffect,useState} from 'react'
import Colors from '../contents/colors/Colors'
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';
import storage,{ firebase } from '@react-native-firebase/storage'


const rupee = "₹"
const productImg = require("../res/product.jpg")
const url = ""
const link = 'https://firebasestorage.googleapis.com/v0/b/seewe-762fa.appspot.com/o/demo.jpg?alt=media&token=839d1cad-6e4c-4732-9902-58f1bab24925'

export default function Product({navigation,route}) {

    const [id,SetId] = useState(route.params.id)
    const [Product,SetProductName] = useState(route.params.PName) 
    const [Disc,SetDisc] = useState(route.params.Disc)
    const [Price,SetPrice] = useState(route.params.Price)
    const [userid,Setuserid] = useState(route.params.userid)
    const [url,setUrl] = useState("")
    let Images = route.params.PImage
    console.log("images: ",Images)

    async function getImage() {
        const url = await storage()
        .ref('user/'+ userid + '.jpeg')
        .getDownloadURL()
        console.log("download : ",url)
        setUrl(url)
      }

    useEffect(() => {
        getImage()
    })  

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.ImageConatiner}>
            <Image
                style={styles.ProductImage} 
                source={Images ? {uri: Images } : {uri: link}}></Image>
        </View>
        <ScrollView>
            <View style={styles.ProductContainer}>
                <View style={styles.TitleContainer}>
                    <View style={{width:"100%",flexDirection:"row",justifyContent:"space-between"}}>
                        <View style={styles.ProductTitle}>
                            <Text style={{fontSize: 11,color: "black",fontWeight:"500"}}>PRODUCT NAME</Text>
                            <Text style={styles.TitleText}>{Product}</Text>
                        </View>
                        <View>
                            <Text style={{marginTop: 5,fontSize: 11,color:"black",fontWeight:"500",textAlign:"right"}}>PRICE</Text>
                            <Text style={styles.PriceText}>{rupee}{Price}</Text>
                        </View>
                    </View>
                </View>
                <View style={{borderTopWidth:1,borderBottomWidth:1,marginTop:15,paddingBottom:10,borderColor:"lightgray"}}>
                    <Text style={{marginTop: 6,fontSize: 11,color: "black",fontWeight:"500",marginBottom:2}}>OWNER</Text>
                    <View style={{flexDirection:"row",marginTop:6}}>
                        <Image 
                            style = {styles.ProfileImg}
                            source={url ? {uri: url } : {uri: link}}
                            />
                        <View>
                            <Text style={{fontWeight:"bold",fontSize:14}}>Sivaprasad</Text>
                            <Text style={{fontSize: 10}}>VDA19CS043</Text>
                        </View>
                    </View>
                </View>
                <View style={{marginTop:5}}>
                    <Text style={{marginTop: 10,fontSize: 11,color: "black",fontWeight:"500",marginBottom:2}}>DESCRIPTION</Text>
                    <Text style={{width: "90%",fontSize: 16}}>{Disc}</Text>
                </View>
            </View>
        </ScrollView>
        <View style={{flex:1,alignItems:"flex-end",marginRight:10}}>
            <View style={styles.ProfileContainer}>
                {/* <View style = {styles.Profile}>
                    <Text style={{fontSize: 15,fontWeight: "500",marginHorizontal:5}}>Sivaprasad</Text>
                </View> */}
                <TouchableOpacity  style={styles.whatsapp}>
                    <Icon name='whatsapp' size={25} color="white"/>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
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
        padding: 10,
        margin: 15,
        backgroundColor: "white",
        borderRadius: 8,
        elevation: 3,
        marginBottom: 80
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
        width:"75%",
        marginVertical: 5,
        justifyContent: "flex-end"
    },
    TitleText: {
        fontSize: 25,
        color: Colors.DEFAULT_BLACK,
        fontWeight: "600"
    },
    PriceText: {
        fontSize: 25,
        color: "green",
        fontWeight: "600"
    },
    ProfileContainer: {
        // width: "60%",
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems: "center",
        margin: 5,
        padding: 6,
        backgroundColor:"green",
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "green",
        position: "absolute",
        bottom: 8,
        elevation: 5
    },
    Profile:{
        flexDirection: "row",
        alignItems: "center"
    },
    ProfileImg:{
        width: 35,
        height: 35,
        borderRadius: 50,
        marginRight: 8,
        backgroundColor: "lightgray",
        padding: 5
    },
    whatsapp: {
        width: 45,
        height: 45,
        justifyContent:"center",
        alignItems: "center",
        borderRadius: 50,
        backgroundColor: "green",
    }
})