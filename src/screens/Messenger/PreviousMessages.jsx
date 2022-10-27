import React, { useEffect, useState } from 'react'
import Col from '../../components/Col'
import Row from '../../components/Row'
import Menu from './Menu'
import { Content } from '../../styles/styles'
import { ChatSystem } from '../../backend/chat/Chat'
import { Text } from 'react-native'
const chatSystem = new ChatSystem()

export default function PreviousMessages({ info }) {


    const [list, setList] = useState([])


    useEffect(() => {


    }, [])
    return (
        <Col lg={12} style={Styles.container}>

            {info && info.map((item) => {
                return (
                    <Col lg={12} style={Styles.container}>
                        <Row lg={12} style={{ width: '100%' }}>
                            <Image roundedCircle style={{ width: '47px', height: '40px', marginRight: '20px', marginLeft: '15px', backgroundColor: 'white' }} src={item.image} />
                            <Text style={{ color: 'white', width: '80%', marginTop: '5px' }} > {item.text} </Text>
                        </Row>
                    </Col>
                )
            })}


            {!info.length &&
                <Col lg={12} style={Styles.container}  >
                    <Text style={Styles.text}> No Mesages to show </Text>
                </Col>
            }

        </Col>
    )
}


const Styles = ({
    container: {
        ...Content.colTopSpaceBetween,
        padding: '0px',
        height: 'auto',
    },
    empty: {
        padding: '0px'
    },
    text: {
        font: 'bold 26px times new roman',
        color: 'white'
    }
})