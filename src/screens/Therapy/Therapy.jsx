import React from 'react'
import FlexView from '../../components/FlexView'
import { Content, Fonts } from '../../styles/styles'
import { Image, Text, Dimensions } from 'react-native'
import Space from '../../components/Space'
import ChapButton from '../../components/ChapButton'

export default function Therapy() {

    const screenWide = Dimensions.get('screen').width
    const handleClick = () => {
        navigation.navigate('signUp')
    }

    return (
        <FlexView>

            <Image style={{ width: screenWide, height: 200 }} source={{ uri: 'https://chapterup.com/wp-content/uploads/2022/06/Online-therapy.jpg' }} />

            <Space pixels={15} />

            <Text style={{ ...Fonts.heading, color: '#222' }}>
                Why Chapterup
            </Text>
            <Space pixels={15} />


            <Text style={{ ...Fonts.bigDescription, color: 'magenta' }}>
                Built through Lived Experience and backed by Medical Journals
            </Text>
            <Space pixels={5} />
            <Text style={{ ...Fonts.smallDescription, color: '#222' }}>
                Created by founders with lived experiences to get you through life challenges like separation, divorce, toxic relationships and grief. Backed by medical journals that promote Group Support.
            </Text>

            <Space pixels={15} />



            <Text style={{ ...Fonts.bigDescription, color: 'magenta' }}>
                Matched for Safety and Support
            </Text>
            <Space pixels={5} />
            <Text style={{ ...Fonts.smallDescription, color: '#222' }}>
                Matched with people going through similar life challenges. A safe and supportive online space to receive emotional support, learn coping skills and heal.
            </Text>
            <Space pixels={15} />


            <Text style={{ ...Fonts.bigDescription, color: 'magenta' }}>
                Professionally Led
            </Text>
            <Space pixels={5} />
            <Text style={{ ...Fonts.smallDescription, color: '#222' }}>
                Feel comfortable with your first session before any obligations to join. Membership starts at $29 per month which is significantly cheaper than Therapy sessions.
            </Text>
            <Space pixels={15} />

            <ChapButton title={'START TODAY'} style={{ color: 'white' }} onClick={() => { handleClick() }} />
            <Space pixels={50} />

        </FlexView >
    )
}
