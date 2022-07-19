/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { Text,View, ScrollView, FlatList,StyleSheet, } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Category from '../components/Category.js';
import Colors from '../contents/colors/Colors.js';
import ItemSeparator from '../components/ItemSeparator.js';
import ProductCard from '../components/ProductCard.js';
import Test_1 from './Test_1.js';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Category_items = ["Home","Category","Education","sivaprasad"]

const product = [
  {id : 1,name: "Sivaprasad",price:"100"},
  {id : 2,name: "rahul krishna",price:"50"},
  {id : 3,name: "nadhil",price:"140"},
  {id : 4,name: "buji",price:"120"},
  {id : 5,name: "product-5",price:"300"},
  {id : 6,name: "product-6",price:"140"},
  {id : 7,name: "product-7",price:"120"},
]

const HomeScreen = () => {
  return (
    <View style={styles.conatiner}>
          <View style={styles.HomeHeaderBottom}>
            <View>
              <Text style={styles.HomeTitle}>Hi User</Text>
              <Text style={styles.HomeSubTitle}>Good Morning</Text>
            </View>
            <TouchableOpacity style={styles.sellItBtn}>
              <Icon name="add" size={20} color={"white"}/>
              <Text style={{fontWeight:"bold",color:"white"}}>Sell Item</Text>
            </TouchableOpacity>
          </View>
          <View>
            <ScrollView>
              <FlatList
                data={Category_items}
                horizontal
                keyExtractor={(item)=>item}
                showsHorizontalScrollIndicator={false}
                ListHeaderComponent={()=> <ItemSeparator width={10}/>}
                ListFooterComponent={()=> <ItemSeparator width={10}/>}
                renderItem={({item})=><Category name = {item}/>}>  
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
                renderItem={({item}) =><ProductCard name={item.name} price = {item.price}/>}>
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
