import 'react-native-gesture-handler'
import React from 'react'
import { Platform, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import Header from './Header'
import Homepage from './Home'

const Stack = createStackNavigator()

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
  })

  if (!fontsLoaded) return <AppLoading />

  return (
    <NavigationContainer
      style={{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}
    >
      <Stack.Navigator initialRouteName='Globomantics' headerMode='screen'>
        <Stack.Screen
          name='Globomantics'
          component={Homepage}
          options={{ header: () => <Header headerDisplay='Globomantics' /> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
