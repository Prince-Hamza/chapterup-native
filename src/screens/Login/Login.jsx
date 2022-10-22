import React, { useState } from 'react'
import FlexView from '../../components/FlexView'
import Header from '../../components/Header'
import { ScrollView, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Space from '../../components/Space'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import ChapupButton from '../../components/ChapButton'
import { Content } from '../../styles/styles'
import { webAuth } from '../../backend/auth/firebaseAuth'
const auth = new webAuth()

export default function Login({ navigation }) {

  const [loggedIn, setLoggedIn] = useState(firebase.auth().currentUser ? true : false)
  const [username, setUserName] = useState()
  const [profilePic, setprofilePic] = useState('https://www.seekpng.com/png/detail/959-9597316_ashely-round-headshot-girl.png')
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [mode, setMode] = useState('login')

  const signUp = async () => {
    await auth.createUser({
      authMode: 'email',
      userName: username,
      email: email,
      password: password,
      profilePic: profilePic
    })
  }

  const signIn = () => {
    // auth.createUser('email', 'prince@gmail.com', 'pass1234')
  }

  const handleClick = () => {
    if (mode === 'login') signIn()
    if (mode === 'signup') signUp()
  }

  return (
    <FlexView>

      <Header navigation={navigation} />
      <ScrollView>
        <Space pixels={25} />
        <TextInput style={Styles.input} placeholder='Username' onChange={(e) => { setUserName(e.nativeEvent.text) }} />
        <Space pixels={25} />

        <TextInput style={Styles.input} placeholder='Email' onChange={(e) => { setEmail(e.nativeEvent.text) }} />
        <Space pixels={25} />

        <TextInput style={Styles.input} placeholder='Password' onChange={(e) => { setPassword(e.nativeEvent.text) }} />
        <Space pixels={25} />


        <FlexView style={Content.rowCentrify}>
          <ChapupButton
            style={{ ...Content.rowCentrify }}
            title={mode === 'signup' ? 'Sign up' : 'Login'}
            onClick={() => { handleClick() }}
            disabled={username && password && email ? false : true}
          />
        </FlexView>

        <Space pixels={15} />

        <TouchableOpacity onPress={() => { setMode('signup') }}>
          <Text style={{ textAlign: 'center' }}>
            {mode === 'signup' ? 'login' : 'signup'}
          </Text>
        </TouchableOpacity>

      </ScrollView>
    </FlexView>
  )
}

const Styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    width: 300,
  }
})






