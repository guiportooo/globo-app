import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  ScrollView,
} from 'react-native'

export default function NewsDetail({ route, navigation }) {
  const [isLoading, setLoading] = useState(true)
  const [allPostData, setAllPostData] = useState([])
  const { url } = route.params
  const selectedPost = allPostData.find((post) => post.url === url)

  useEffect(() => {
    fetch(
      'https://newsapi.org/v2/everything?q=tech&from=2021-03-25&sortBy=publishedAt&apiKey=ca07e0ffeb1341e69ae2076252a1a3cc'
    )
      .then((response) => response.json())
      .then((json) => setAllPostData(json.articles))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [])

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Go back</Text>
      </TouchableOpacity>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <ScrollView>
          <Text style={styles.title}>{selectedPost.title}</Text>
          <Image
            source={{ uri: selectedPost.urlToImage }}
            style={styles.storyImage}
          />
          <Text style={styles.blurb}>{selectedPost.description}</Text>
          <Text style={styles.content}>{selectedPost.content}</Text>
        </ScrollView>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  button: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 20,
  },
  buttonText: {
    fontFamily: 'OpenSansBold',
  },
  title: {
    fontFamily: 'OpenSansBold',
    fontSize: 20,
    padding: 20,
  },
  storyImage: {
    width: '100%',
    height: 300,
  },
  blurb: {
    fontFamily: 'OpenSansItalic',
    fontSize: 14,
    padding: 20,
  },
  content: {
    flex: 1,
    fontFamily: 'OpenSans',
    fontSize: 16,
    paddingTop: 30,
    paddingBottom: 100,
    paddingLeft: 20,
    paddingRight: 20,
  },
})
