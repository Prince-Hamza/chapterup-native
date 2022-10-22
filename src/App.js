import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import firebase from 'firebase/compat/app'
import Main from './screens/Main/Main'
import AboutUs from './screens/AboutUs/AboutUs'
import Professionals from './screens/Professionals/Professionals'
import Menu from './screens/Menu/Menu'
import GetSupport from './screens/GetSupport/GetSupport'
import InfoForm from './screens/Form/InfoForm'
import Login from './screens/Login/Login.jsx'
import MessengerSelect from './screens/Messenger/MessengerSelect'
import Scroller from './screens/Scroller/Scroller'

const Stack = createNativeStackNavigator()

const config = {
  apiKey: "AIzaSyBhKtn4TK7LY4cG6zOZ8RPWBx12IDrxAhc",
  authDomain: "my-first-project-ce24e.firebaseapp.com",
  databaseURL: "https://my-first-project-ce24e.firebaseio.com",
  projectId: "my-first-project-ce24e",
  storageBucket: "my-first-project-ce24e.appspot.com",
  messagingSenderId: "627497957398",
  appId: "1:627497957398:web:8049cba44bd6c2ee49dd37"
}

firebase.initializeApp(config)

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator key="root" initialRouteName='ok' name='h'>

        <Stack.Screen
          name="Home"
          component={Main}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Messenger"
          component={MessengerSelect}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          path="AboutUs"
          name="AboutUs"
          component={AboutUs}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Professionals"
          component={Professionals}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="getSupport"
          component={GetSupport}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="signUp"
          component={InfoForm}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="scroller"
          component={Scroller}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
