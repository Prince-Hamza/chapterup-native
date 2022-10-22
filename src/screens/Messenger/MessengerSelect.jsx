import React from 'react'
import FlexView from '../../components/FlexView'
import Header from '../../components/Header'
import Login from '../Login/Login'
import Tabs from './Tabs'
import MessengerWrap from './MessengerWrap'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'


export default function MessengerSelect({ navigation }) {

    const user = firebase.auth().currentUser

    return (
        <FlexView>
            <Header />
            {!user && <Login />}
            {user && <MessengerWrap />}
        </FlexView>
    )
}
