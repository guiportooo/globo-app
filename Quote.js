import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

export default function QuotePage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [submitError, setSubmitError] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const postMessage = () => {
    if (!name | !email | !message) {
      setSubmitError(true)
    } else {
      setSubmitError(false)
      setSubmitted(true)
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {submitError ? (
          <Text style={styles.status}>
            You didn't enter a Name, Email or Message
          </Text>
        ) : (
          <Text style={styles.status}>
            Please enter the requested information
          </Text>
        )}
        {submitted ? (
          <Text>
            Name: {name} Email: {email}
          </Text>
        ) : (
          <Text style={styles.req}>* required</Text>
        )}
        <Text style={styles.label}>Name *</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <Text style={styles.label}>Email *</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <Text style={styles.label}>Phone</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPhone(text)}
          value={phone}
        />
        <Text style={styles.label}>Message *</Text>
        <TextInput
          style={styles.multi}
          onChangeText={(text) => setMessage(text)}
          value={message}
          multiline
          numberOfLines={6}
        />
        <TouchableOpacity style={styles.button} onPress={() => postMessage()}>
          <Text>Submit Quote</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fff',
  },
  status: {
    paddingTop: 10,
    paddingBottom: 15,
  },
  req: {
    fontFamily: 'OpenSansItalic',
    paddingTop: 10,
  },
  label: {
    fontFamily: 'OpenSansRegular',
    fontSize: 18,
    paddingTop: 20,
  },
  input: {
    fontFamily: 'OpenSansRegular',
    fontSize: 26,
    width: 250,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
  },
  multi: {
    fontFamily: 'OpenSansRegular',
    fontSize: 16,
    width: 300,
    height: 300,
    borderColor: 'black',
    borderWidth: 1,
  },
  button: {
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: 10,
  },
})
