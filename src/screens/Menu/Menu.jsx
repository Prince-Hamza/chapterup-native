import React, { useState } from 'react'
import { Dimensions, Text } from 'react-native'
import { TouchableHighlight, TouchableOpacity } from 'react-native'
import FlexView from '../../components/FlexView'
import ImageWrap from '../../components/ImageWrap'
import { Content } from '../../styles/styles'

export default function Menu({ navigation }) {

    const [paths, setPaths] = useState([
        {
            title: 'Home',
            route: 'Home'
        },
        {
            title: 'About Us',
            route: 'AboutUs'
        },
        {
            title: 'Meet Our Professionals',
            route: 'Professionals'
        },
        {
            title: 'Get Support',

            route: 'getSupport'
        },
        {
            title: 'Sign Up',
            route: 'signUp'
        },
        {
            title: 'Profile',
            route: 'Login'
        },
        {
            title: 'Messenger',
            route: 'Messenger'
        },
        {
            title: 'Groups',
            route: 'Groups'
        },
        {
            title: 'scroller',
            route: 'scroller'
        },

    ])


    return (
        <ImageWrap
            style={{ height: Dimensions.get('screen').height, ...Content.colCentrify }}
            source={{ uri: 'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/129325364/original/afaddcb9d7dfaaf5bff7ef04101935814665ac16/design-an-attractive-background-for-your-website.png' }}
        >
            {paths.map((item) => {
                return (
                    <TouchableOpacity key={Math.random()} onPress={() => { 
                        navigation.navigate(item.route) 
                        }}>
                        <FlexView style={{ marginBottom: 30 }}>
                            <Text style={{ color: 'white' }}>
                                {item.title}
                            </Text>
                        </FlexView>
                    </TouchableOpacity>
                )
            })}
        </ImageWrap>
    )
}
