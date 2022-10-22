import React from 'react'
import FlexView from './FlexView'
import { Dimensions, ImageBackground, StyleSheet } from 'react-native'
import { Content } from '../styles/styles'

export default function ImageWrap({ source, style, resize, children }) {
    
    return (
        <FlexView style={style ? style : {}}>
            <ImageBackground
                style={{ ...Styles.Image, ...style, height: style ? style.height : 400,padding:5 }}
                source={source}
                resizeMode={resize}
            >
                {children}
            </ImageBackground>
        </FlexView>
    )
}

const Styles = StyleSheet.create({
    Image: {
        width: Dimensions.get('screen').width,
        height: 100,
        textAlign: 'center'
    }
})

