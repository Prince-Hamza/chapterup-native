import React from 'react'
import FlexView from '../../components/FlexView'
import { useContext } from 'react'
import { MessengerContext } from './MessengerContext'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Row from '../../components/Row'

export default function Tabs() {

    const { info, setInfo } = useContext(MessengerContext)

    const updatePage = (page) => {
        info.page = page
        setInfo({ ...info })
    }

    return (
        <Row lg={12} style={{ height: 100, borderWidth: 1, borderColor: '#222' }}>
            <TouchableOpacity style={Styles.tab} onPress={() => { updatePage('history') }}>
                <Text>
                    History
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.tab} onPress={() => { updatePage('chat') }}>
                <Text style={{ borderWidth: 1, borderColor: '#222' }}> 
                    Chat
                </Text>
            </TouchableOpacity>

        </Row>
    )
}



const Styles = StyleSheet.create({
    tab: {
        width: 200,
        height: 100
    }
})