/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
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
import { TouchableOpacity } from 'react-native-gesture-handler';
import database from '@react-native-firebase/database'
import { useNavigation } from '@react-navigation/native';

const Category_items = [
  {name : "All" },
  {name : "Category-1" },
  {name : "Category-2" },
  {name : "Category-3" },
  {name : "Category-4" }
]

const product = [
  {id : 1,name: "Sivaprasadhgvxhgasvxhgavshgav",discription : "blah bah blah sdvsdblah blah sdghcvshgdcvfvv sdfdsfsfd  sdfsdfsshg",price:"100"},
  {id : 2,name: "rahul krishna",discription : "blah bah blah blah blah",price:"50"},
  {id : 3,name: "nadhil",discription : "blah bah blah blah blah",price:"140"},
  {id : 4,name: "buji",discription : "blah bah blah blah blah",price:"120"},
  {id : 5,name: "product-5",discription : "blah bah blah blah blah",price:"300"},
  {id : 6,name: "product-6",discription : "blah bah blah blah blah",price:"140"},
  {id : 7,name: "product-7",discription : "blah bah blah blah blah",price:"120"},
]

let ItemRef = database().ref('/Item')


const HomeScreen = () => {

  const [username,setUsername] = useState("")

  useEffect(() => {
    ItemRef.on('value',snapshot => {
        let data = snapshot.val()
        const items = Object.values(data)
        setUsername(items)
        console.log(username)
  })},[])

  const navigation = useNavigation(); 

  return (
    <View style={styles.conatiner}>
          <View style={styles.HomeHeaderBottom}>
            <View>
              <Text style={styles.HomeTitle}>Hi</Text>
              <Text style={styles.HomeSubTitle}>Good Morning</Text>
            </View>
            <TouchableOpacity 
              style={styles.sellItBtn}
              onPress={()=>navigation.navigate('HomeNavigation',{screen:"Sell Item"})}>
              <Icon name="add" size={20} color={"white"}/>
              <Text style={{fontWeight:"bold",color:"white"}}>Sell Item</Text>
            </TouchableOpacity>
          </View>
          <View>
            <ScrollView>
              <FlatList
                data={Category_items}
                horizontal
                keyExtractor={(item)=>item.name}
                showsHorizontalScrollIndicator={false}
                ListHeaderComponent={()=> <ItemSeparator width={10}/>}
                ListFooterComponent={()=> <ItemSeparator width={10}/>}
                renderItem={({item})=><Category name = {item.name}/>}>  
              </FlatList>
            </ScrollView>
          </View>
          <ScrollView style={{marginTop: 10}}>
            <View 
              style={{margin: "2%"}}>
              <FlatList
                data={product}
                numColumns={2}
                keyExtractor={(item) => item.id}
                renderItem={({item}) =><ProductCard name={item.name} discription={item.discription} price = {item.price}/>}>
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
  conatiner: {
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
    color: Colors.DEFAULT_BLACK,
    fontSize:23,
    fontWeight: "bold"
  },
  HomeSubTitle:{
    color: Colors.DEFAULT_BLACK_LIGHT_2,
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
