import React, { useState, useContext } from 'react'
import { FormContext } from './FormContext'
import { Content } from '../../styles/styles'
import Space from '../../components/Space'
import { Dimensions } from 'react-native'
import FlexView from '../../components/FlexView'

export default function Step1() {

    const [gender, setGender] = useState()
    const { formData, setFormData } = useContext(FormContext)

    const nextStep = () => {
        formData.step = 2
        formData.percentage = 25
        formData.step1_data.gender = gender
        setFormData({ ...formData })
    }

    return (
        <FlexView style={Content.rowCentrify}>

            <Space pixels={15} />

            <Form.Control type={'text'} placeholder={'First Name'} onChange={(e) => { formData.step1_data.firstName = e.target.value }} />
            <Space pixels={15} />

            <Form.Control type={'text'} placeholder={'Last Name'} onChange={(e) => { formData.step1_data.lastName = e.target.value }} />
            <Space pixels={15} />

            <Form.Control type={'text'} placeholder={'City'} onChange={(e) => { formData.step1_data.city = e.target.value }} />
            <Space pixels={15} />

            <Form.Control type={'text'} placeholder={'Your Email'} onChange={(e) => { formData.step1_data.email = e.target.value }} />
            <Space pixels={15} />

            <Col lg={12} style={{ ...Content.colTopLeft, pading: 15, marginLeft: 25 }}>
                <Row style={{ width: 50 }}>
                    <InputGroup.Checkbox style={{ width: 50 }} type={'checkbox'} checked={gender === 'male' ? true : false} onChange={() => { setGender('male') }} />
                    <Form.Label style={{ width: 90 }} > Male </Form.Label>
                </Row>

                <Row style={{ width: 50 }}>
                    <InputGroup.Checkbox style={{ width: 5, height: 22 }} type={'checkbox'} checked={gender === 'female' ? true : false} onChange={() => { setGender('female') }} />
                    <Form.Label style={{ width: 100 }}> Female </Form.Label>
                </Row>
            </Col>

            <Space pixels={15} />

            <Form.Control type={'text'} placeholder={'Phone Number'} onChange={(e) => { formData.step1_data.phoneNumber = e.target.value }} />

            <Space pixels={15} />

            <Button onClick={() => { nextStep() }}> Next </Button>

        </FlexView>
    )
}



const Styles = ({
    form: {
        backgroundColor: 'whitesmoke',
        ...Content.rowCentrify,
        padding: 15
    },
    percentWrap: {
        height: 70,
        width: Dimensions.get('screen').width,
        backgroundColor: 'whitesmoke'
    }
})


