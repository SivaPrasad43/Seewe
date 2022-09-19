/* eslint-disable prettier/prettier */
import { View, ScrollView,FlatList } from 'react-native'
import React from 'react'
import NotificationCard from '../components/NotificationCard'
import AppBar from '../components/AppBar'
import firestore from '@react-native-firebase/firestore';
import { useState, useEffect } from 'react';

// const Notifications = [
//     {
//         id: 1,
//         title: "Notification1",
//         date:"12/12/2021",
//         data:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
//     },
//     {
//         id: 2,
//         title: "Notification2",
//         date:"12/12/2021",
//         data:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
//     },
//     {
//         id: 3,
//         title: "Notification3",
//         date:"12/12/2021",
//         data:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
//     },
//     {
//         id: 4,
//         title: "Notification4",
//         date:"12/12/2021",
//         data:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
//     },
// ]


export default function Notification() {

    const [Notification,SetNotification] = useState("")

    useEffect(() =>{
        getData()
    })

    const getData = () => {
        firestore()
        .collection('Notifications')
        .get()
        .then(
            querySnapshot => {
              const Notification = []
              querySnapshot.forEach(doc => {
              const Notify = doc.data()
              // console.log(Plist)
              Notification.push({
                id : doc.id,
                title: Notify.Title,
                content: Notify.Content
              })
            })
            SetNotification(Notification)
        })
      }

  return (
    <View>
      <AppBar/>
        <FlatList
            data={Notification}
            keyExtractor={(item) => item.id}
            renderItem={({item}) =><NotificationCard title={item.title} date = {item.date} data= {item.content}/>}>
        </FlatList>
    </View>
  )
}