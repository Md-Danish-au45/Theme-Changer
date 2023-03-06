import React, { useState, useEffect } from 'react'
import AppNavigation from './src/navigation/AppNavigation'
import { EventRegister } from 'react-native-event-listeners'
import { NavigationContainer } from '@react-navigation/native'
import themeContext from './src/config/ThemeContext'
import theme from './src/config/theme'
export default function App() {
  const [mode, setMode] = useState(false);

  useEffect(() => {
    let evenListner = EventRegister.addEventListener("ChangeTheme", (data) => {
      setMode(data);
    })
    return () => {
      EventRegister.removeEventListener(evenListner)
    }

  })
  return (
    <themeContext.Provider value={mode=== true ? theme.dark : theme.light}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </themeContext.Provider>
  )
}