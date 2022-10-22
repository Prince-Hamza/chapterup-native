import React from 'react'
import FlexView from '../../components/FlexView'
import { Content, Fonts } from '../../styles/styles'
import { Text } from 'react-native'
import ChapButton from '../../components/ChapButton'
import Space from '../../components/Space'

export default function Contact() {

    

    return (
        <FlexView>

            <Space pixels={15} />

            <Text style={{ ...Fonts.heading, color: 'black' }}>
                CONTACT NOW
            </Text>

            <Space pixels={15} />


            <Text style={{ ...Fonts.bigDescription, color: '#222' }}>
                Email: hello@chapterup.com
            </Text>

            <Space pixels={15} />

            <Text style={{ ...Fonts.bigDescription, color: '#222' }}>
                If you or someone you know is in immediate help, there are several places you can turn to for help.
            </Text>

            <Space pixels={15} />

            <Text style={{ ...Fonts.bigDescription, color: '#222' }}>
                USA
            </Text>

            <Space pixels={5} />

            <Text style={{ ...Fonts.smallDescription, color: '#222' }}>
                <Text> National Suicide Prevention Hotline: Call 1-800-273-8255 </Text>
                <Text> Crisis Text Line: Text Home to 741-741</Text>
                <Text>Emergency – 911</Text>
            </Text>

            <Space pixels={15} />


            <Text style={{ ...Fonts.bigDescription, color: '#222' }}>
                AUSTRALIA
            </Text>

            <Space pixels={5} />

            <Text style={{ ...Fonts.smallDescription, color: '#222' }}>
                <Text>Lifeline – 13 11 14</Text>
                <Text>Kids Helpline – 1800 55 1800</Text>
                <Text>Kids Helpline – 1800 55 1800</Text>
            </Text>

            <Space pixels={15} />

            <ChapButton title={'Join a Group'} />

            <Space pixels={15} />




        </FlexView>
    )
}
