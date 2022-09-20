/* eslint-disable prettier/prettier */
import { View, Text,Modal,StyleSheet,Pressable,Alert } from 'react-native'
import React,{useState} from 'react'

export default function Logout({navigation}) {
    const [modalVisible, setModalVisible] = useState(false);

    const ModalView = () => {
        return(
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Are you sure want to Logout?</Text>
                <View style={{flexDirection: "row"}}>
                    <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => {
                        setModalVisible(!modalVisible),
                        navigation.navigate("Login2")}}
                    >
                    <Text style={styles.textStyle}>Yes</Text>
                    </Pressable>
                    <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                    >
                    <Text style={styles.textStyle}>No</Text>
                    </Pressable>
                </View>
              </View>
            </View>
          </Modal>
    
        )
    }
  return (
<View style={styles.centeredView}>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <ModalView/>
        <Text style={styles.textStyle}>Logout</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      width:"70%",
      margin: 20,
      backgroundColor: "white",
      borderRadius: 10,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      paddingHorizontal: 20,
      paddingVertical: 4,
      marginHorizontal: 5,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "red",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });