/* eslint-disable prettier/prettier */

import { Text,View, ScrollView, FlatList,StyleSheet, } from 'react-native'
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
import { CList1 } from '../contents/Category_items.js';

// const product = [
//   {id : 1,name: "Sivaprasadhgvxhgasvxhgavshgav",discription : "blah bah blah sdvsdblah blah sdghcvshgdcvfvv sdfdsfsfd  sdfsdfsshg",price:"100"},
//   {id : 2,name: "rahul krishna",discription : "blah bah blah blah blah",price:"50"},
//   {id : 3,name: "nadhil",discription : "blah bah blah blah blah",price:"140"},
//   {id : 4,name: "buji",discription : "blah bah blah blah blah",price:"120"},
//   {id : 5,name: "product-5",discription : "blah bah blah blah blah",price:"300"},
//   {id : 6,name: "product-6",discription : "blah bah blah blah blah",price:"140"},
//   {id : 7,name: "product-7",discription : "blah bah blah blah blah",price:"120"},
// ]

const HomeScreen = () => {

  const [username,setUsername] = useState("")
  const [Product,SetProduct] = useState([])
  const [ActiveIndex,SetActiveIndex] = useState(0)

  const navigation = useNavigation(); 

  useEffect(()=>{
    firestore()
    .collection('productList')
    .get()
    .then(
        querySnapshot => {
          const Product = []
          querySnapshot.forEach(doc => {
          const {ProductName,Discription,Price} = doc.data()
          Product.push({
            id : doc.id,
            ProductName,
            Discription,
            Price
          })
          console.log(Product)
          SetProduct(Product)
        })
    })
  },[])

  const ProductCardRender = ({item}) => (
    <ProductCard name={item.ProductName} discription={item.Discription} price = {item.Price}/>
  )

  const CategoryList = () => {
    return(
      <View style={{flexDirection: "row",justifyContent:"space-between"}}>
        {CList1.map((item,index)=>(
          <TouchableOpacity
            key={index}
            onPress={()=>SetActiveIndex(index)} 
            >
              <Text style={[styles.CategoryText, ActiveIndex == index && styles.CategoryActive]}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    )
  }

  return (
    <View style={styles.container}>
          <View style={styles.HomeHeaderBottom}>
            <View>
              <Text style={styles.HomeSubTitle}>Welcome to</Text>
              <Text style={styles.HomeTitle}>Seewe Market</Text>
            </View>
            <TouchableOpacity 
              style={styles.sellItBtn}
              onPress={()=>navigation.navigate('HomeNavigation',{screen:"Sell Item"})}>
              <Icon name="add" size={20} color={"white"}/>
              <Text style={{fontWeight:"bold",color:"white"}}>Sell Item</Text>
            </TouchableOpacity>
          </View>
          <View style={{paddingHorizontal: 20}}>
              <CategoryList/> 
          </View>
          <ScrollView style={{marginTop: 10}}>
            <View 
              style={{margin: "2%"}}>
              <FlatList
                data={Product}
                numColumns={2}
                keyExtractor={item =>item.id}
                renderItem={ProductCardRender}>
              </FlatList>
            </View>
          </ScrollView>
    </View>
  ) 
}

export default function Home() {
  return (
      <HomeScreen/>
  )
}

const styles = StyleSheet.create({
  CategoryText:{
    fontSize: 15,
    paddingHorizontal: 5,
    paddingVertical: 3
  },
  CategoryActive:{
    color: Colors.BUTTON_COLOR,
    borderBottomWidth: 4,
    borderBottomColor: Colors.BUTTON_COLOR
  },
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  HomeHeaderBottom : {
    padding: 15,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  HomeTitle: {
    color: Colors.BUTTON_COLOR,
    fontSize:25,
    fontWeight: "bold",
  },
  HomeSubTitle:{
    fontSize: 18,
    color: Colors.DEFAULT_BLACK_LIGHT_1,
  },
  sellItBtn:{
    width: 100,
    height: 40,
    backgroundColor: Colors.BUTTON_COLOR,
    flexDirection:"row",
    elevation: 5,
    borderRadius: 50,
    marginVertical:10,
    justifyContent: "center",
    alignItems: "center"
  }
})
