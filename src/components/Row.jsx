import React from 'react'
import { View, Dimensions } from 'react-native'

export default function Row({ style, children, wf, lg, xs }) {
    return (
        <View style={{
            ...Styles.flex,
            ...style,
            borderWidth: wf ? 1 : 0,
            width: (Dimensions.get('screen').width / 12) * (lg ? lg : xs ? xs : 12)
        }}>
            {children}
        </View>
    )
}



const Styles = ({
    flex: {
        flex: 0,
        flexDirection: "column",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        borderColor: 'white',
    }
})