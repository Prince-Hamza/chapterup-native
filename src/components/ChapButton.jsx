import React from 'react'
import { Text, TouchableHighlight, StyleSheet } from 'react-native'
import { Content } from '../styles/styles'
import FlexView from './FlexView'

export default function ChapButton({ title, style, onClick, disabled }) {
    return (
        <FlexView>
            <TouchableHighlight disabled={disabled ? disabled : false} style={{ ...Styles.default, ...style }} onPress={() => { onClick() }}>
                <Text style={Styles.text}>
                    {title}
                </Text>
            </TouchableHighlight>
        </FlexView>
    )
}

const Styles = StyleSheet.create({
    default: {
        width: 150,
        height: 40,
        backgroundColor: 'purple',
        borderRadius: 50,
        ...Content.colCentrify
    },
    text: {
        ...Content.colCentrify,
        color: 'white'
    },
})

