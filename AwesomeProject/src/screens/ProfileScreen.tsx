import { View, Text, Button, Switch,StyleSheet } from 'react-native'
import React,{useContext} from 'react'
import themeContext from '../config/ThemeContext'
import EvilIcons from "react-native-vector-icons/EvilIcons"


export default function ProfileScreen(){
  const theme = useContext(themeContext)

  
// background color
const containerColor = {
  backgroundColor:theme.background,
}
// text color
const textColor={
  color:theme.color,
  
}


  return (
    <View style={[styles.container,containerColor]}>
      <Text style={[styles.text,textColor]}>welcome to Profile Screen</Text>
      <View style={[styles.icons]}>
      <EvilIcons style={[styles.logo,textColor]} name="sc-twitter" size={60} />
      <EvilIcons style={[styles.logo,textColor]} name="sc-google-plus" size={60} />
      <EvilIcons style={[styles.logo,textColor]} name="sc-telegram" size={60} />
      </View>
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
        fontSize:40,
        paddingBottom:20
    },
    logo:{
      backgroundColor:"darkcyan",
      height:60,
      width:60,
      borderRadius:50,
      textAlign:"center", 
    },
    icons:{
      flex:1, 
      alignItems:"center",
      flexDirection:"row",
    }
})