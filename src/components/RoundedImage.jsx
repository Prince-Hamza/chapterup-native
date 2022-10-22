import React from 'react'
import { View, Image } from 'react-native'
import ImageWrap from './ImageWrap'


export default function RoundedImage({ scale, style, source, resize }) {
    return (
        <Image
            source={source}
            style={{ width: scale, height: scale, borderRadius: 130 }}
        />
    )
}
