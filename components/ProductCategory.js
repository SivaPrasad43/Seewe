/* eslint-disable prettier/prettier */
import { View, Text,Pressable,StyleSheet } from 'react-native'
import React,{useEffect, useState} from 'react'
import Colors from '../contents/colors/Colors'
import { CList2 } from '../contents/Category_items'

export default function ProductCategory() {
    const [ProductOption,SetProductOption] = useState(null)

    return (
        <View>
            <View style={styles.CategoryContainer}>
                {CList2.map((item)=>{
                    return(
                        <Pressable style={styles.SelectBtn} onPress={() => SetProductOption(item.name)}>
                            <Text style={styles.CategoryText}>{item.name}</Text>
                        </Pressable>
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
        flexWrap: "wrap"
    },
    SelectBtn: {
        borderWidth: 1,
        borderColor: Colors.THEME_COLOR ,
        flexDirection: "row",
        paddingVertical: 3,
        paddingHorizontal: 10,
        borderRadius: 50,
        margin: 3
    },
    CategoryText: {
        color: Colors.DEFAULT_BLACK
    }
})