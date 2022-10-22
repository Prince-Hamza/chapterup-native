import React from 'react'
import Selector from './Selector'
import { useContext } from 'react'
import { FormContext } from './FormContext'
import { Content } from '../../styles/styles'
import Row from '../../components/Row'
import Col from '../../components/Col'
import ChapupButton from '../../components/ChapButton'
import { Dimensions } from 'react-native'
import Space from '../../components/Space'
import { Text } from 'react-native'

export default function Step2() {

    const { formData, setFormData } = useContext(FormContext)

    const onSelect = (text) => {
        formData.step2_data.selected.push(text)
        alert(`form:step2: ${JSON.stringify(formData.step2_data)}`)
        setFormData({ ...formData })
    }

    const back = (stepNum) => {
        formData.step = stepNum
        formData.percentage = 12
        setFormData({ ...formData })
    }

    const forward = (stepNum) => {
        formData.step = stepNum
        formData.percentage = 50
        setFormData({ ...formData })
    }


    return (
        <Row xs={12} style={Content.rowCentrify}>
            <Text> What brings you to seek support</Text>
            <Col lg={6} style={Content.colTopLeft}>
                <Selector text={'Grief'} onChange={onSelect} />
                <Selector text={'Separation & Divorce'} onChange={onSelect} />
                <Selector text={'Poor relationships'} onChange={onSelect} />
            </Col>
            <Col lg={6} style={{ ...Content.colTopLeft, marginBottom: 10 }}>
                <Selector text={'Anxiety'} onChange={onSelect} />
                <Selector text={'Depression'} onChange={onSelect} />
                <Selector text={'Career stress'} onChange={onSelect} />
            </Col>
            <Space pixels={15} />
            <Space pixels={15} />
            <Row lg={6}>
                <ChapupButton style={{ marginRight: 10 }} onClick={() => { back(1) }} > Previous </ChapupButton>
                <ChapupButton onClick={() => { forward(3) }} > Next </ChapupButton>
            </Row>

        </Row>
    )
}
