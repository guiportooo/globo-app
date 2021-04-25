import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from 'react-native'

export default function Homepage({ navigation }) {
  const [isLoading, setLoading] = useState(true)
  const [newsData, setData] = useState([])

  useEffect(() => {
    fetch(
      'https://newsapi.org/v2/everything?q=tech&from=2021-03-25&sortBy=publishedAt&apiKey=ca07e0ffeb1341e69ae2076252a1a3cc'
    )
      .then((response) => response.json())
      .then((json) => setData(json.articles))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [])

  const storyItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('NewsDetail', { url: item.url })}
      >
        <View style={styles.listings}>
          <Text style={styles.title}>{item.title}</Text>
          <Image style={styles.thumbnail} source={{ uri: item.urlToImage }} />
          <Text style={styles.blurb}>{item.description}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={newsData}
          keyExtractor={(_, index) => index.toString()}
          renderItem={storyItem}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '100%',
    padding: 20,
  },
  listings: {
    paddingTop: 15,
    paddingBottom: 25,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  title: {
    paddingBottom: 10,
    fontFamily: 'OpenSans',
    fontWeight: 'bold',
  },
  thumbnail: {
    height: 100,
    width: '98%',
  },
  blurb: {
    fontFamily: 'OpenSans',
    fontStyle: 'italic',
  },
})
