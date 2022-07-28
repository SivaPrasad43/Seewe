import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../contents/colors/Colors'

export default function NotificationCard({title,date,data}) {
  return (
    <View style={styles.Conatiner}>
      <View style={styles.Header}>
        <Text style={styles.Title}>{title}</Text>
        <Text style={styles.date}>Date : {date}</Text>
      </View>
      <View>
        <Text style={styles.Details}>{data}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    Conatiner: {
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.THEME_COLOR,
        borderRadius: 10,
        backgroundColor: "white",
        elevation: 3
    },
    Title : {
        fontSize: 20,
        color: Colors.DEFAULT_BLACK,
        fontWeight: "500"
    },
    date : {
        color: Colors.DEFAULT_BLACK_LIGHT_1,
        fontSize: 12,
        paddingTop: 5
    },
    Details : {
        color : Colors.DEFAULT_BLACK_LIGHT_1,
        paddingTop: 5
    }
})