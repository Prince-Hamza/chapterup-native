import React from 'react'
import FlexView from '../../components/FlexView'
import { useContext } from 'react'
import { MessengerContext } from './MessengerContext'
import { TouchableOpacity } from 'react-native'
import Row from '../../components/Row'


export default function Tabs() {

    const { info, setInfo } = useContext(MessengerContext)

    const updatePage = (page) => {
        info.page = page
        setInfo({ ...info })
    }

    return (
        <Row lg={12} style={{ height: 100 }}>
            <TouchableOpacity onPress={() => { updatePage('history') }}>
                <Text>
                    History
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { updatePage('chat') }}>
                <Text>
                    Chat
                </Text>
            </TouchableOpacity>

        </Row>
    )
}
