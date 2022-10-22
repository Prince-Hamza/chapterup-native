import React, { useState } from 'react'
// import { Col, Row, Form, Button } from 'react-bootstrap'
import Col from '../../components/Col'
import Space from '../../components/Space'
import FlexView from '../../components/FlexView'
import { Dimensions, Text } from 'react-native'
import { Content, Fonts } from '../../styles/styles'
import { FormContext } from './FormContext.js'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import Step5 from './Step5'
import Step6 from './Step6'
import Step7 from './Step7'
import Step8 from './Step8'
import Step9 from './Step9'
import { ScrollView } from 'react-native-gesture-handler'

export default function InfoForm() {

    const [formData, setFormData] = useState({
        percentage: 12, step: 1, step1_data: {},
        step2_data: {
            q: 'What brings you to seek support?',
            selected: []
        },
        step3_data: {
            q: 'Over the past week, how often have you not being able to stop worrying something terrible would happen?',
            selected: []
        },
        step4_data: {
            q: 'Over the past week, how often have you not been able to get a good nights sleep?',
            selected: []
        },
        step5_data: {
            q: 'Over the past week, how often have you not done the things you used to enjoy? ',
            selected: []
        },
        step6_data: {
            q: 'Over the past week, how often have you been down or depressed or hopeless',
            selected: []
        },
        step7_data: {
            q: 'Over the past week, how often have you had trouble concentrating or lacking energy?',
            selected: []
        },
        step8_data: {
            q: 'Over the past week, how often have you had trouble concentrating or lacking energy?',
            selected: []
        },
        step9_data: {
            q: 'What support model would you like to consider?',
            selected: []
        }
    })

    // alert(`formData: ${JSON.stringify(formData)}`)

    return (
        <FormContext.Provider value={{ formData: formData, setFormData: setFormData }}>
            <ScrollView>

                <Space pixels={15} />

                <FlexView lg={11} xs={11} style={Content.rowCentrify}>
                    <Text style={{ ...Fonts.heading, textAlign: 'center', color: '#222' }}>
                        What brings you to seek support
                    </Text>
                </FlexView>

                <Space pixels={15} />

                <FlexView lg={12} style={Content.rowCentrify}>
                    <FlexView>
                        {formData.step === 1 && <Step1 />}
                        {formData.step === 2 && <Step2 />}
                        {formData.step === 3 && <Step3 />}
                        {formData.step === 4 && <Step4 />}
                        {formData.step === 5 && <Step5 />}
                        {formData.step === 6 && <Step6 />}
                        {formData.step === 7 && <Step7 />}
                        {formData.step === 8 && <Step8 />}
                        {formData.step === 9 && <Step9 />}
                    </FlexView>
                </FlexView>
            </ScrollView>
        </FormContext.Provider>

    )
}

const Styles = ({
    form: {
        backgroundColor: 'whitesmoke',
        padding: 35,
        marginBottom: 15,
        ...Content.colCentrify

    },
    percentWrap: {
        height: 25,
        width: Dimensions.get('screen').width,
        marginBottom: 20,
        backgroundColor: 'white'
    },
    filling: {
        height: 25,
        backgroundColor: '#8D51FF',
        color: 'white',
        ...Content.rowCentrify
    }
})