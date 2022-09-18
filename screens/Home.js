/* eslint-disable prettier/prettier */

import { Text,View, FlatList,StyleSheet, ActivityIndicator,Image,RefreshControl } from 'react-native'
import React, {useState,useEffect} from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Category from '../components/Category.js';
import Colors from '../contents/colors/Colors.js';
import ItemSeparator from '../components/ItemSeparator.js';
import ProductCard from '../components/ProductCard.js';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SellItem from './SellItem.js';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import AppBar from '../components/AppBar.js';
import database from '@react-native-firebase/database'
import storage,{ firebase } from '@react-native-firebase/storage'

const CList1 = ["All","Study Meterials","Books","Arts","Profiles"]
let ProductData = []
let FilterData = []
const link = 'https://firebasestorage.googleapis.com/v0/b/seewe-762fa.appspot.com/o/demo.jpg?alt=media&token=839d1cad-6e4c-4732-9902-58f1bab24925'

const UserImg = require("../res/userImg.jpg")

const HomeScreen = ({uid,uname,ureg}) => {

  const [username,setUsername] = useState("")
  const [Product,SetProduct] = useState([])
  const [Filter,setFilter] = useState([])
  const [ActiveIndex,SetActiveIndex] = useState(0)
  const [loading,SetLoading] = useState(true) 
  const [Fav,setFav] = useState([])
  const [url,setUrl] = useState("")

  const navigation = useNavigation(); 

  const getData = () => {
    firestore()
    .collection('productList')
    .get()
    .then(
        querySnapshot => {
          const Product = []
          querySnapshot.forEach(doc => {
          const Plist = doc.data()
          // console.log(Plist)
          Product.push({
            userid: Plist.userid, 
            id: Plist.id,
            name: Plist.ProductName,
            disc: Plist.Discription,
            price: Plist.Price,
            category: Plist.Category
          })
          if (ActiveIndex === 0) {
            FilterData = []
            FilterData = Product
          }else{
            FilterData = []
            FilterData = ProductData.filter((item) => item.category === CList1[ActiveIndex]) 
          }
          SetLoading(false)
        })
        SetProduct(Product)
        ProductData = Product
        console.log(Product.map(product => product.category))
        console.log(Product.map(product => product.disc))
        console.log(ActiveIndex)
        console.log(CList1[ActiveIndex])
        console.log("ProductData : ",ProductData)
        console.log("FilterData : ",FilterData)
    })
  }

  async function getImage() {
    const url = await storage()
    .ref('user/'+ uid + '.jpeg')
    .getDownloadURL()
    console.log("download : ",url)
    setUrl(url)
  }

  const FavItems = Product.map(product => product.id)

  console.log( "Fav : ",FavItems)

  const Favorites = () => {
            database().ref('/Fav').on('value',snapshot => {
              let data = snapshot.val()
              const items = Object.values(data)
              console.log("fav items : ",items)
              setFav(data)
          })
}

  useEffect(()=>{
    getData();
    getImage();
    // Favorites();
  },[ActiveIndex])
 
  const ProductCardRender = ({item}) => (
    <ProductCard userid={item.userid} id={item.id} name={item.name} description={item.disc} price = {item.price}/>
  )

  const CategoryList = () => {
    return(
      <View style={{flexDirection: "row",justifyContent:"space-between"}}>
        {CList1.map((item,index)=>(
          <TouchableOpacity
            key={index}
            onPress={()=>SetActiveIndex(index)}>
              <Text style={[styles.CategoryText, ActiveIndex === index && styles.CategoryActive]}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    )
  }

  return (
    <View style={styles.container}>
          {loading ? (
          <ActivityIndicator
            style={styles.Loader}
            visible = {loading}
            size = "large"
          />):(<></>)}
          <AppBar/>
          <View style={styles.HomeHeaderBottom}>
          <View style={{flexDirection:"row",alignItems:"center"}}>
            <View style={styles.UserData}>
                    <Image 
                        style={styles.UserImage}
                        source={url ? {uri: url } : {uri: link}}></Image>
            </View>
            <View>
              <Text style={styles.HomeTitle}>Hey {uname}!</Text>
              <Text style={styles.HomeSubTitle}>Welcome to Seewe✨</Text>
            </View>
          </View>
            <TouchableOpacity 
              style={styles.sellItBtn}
              onPress={()=>navigation.navigate("Sell Item",{userid: userid})}>
              <Icon name="add" size={20} color={"white"}/>
              <Text style={{fontWeight:"bold",color:"white"}}>Sell Item</Text>
            </TouchableOpacity>
          </View>
          <View style={{paddingHorizontal: 20}}>
              <CategoryList/> 
          </View>
            <View 
              style={{margin: "2%",marginBottom: "38%"}}>
              <FlatList
                data={FilterData}
                numColumns={2}
                keyExtractor={item =>item.id}                
                refreshControl={
                    <RefreshControl refreshing={loading} onRefresh={getData} />
                  }
                showsVerticalScrollIndicator={false}
                
                renderItem={ProductCardRender}>
              </FlatList>
            </View>
    </View>
  ) 
}

export default function Home({route}) {
    const [Uid,SetUid] = useState(route.params.uid) 
    const [Uname,SetUname] = useState(route.params.uname)
    const [Ureg,SetUreg] = useState(route.params.ureg)
  return (
      <HomeScreen uid = {Uid} uname = {Uname} ureg= {Ureg}/>
  )
}

const styles = StyleSheet.create({
  CategoryText:{
    fontSize: 15,
    paddingHorizontal: 5,
    paddingVertical: 3
  },
  CategoryActive:{
    color: Colors.THEME_COLOR,
    borderBottomWidth: 4,
    borderBottomColor: Colors.THEME_COLOR
  },
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  HomeHeaderBottom : {
    paddingHorizontal: 15,
    paddingVertical: 5,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  HomeTitle: {
    color: Colors.THEME_COLOR,
    fontSize:18,
    fontWeight: "bold",
  },
  HomeSubTitle:{
    fontSize: 14,
    color: Colors.DEFAULT_BLACK_LIGHT_1,
  },
  sellItBtn:{
    width: 100,
    height: 40,
    backgroundColor: Colors.THEME_COLOR,
    flexDirection:"row",
    elevation: 5,
    borderRadius: 50,
    borderColor: "#0E918A",
    borderWidth: 1,
    marginVertical:10,
    justifyContent: "center",
    alignItems: "center"
  },
  Loader: {
    position:"absolute",
    left: "45%",
    top: "50%"
  },
  UserData: {
    height: 40,
    width:40,
    backgroundColor: Colors.DEFAULT_LIGHT_GRAY,
    borderRadius: 50,
    marginRight: 8
  },
  UserImage: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    borderRadius: 50
  },
})
