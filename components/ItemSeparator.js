/* eslint-disable prettier/prettier */
import { View} from 'react-native'
import React from 'react'

const ItemSeparator = ({height,width}) => {
  return (
    <View style={{height,width}}/>
  )
}

ItemSeparator.defaultProps = {
    height: 0,
    width: 0,
}

export default ItemSeparator