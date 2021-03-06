import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import logo from './assets/globomantics-logo-bug-black.png'

export default function Header(props) {
  return (
    <View style={styles.header}>
      <Image source={logo} style={{ width: 35, height: 35 }} />
      <View>
        <Text style={styles.text}>{props.headerDisplay}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    marginTop: getStatusBarHeight(),
  },
  text: {
    fontFamily: 'OpenSansRegular',
  },
})
