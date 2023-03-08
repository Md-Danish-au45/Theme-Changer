import { View, Text, Button, Switch, StyleSheet } from "react-native";
import React, { useState, useContext } from "react";
import { EventRegister } from "react-native-event-listeners";
import themeContext from "../config/ThemeContext";
import EvilIcons from "react-native-vector-icons/EvilIcons";

export default function HomeScreen({ navigation }) {
  const [mode, setMode] = useState(false);
  const theme = useContext(themeContext);

  // background color
  const containerColor = {
    backgroundColor: theme.background,
  };

  // text color
  const textColor = {
    color: theme.color,
  };

  return (
    // container
    <View style={[styles.container, containerColor]}>
      <EvilIcons style={[styles.text, textColor]} name="sc-user" size={70} />

      <Text style={[styles.text, textColor]}>welcome to Home Screen</Text>

      <Switch
        value={mode}
        onValueChange={(value) => {
          setMode(value);
          EventRegister.emit("ChangeTheme", value);
        }}
      />

      <View style={styles.button}>
        <Button
          title="view profile"
          onPress={() => navigation.navigate("Profile")}
        />
      </View>
    </View>
  );
}


// css 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 20,
  },

  button: {
    paddingTop: 20,
  },
  
});
