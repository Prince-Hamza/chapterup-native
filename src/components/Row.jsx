import React from 'react'
import { View } from 'react-native'

export default function Row({ children, wf }) {
    return (
        <View style={{ ...Styles.flex, borderWidth: wf ? 1 : 0 }} >
            {children}
        </View>
    )
}


const Styles = ({
    flex: {
        flex: 0,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        borderColor: '#222',
        width: 40
    }
})