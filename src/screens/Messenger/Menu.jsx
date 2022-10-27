import React from 'react'
import Col from '../../components/Col'
import Row from '../../components/Row'
import { Content } from '../../styles/styles'
import { Text } from 'react-native'
import FlexView from '../../components/FlexView'


export default function Menu({navigate}) {

    // const navigate = useNavigate()

    return (
        <Row lg={12} style={Styles.Menu}>

            <Col lg={3} style={Styles.history}>
                <Text style={{ cursor: 'pointer' }}> History </Text>
            </Col>

            <Col lg={9}>
                <Row lg={12} style={{ ...Content.rowCentrify }}>
                    <Col lg={9} style={{ height: '100%' }}>
                        <FlexView>
                            <Text style={{ cursor: 'pointer' }}> Chats </Text>
                        </FlexView>
                    </Col>
                    <Col lg={3}>
                        <Text style={{ cursor: 'pointer' }} onClick={() => { navigate('/create-messenger-group') }} >
                            + Create Group
                        </Text>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

const Styles = ({
    Menu: {
        backgroundColor: '#222',
        color: 'white',
    },
    history: { ...Content.colCentrify }
})



