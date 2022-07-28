/* eslint-disable prettier/prettier */
import { View, Text,Pressable,StyleSheet } from 'react-native'
import React,{useState} from 'react'
import Colors from '../contents/colors/Colors'

export default function ProductCategory({data}) {
    const [ProductOption,SetProductOption] = useState(null)

    return (
        <View>
            <View style={styles.CategoryContainer}>
                {data.map((item)=>{
                    return(
                        <Pressable style={styles.SelectBtn} onPress={() => SetProductOption(item.value)}>
                            <Text style={styles.CategoryText}>{item.value}</Text>
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