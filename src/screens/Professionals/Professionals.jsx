import React, { useState } from 'react'
import FlexView from '../../components/FlexView'
import { Content, Fonts } from '../../styles/styles'
import { Image, Text, ScrollView } from 'react-native'
import Space from '../../components/Space'
import ChapButton from '../../components/ChapButton'
import Section from '../../components/Section'
import Therapy from '../Therapy/Therapy'
import Header from '../../components/Header'


export default function AboutuUs({ navigation }) {

    const [info, setInfo] = useState({
        section1: {
            title: 'Meet our Mental Wellness Professionals',
            theme: 'https://chapterup.com/wp-content/uploads/2021/11/Online-1024x683.jpg'
        },
        section2: {
            title: 'Meet some of our coaches',
            imageList: [
                {
                    title: 'Suha',
                    description: 'Licenced Therapist',
                    image: 'https://chapterup.com/wp-content/uploads/elementor/thumbs/0_IMG-20211207-WA0009-phew6jt86in9z4ghl9mkvt4w5s9nx8cqfrn5bjuits.jpg'
                },
                {
                    title: 'Titin',
                    description: 'Holistic Counsellor & Empowerment coach',
                    image: 'https://chapterup.com/wp-content/uploads/elementor/thumbs/FB_IMG_1639056312066-phewe3gl1mz56fhwj11reel3u52qprb5t46h0inqvk.jpg'
                },
                {
                    title: 'Amina',
                    description: 'Mental wellness coach',
                    image: 'https://chapterup.com/wp-content/uploads/elementor/thumbs/FB_IMG_1639056244623-phewegmbpbh5oyyse6qjdb9k5j9vpireixb9qe48gg.jpg'
                }
            ]

        }

    })

    return (
        <FlexView>
            <Header navigation={navigation} />
            <ScrollView>
                <Section
                    title={'Meet our Mental Wellness Professionals'}
                    theme={info.section1.theme}
                />

                {/* <Therapy /> */}

                <Section
                    backgroundColor={'#8D51FF'}
                    title={info.section2.title}
                    listData={info.section2.imageList}
                />



            </ScrollView>
        </FlexView>
    )
}
