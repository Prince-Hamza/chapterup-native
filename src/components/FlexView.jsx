import React from 'react'
import { View } from 'react-native'

export default function FlexView({ children, style, wf }) {
    return (
        <View style={{ ...Styles.flex, ...style, borderWidth: wf ? 1 : 0 }} >
            {children}
        </View>
    )
}


const Styles = ({
    flex: {
        flex: 0,
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        borderColor: '#222',
        textAlign:'center'
    }
})