import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Sign from "./src/pages/auth/Sign"
import Login from "./src/pages/auth/Login"
import FlashMessage from "react-native-flash-message";
import auth from "@react-native-firebase/auth"
import Menu from './src/pages/Menu/Menu';

const Stack = createNativeStackNavigator()
function App() {
  const [userSession,setUserSession]=React.useState()

  React.useEffect(()=>{
    auth().onAuthStateChanged(user=>{
      setUserSession(!!user)
    })
  })
  
  const AuthStack=()=>{
    return(
      <Stack.Navigator>
        <Stack.Screen name='LoginPage' component={Login} />
        <Stack.Screen name='SignPage' component={Sign} />
      </Stack.Navigator>
    )
  }


  return (
    <NavigationContainer>
      {
        !userSession?<AuthStack />:
        <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='MenuPage' component={Menu} />
        </Stack.Navigator>
      }
      <FlashMessage position="top" /> 
    </NavigationContainer>
  )
}

export default App