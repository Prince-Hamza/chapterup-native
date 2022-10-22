import React from 'react'
import { Text } from 'react-native'
export default function Space({ pixels }) {
    return (
        <Text style={{ height: pixels ? pixels : 5 }}>
            
        </Text>
    )
}
