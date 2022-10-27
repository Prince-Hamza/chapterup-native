import React, { useState } from 'react'
import FlexView from '../../components/FlexView'
import { Text } from 'react-native'
import { MessengerContext } from './MessengerContext'
import { ScrollView } from 'react-native-gesture-handler'
import Tabs from './Tabs'
import Messenger from './Messenger'
import ChatHistory from './ChatHistory'

export default function MessengerWrap({ }) {

    const [info, setInfo] = useState({ page: 'history', messagesInfo: [], chatLinkInfo:{} })


    const setMessagesInfo = (data) => {
        info.messagesInfo = data
        setInfo({...info})
    }

    const setChatLinkInfo = (data) => {
        info.chatLinkInfo = data
        setInfo({...info})
    }

    

    return (
        <MessengerContext.Provider value={{ info: info, setInfo: setInfo }}>
            <Tabs />
            <ScrollView>
                {info.page === 'chat' && <Messenger />}
                {info.page === 'history' &&
                    <ChatHistory
                        setMessages={setMessagesInfo}
                        setChatLinkInfo={setChatLinkInfo}
                    />
                }
            </ScrollView>
        </MessengerContext.Provider>
    )
}
