/* eslint-disable prettier/prettier */
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React,{useEffect, useState} from 'react'
import Colors from '../contents/colors/Colors'
import { CList2 } from '../contents/Category_items'

export default function ProductCategory() {
    const [ProductOption,SetProductOption] = useState(null)
    const [Active,SetActive] = useState(null)

    return (
        <View>
            <View style={styles.CategoryContainer}>
                {CList2.map((item,index)=>{
                    return(
                        <TouchableOpacity 
                            key={index} 
                            style={[styles.SelectBtn,Active === index && styles.ActiveSelectBtn]} 
                            onPress={() => {SetProductOption(item),SetActive(index)}}>
                            <Text style={[styles.CategoryText,Active === index && {color:"white"}]}>{item}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
            <View>
                <Text>Selected option: {ProductOption}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    CategoryContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        paddingVertical:5
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
})