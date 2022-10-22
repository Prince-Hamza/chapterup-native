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
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

export default function Step9() {
    const { formData, setFormData } = useContext(FormContext)
    const [selected, setSelected] = useState()

    const onSelect = (value) => {
        setSelected(true)
        formData.step9_data.selected.push(value)
        setFormData({ ...formData })
    }

    const back = (stepNum) => {
        formData.step = stepNum
        formData.percentage = 50
        setFormData({ ...formData })
    }

    const forward = (stepNum) => {
        formData.step = stepNum
        formData.percentage = 95
        setFormData({ ...formData })
    }

    const submit = () => {
        firebase.database().ref('/chapterup/submissions').push({ ...formData })
    }

    return (
        <Col lg={12}>
            <p> {formData.step9_data.q} </p>
            <ThreeChoice
                choice1={'Everyday'}
                choice2={'Almost Everyday'}
                choice3={'None'}
                onSelect={onSelect}
            />

            <Row lg={6}>
                <ChapupButton style={{ marginRight: 10 }} onClick={() => { submit() }} disabled={selected ? false : true} >
                    <Text>
                        Submit
                    </Text>
                </ChapupButton>
            </Row>

        </Col>
    )
}
