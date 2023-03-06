import { View, Text, Button, Switch,StyleSheet } from 'react-native'
import React,{useState} from 'react'

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>welcome to Profile Screen</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontWeight:"bold",
        fontSize:20,
        paddingBottom:20
    },

})