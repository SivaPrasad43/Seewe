/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { TouchableOpacity , Text } from 'react-native'
import React,{useState} from 'react'
import Colors from '../contents/colors/Colors'

const Category = ({name,textColor,btnColor}) => {

  const [status,SetStatus]  = useState("All")
  const hello = "hello"
  
  return (
    <TouchableOpacity
      onPress={()=>console.log('hello ${hello}')}>
        <Text style={{
            backgroundColor: btnColor,
            paddingHorizontal: 15,
            paddingVertical: 4,
            fontSize: 14,
            marginHorizontal: 3,
            borderWidth:1,
            borderRadius: 50,
            color: textColor,
            borderColor:btnColor
        }}>{name}</Text>
  </TouchableOpacity>
  )
}

export default Category