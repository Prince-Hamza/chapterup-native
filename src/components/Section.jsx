import React from 'react'
import FlexView from './FlexView'
import { Content, Fonts } from '../styles/styles'
import { Dimensions, ImageBackground, StyleSheet, Text } from 'react-native'
import RoundedImage from './RoundedImage'
import ImageWrap from './ImageWrap'
import ChapButton from './ChapButton'
import Space from './Space'

export default function Section({ theme, title, description, bulletLines, listData, backgroundColor, style, navigation }) {

    const handleClick = () => {
        navigation.navigate('signUp')
    }

    return (
        <ImageWrap
            source={{ uri: theme }}
            style={{ ...Content.colCentrify, backgroundColor: backgroundColor, ...style }}
        >
            <FlexView>
                <Space pixels={25} />

                {title && <Text style={{ ...Fonts.heading, textAlign: 'center', color: theme ? 'white' : '#222' }}>  {title}  </Text>}

                <Space pixels={15} />

                {description && <Text style={{ ...Fonts.bigDescription, textAlign: 'center', color: theme ? 'white' : '#222' }}>  {description}  </Text>}

                <Space pixels={15} />
            </FlexView>

            <FlexView style={{ ...Content.colCentrify, padding: 10 }}>
                {bulletLines && bulletLines.map((item) => {
                    return (
                        <FlexView key={Math.random()} style={Content.colTopLeft}>
                            <Text style={{ ...Fonts.smallDescription, textAlign: 'left', color: theme ? 'white' : '#222' }}>  {item.line}  </Text>
                            <Space pixels={15} />
                        </FlexView>
                    )
                })}
                {/* <ChapButton title={'buttonText'} /> */}
            </FlexView>

            <Space pixels={5} />

            {listData && listData.map((item) => {
                return (
                    <FlexView key={Math.random()}>
                        <RoundedImage
                            scale={80}
                            source={{ uri: item.image }}
                            resize={'cover'}
                        />
                        <Text style={{ ...Fonts.heading, color: theme ? 'white' : '#222' }}>  {item.title}  </Text>
                        <Text style={{ ...Fonts.quote, color: theme ? 'white' : '#222' }}>  {item.description}  </Text>
                        <Space pixels={15} />
                        <ChapButton title={item.buttonText} onClick={() => { handleClick() }} />
                        <Space pixels={50} />
                    </FlexView>
                )
            })}



        </ImageWrap>
    )
}
