import { View, Text, Button, Switch,StyleSheet } from 'react-native'
import React,{useState,useContext} from 'react'
import { EventRegister } from 'react-native-event-listeners';
import themeContext from '../config/ThemeContext';

export default function HomeScreen({navigation}) {
    const [mode, setMode] = useState(false);
    const theme = useContext(themeContext)
  return (
    <View style={[styles.container,{backgroundColor:theme.background}]}>
      <Text style={[styles.text,{color:theme.color}]}>welcome to Home Screen</Text>
      <Switch 
      value={mode} 
       onValueChange={(value) =>{

      setMode(value)
      EventRegister.emit("ChangeTheme", value)
                        
                        }}/>
      <View style={styles.button} >
      <Button title='view profile' onPress={() => navigation.navigate("Profile")}/>

        
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
        fontSize:20,
        paddingBottom:20
    },
    button:{
        paddingTop:20,

    }
})