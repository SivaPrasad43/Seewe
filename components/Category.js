/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { TouchableHighlight , Text } from 'react-native'
import React from 'react'
import Colors from '../contents/colors/Colors'

const Category = ({name}) => {
  return (
    <TouchableHighlight>
        <Text style={{
            backgroundColor: Colors.THEME_COLOR_LIGHT_1,
            paddingHorizontal: 20,
            paddingVertical: 8,
            fontSize: 14,
            marginHorizontal: 3,
            borderWidth:1,
            borderRadius: 50,
            borderColor:Colors.THEME_COLOR
        }}>{name}</Text>
  </TouchableHighlight>
  )
}

export default Category