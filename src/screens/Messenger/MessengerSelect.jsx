import React, { useEffect, useState } from 'react'
import FlexView from '../../components/FlexView'
import Header from '../../components/Header'
import Login from '../Login/Login'
import Tabs from './Tabs'
import MessengerWrap from './MessengerWrap'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { webAuth } from '../../backend/auth/firebaseAuth'
const auth = new webAuth()

export default function MessengerSelect({ navigation }) {

    // const [user, setUser] = useState(firebase.auth().currentUser)

    const user = ({
        uid: 'MH9Zl7yx0fUykIjjxUrr8Jrmd3h1',
        displayName:'humzi',
        password:'124',
        city:'iLahore',
        country:'Pakistan',
        ip:'123.234',
        photoURL:'https://www.seekpng.com/png/detail/959-9597316_ashely-round-headshot-girl.png'

    })

    const init = async () => {
        var res = await auth.getLoginSession()
       // if (res.user) setUser(res.user)
    }

    const effect = () => {
        init()
    }

    useEffect(effect, [])


    return (
        <FlexView>
            {!user && <Login navigation={navigation} />}
            {user && <MessengerWrap />}
        </FlexView>
    )
}
