import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import firebase from 'firebase/compat/app'
import Main from './src/screens/Main.jsx';

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

firebase.initializeApp(config);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator key="root" initialRouteName='ok' name='h'>
        <Stack.Screen
          name="Home"
          component={Main}
          options={{ title: 'Chapterup', headerShown: false }}
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
