import React, { useState } from 'react'
import FlexView from '../../components/FlexView'
import { Content, Fonts } from '../../styles/styles'
import { Image, Text } from 'react-native'
import Space from '../../components/Space'
import ChapButton from '../../components/ChapButton'
import Section from '../../components/Section'
import Therapy from '../Therapy/Therapy'
import Header from '../../components/Header'
import { ScrollView } from 'react-native-gesture-handler'

export default function AboutuUs({ navigation }) {

    const [info, setInfo] = useState({
        section1: {
            title: 'Helping you Heal towards your next chapter',
            theme: 'https://chapterup.com/wp-content/uploads/2021/11/Online-1024x683.jpg'
        },
        section2: {
            title: 'Meet some of our coaches',
            imageList: [
                {
                    title: 'Marie',
                    description: 'Is a Mental Wellness Coach that assists you with finding practical solutions to any difficulties you might be facing',
                    image: 'https://chapterup.com/wp-content/uploads/2022/06/medium.png'
                },
                {
                    title: 'Gave',
                    description: 'Has been trained as a Life Coach and brings helps you build life goals and execute on them',
                    image: 'https://chapterup.com/wp-content/uploads/2022/06/medium.png'
                },
                {
                    title: 'Kendall',
                    description: 'Focusses on energy healing practices to bring the trapped negative energy to the surface and release them',
                    image: 'https://chapterup.com/wp-content/uploads/2022/06/medium.png'
                }
            ]

        },


    })

    return (
        <FlexView style={Content.colTopCenter}>
            <Header navigation={navigation} />
            <ScrollView>
                <Therapy />
                <Section
                    style={{ height: 400 }}
                    title={'Helping you Heal towards your next chapter'}
                    theme={info.section1.theme}
                />


                <Section
                    // theme={'https://chapterup.com/wp-content/uploads/2022/06/medium.png'}
                    backgroundColor={'#f78da7'}
                    title={info.section2.title}
                    listData={info.section2.imageList}
                />

                <Section
                    style={{ height: 400, textAlign: 'center' }}
                    title={'Join Us as a Lead'}
                    description={'We are looking for people that are passionate about Mental Wellbeing and want to help people through their healing journey. Join our mission and let’s find a pathway to help live a healthier and happier life. Contact us today to join the team.'}
                    theme={info.section1.theme}
                />
            </ScrollView>
        </FlexView>

    )
}
