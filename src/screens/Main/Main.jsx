import React, { useEffect, useState } from 'react'
import { WebView } from 'react-native-webview'
import { Text, Image, ScrollView } from 'react-native'
import FlexView from '../../components/FlexView'
import Header from '../../components/Header'
import ImageWrap from '../../components/ImageWrap'
import AppFace from '../AppFace/AppFace'
import Section from '../../components/Section'
import Therapy from '../Therapy/Therapy'
import Contact from '../Contact/Contact'

export default function Main({ navigation }) {

    const [info, setInfo] = useState({
        JoinPage: {
            title: 'Join Us',
            imageList: [
                {
                    title: 'Divorce & Separation',
                    description: 'Separating from someone you’ve loved is never easy. This can be a painful part of life but connecting with those that have gone through the same experience can assist with moving on to the next chapter',
                    buttonText: 'Join',
                    image: 'https://chapterup.com/wp-content/uploads/2022/06/medium.png'
                },
                {
                    title: 'Narcissistic Relationships',
                    description: 'Some days can be mentally exhausting and challenging. Speaking up can help shape your journey together. Learn tools to build resilience and look forward to better days ahead.',
                    buttonText: 'Join',
                    image: 'https://chapterup.com/wp-content/uploads/2022/06/medium.png'
                },
                {
                    title: 'Grief',
                    description: 'Grief is a complicated emotion, it’s the body’s natural response to trauma and loss. A support group can help with the overwhelming array of emotions you might be feeling. Please know you’re not alone',
                    buttonText: 'Join',
                    image: 'https://chapterup.com/wp-content/uploads/2022/06/medium.png'
                }
            ]
        },
        HowPage: {
            theme: 'https://chapterup.com/wp-content/uploads/2022/06/medium.png',
            title: 'How it Works ? ',
            description: 'Signup and answer some questions for us to understand your needs We will match you with the right group that will help your healing journey Attend weekly online video discussions, do self-growth exercises and join our chat group',
            bulletLines: [
                {
                    line: 'Schedule a free 15 minute consultation and share your needs',
                    buttonText: 'Tell us how you are feeling'
                },
                {
                    line: 'Confirm which group you will be part of (upto 6-8 people) and attend first discussion',
                    buttonText: 'Tell us how you are feeling'

                },
                {
                    line: 'Confirm if you should consider one on one sessions with a mental wellness coach',
                    buttonText: 'Tell us how you are feeling'

                },
                {
                    line: 'Build your custom plan to join our community',
                    buttonText: 'Tell us how you are feeling'
                },
            ]
        },
        Reviews: {
            title: 'Our members words',
            imageList: [
                {
                    title: 'Dani',
                    description: 'Separating from someone you’ve loved is never easy. This can be a painful part of life but connecting with those that have gone through the same experience can assist with moving on to the next chapter',
                    buttonText: 'Join',
                    image: 'https://chapterup.com/wp-content/uploads/elementor/thumbs/Dani-pphqk7z65d9ssxru375wafy0ebnhfkj1qkzwchhh8g.jpeg'
                },
                {
                    title: 'Amanda',
                    description: 'Some days can be mentally exhausting and challenging. Speaking up can help shape your journey together. Learn tools to build resilience and look forward to better days ahead.',
                    buttonText: 'Join',
                    image: 'https://chapterup.com/wp-content/uploads/elementor/thumbs/Amanda-pphqksnmbq23wcxsqg3otaq5gstk4wt55fckwkmtfk.jpg'
                },
                {
                    title: 'Han',
                    description: 'Grief is a complicated emotion, it’s the body’s natural response to trauma and loss. A support group can help with the overwhelming array of emotions you might be feeling. Please know you’re not alone',
                    buttonText: 'Join',
                    image: 'https://chapterup.com/wp-content/uploads/elementor/thumbs/Han-scaled-pphqlu95x3hksrf6mwcrl18l87o8osyemlg03n32io.jpg'
                },
                {
                    title: 'Nisha',
                    description: 'Grief is a complicated emotion, it’s the body’s natural response to trauma and loss. A support group can help with the overwhelming array of emotions you might be feeling. Please know you’re not alone',
                    buttonText: 'Join',
                    image: 'https://chapterup.com/wp-content/uploads/elementor/thumbs/Nisha-pphqmtz14suh1xzaubsl7s83sus6taw7fi8gc5m3y8.jpg'
                }
            ]

        },
        Professionals: {
            title: '',
            theme: 'https://chapterup.com/wp-content/uploads/2022/06/medium.png',
            imageList: [
                {
                    title: 'Reinholds',
                    description: 'Has been trained as a Life Coach that specialise in healing from separation and divorce',
                    buttonText: 'BOOK ONE ON SESSION',
                    image: 'https://chapterup.com/wp-content/uploads/elementor/thumbs/Reinholds-pphqu481r7z0tmw8wp4owwvhcjem1n6p17acsnv3dc.jpg'
                },
                {
                    title: 'Suha',
                    description: 'Suha Is a licenced therapist and can help you with solution focussed grief therapy, CBT therapy and healing fractured self',
                    buttonText: 'BOOK ONE ON SESSION',
                    image: 'https://chapterup.com/wp-content/uploads/elementor/thumbs/Suha-pphquujj2kz1upu0n0i8uq8dzbsw1636gtjy8es2j4.jpg'
                },
                {
                    title: 'Willow',
                    description: 'Has a Masters in Psychology and is mental wellness coach that helps you build towards your next chapter',
                    buttonText: 'BOOK ONE ON SESSION',
                    image: 'https://chapterup.com/wp-content/uploads/elementor/thumbs/Willow-pphqvbgmhlm7np5fw7tj3lyoo9hhvpycj5aove2zf4.jpg'
                }
            ]
        }
    })

    const init = async () => {

    }

    const effect = () => { init() }

    useEffect(effect, [])

    return (
        <FlexView>
            <Header navigation={navigation} />
            <ScrollView>
                <AppFace />
                <Therapy />

                <Section
                    title={'Join a Group'}
                    listData={info.JoinPage.imageList}
                />

                <Section
                    theme={'https://chapterup.com/wp-content/uploads/2022/06/medium.png'}
                    title={'How it Works ? '}
                    description={info.HowPage.description}
                    bulletLines={info.HowPage.bulletLines}
                />

                <Section
                    title={'See what our members have to say'}
                    listData={info.Reviews.imageList}
                />

                <Section
                    // theme={'https://chapterup.com/wp-content/uploads/2022/06/medium.png'}
                    backgroundColor={'#f78da7'}
                    title={'Meet out talented Mental Health & Wellbeing Professionals'}
                    listData={info.Professionals.imageList}
                />

                <Contact />
            </ScrollView>
        </FlexView>

    )

}

