import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import * as RootNavigation from './RootNavigation'

export default function Footer() {
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => RootNavigation.navigate('Globomantics')}
      >
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => RootNavigation.navigate('About')}
      >
        <Text>About</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => RootNavigation.navigate('Quote')}
      >
        <Text>Quote</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text>Catalog</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: 80,
  },
  button: {
    padding: 20,
  },
})
