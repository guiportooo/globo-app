import 'react-native-gesture-handler'
import React from 'react'
import { Platform, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_400Regular_Italic,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans'
import AppLoading from 'expo-app-loading'
import { navigationRef } from './RootNavigation'
import Header from './Header'
import Footer from './Footer'
import Homepage from './Home'
import NewsDetail from './NewsDetail'
import About from './About'

const Stack = createStackNavigator()

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSansRegular: OpenSans_400Regular,
    OpenSansItalic: OpenSans_400Regular_Italic,
    OpenSansBold: OpenSans_700Bold,
  })

  if (!fontsLoaded) return <AppLoading />

  return (
    <NavigationContainer
      style={{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}
      ref={navigationRef}
    >
      <Stack.Navigator initialRouteName='Globomantics' headerMode='screen'>
        <Stack.Screen
          name='Globomantics'
          component={Homepage}
          options={{ header: () => <Header headerDisplay='Globomantics' /> }}
        />
        <Stack.Screen
          name='NewsDetail'
          component={NewsDetail}
          options={{ header: () => <Header headerDisplay='News' /> }}
        />
        <Stack.Screen
          name='About'
          component={About}
          options={{
            header: () => <Header headerDisplay='About Globomantics' />,
          }}
        />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  )
}
