import React, { useState, useContext } from 'react'
import { FormContext } from './FormContext'
import { Content } from '../../styles/styles'
import Row from '../../components/Row'
import Col from '../../components/Col'
import ChapupButton from '../../components/ChapButton'
import { Dimensions } from 'react-native'
import Space from '../../components/Space'
import { Text } from 'react-native'
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import FlexView from '../../components/FlexView'
import ImageWrap from '../../components/ImageWrap'
import RoundedImage from '../../components/RoundedImage'
import Header from '../../components/Header'
import ProfileView from './ProfileView'
import Login from '../Login/Login'



export default function Profile({ navigation }) {

    const [first, setfirst] = useState(second)
    const user = firebase.auth().currentUser

    return (
        <FlexView>
            <Header navigation={navigation} />

            {user && <ProfileView />}
            {!user && <Login />}

        </FlexView>
    )
}


const Styles = ({
    roundImage: {
        position: 'absolute',
        top: 500,
        left: 500
    }
})