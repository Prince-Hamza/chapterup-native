import React, { useEffect, useState } from 'react'
import firebase from 'firebase/compat/app'
import auth from 'firebase/compat/auth'
import { ChatSystem } from '../../backend/chat/Chat'
import { Image } from 'react-native'
import Col from '../../components/Col'
import Row from '../../components/Row'
import { Content } from '../../styles/styles'
import { Text } from 'react-native'
import FlexView from '../../components/FlexView'
const chatSystem = new ChatSystem()
const defaultPhoto = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrej4M_I8J8reVuRw4Ds2C1mVxWEEcq4xh9w&usqp=CAU'

export default function ChatHistory({ setMessages, setChatLinkInfo }) {

    const [chatsList, setChatsList] = useState([])
    const [selectedConvo, setSelectedConvo] = useState({})

    const getPreviousMessages = async (info) => {
        var chats = await chatSystem.getPreviousMessages(info.chatKey)
        setMessages([...chats])
    }

    const handleClick = (item) => {
        setChatLinkInfo({ ...item })
        getPreviousMessages(item)
    }

    const getUserData = async (item) => {
        var uinfo = await firebase.database().ref(`/users/${item.partner2}`).once('value')
        var userInfo = uinfo.val()

        delete userInfo['chats']
        var finalInfo = { ...item, ...userInfo }

        return finalInfo
    }

    const init = async () => {
        var uid = firebase.auth().currentUser ? firebase.auth().currentUser.uid : "administa"
        var list = await chatSystem.getChatList(uid)

        var userData = list.map((item) => {
            return getUserData(item)
        })

        var xList = await Promise.all(userData)
        console.log(`final List : ${JSON.stringify(xList)}`)
        //  var list = xList[0].chats.map((item) => { return item.val() })
        //  console.log(`list : ${JSON.stringify(list)}`)


        setChatsList([...xList])
        setSelectedConvo(list[0])
        setChatLinkInfo({ ...list[0] })
        getPreviousMessages(list[0])
    }


    const effect = () => { init() }
    useEffect(effect, [])


    // return null

    return (
        <Col lg={12}>
            {chatsList.map((item) => {
                //console.log(`item: ${JSON.stringify(item)} , photoUrl : ${item.photoUrl}`);
                return (
                    // <Row key={Math.random()} lg={12} style={Styles.listRow} onClick={() => { handleClick(item) }}>
                    //     {/* <Image
                    //         style={Styles.image}
                    //         source={{ uri: item.photoURL ? item.photoURL : defaultPhoto }}
                    //     /> */}
                    //     <Text style={Styles.text}> message  </Text>
                    // </Row>
                    <FlexView key={Math.random()}>
                        {/* <Image
                            style={Styles.image}
                            source={{ uri: item.photoURL ? item.photoURL : defaultPhoto }}
                        /> */}
                        <Text>
                            item
                        </Text>
                    </FlexView>
                )
            })}
        </Col>
    )
}

const Styles = ({
    listRow: {
        ...Content.rowCentrify,
        height: '80px',
    },
    image: {
        width: '70px',
        height: '47px',
    },
    text: {
        color: 'white',
        width: '200px'
    }
})