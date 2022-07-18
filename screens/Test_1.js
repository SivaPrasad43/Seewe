/* eslint-disable prettier/prettier */
import { View,StyleSheet, Text,TouchableHighlight,TextInput} from 'react-native'
import React,{useState,useEffect} from 'react'
import database from '@react-native-firebase/database'


let addItem = Item =>{
    database().ref('/Item').push({
        name: Item
    })
}

let ItemRef = database().ref('/Item')

export default function Test_1() {
    const [name,SetName] = useState("")
    const [ItemArray,SetItemArray] = useState([])

    const ItemPush = () => {
        addItem(name)
        SetName("")
        alert("Item ADDED SUCCESSFULLY")
    }

    useEffect(() => {
        ItemRef.on('value',snapshot => {
            let data = snapshot.val()
            const items = Object.values(data)
            SetItemArray(items)
    })}, [])

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.inputContainer}
        placeholder='Type Item'
        value={name}
        onChangeText={text => SetName({text})}/>
      <TouchableHighlight 
        style={styles.btn}
        onPress={ItemPush}>
          <Text style={{color: "white"}}>Add item</Text>
      </TouchableHighlight>
      <View>
          {(ItemArray.length > 0) 
            ? ItemArray.map((item,index) => {
                console.log(item.name.text)
                return(
                    <Text>{item.name.text}</Text>
                )
            })
          : <Text> No Data</Text>
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20
    },
    btn: {
        width: "100%",
        height: 40,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center"
    },
    inputContainer: {
        width: "100%",
        height: 40,
        borderWidth: 1,
        marginVertical: 10
    }
})
