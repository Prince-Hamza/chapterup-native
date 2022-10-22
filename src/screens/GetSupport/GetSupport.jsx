import React, { useState } from 'react'
import FlexView from '../../components/FlexView'
import { ScrollView, Text } from 'react-native'
import Section from '../../components/Section'
import Header from '../../components/Header'
import { Fonts, Content } from '../../styles/styles'
import Space from '../../components/Space'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'

import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

export default function GetSupport({ navigation }) {

    const [Data, setData] = useState({})
    const [value, onChange] = useState(new Date())

    const saveAppointment = async () => {
        Data.scheduled = value.toDateString()
        var userResp = await axios.get(`https://hutils.loxal.net/whois`)
        var info = Object.assign(Data, userResp.data)
        await firebase.database().ref('/chapterup/appointments').push({ scheduled: value.toDateString(), ...info })
        alert('meeting scheduled successfully')
    }

    return (
        <FlexView>
            <Header navigation={navigation} />
            <ScrollView>
                <Section
                    theme={'https://chapterup.com/wp-content/uploads/2022/06/medium.png'}
                    title={'schedule a free consultation'}
                    description={'We offer free 15-min consultations to every potential ChapterUp member. This helps us match you with a Mental Wellbeing Coach to fit your needs and include you in the right Support Group to give you the experience that fits your needs. Can’t wait for you to join our safe and supportive community'}
                />

                <Space pixels={15} />


                <Text style={{ ...Fonts.heading, color: 'magenta' }}>
                    Easy setup of Free Call
                </Text>

                <Space pixels={15} />

                <Text style={{ ...Fonts.bigDescription, color: '#222', textAlign: 'left', marginLeft: 20 }}>
                    15 min
                </Text>

                <Space pixels={5} />


                <Text style={{ ...Fonts.bigDescription, color: '#222', textAlign: 'left', marginLeft: 20 }}>
                    Web conferencing details provided upon confirmation.
                </Text>

                <Space pixels={5} />


                <Text style={{ ...Fonts.smallDescription, color: '#222', textAlign: 'left', marginLeft: 20 }}>
                    A short 15 min chat to learn more about your goals, share about the experience, and answer any questions you may have! Can’t wait!
                </Text>

                <Space pixels={25} />

                <Text style={{ ...Fonts.bigDescription, color: '#222', textAlign: 'left', marginLeft: 20 }}                >
                    Jay Kanahara
                </Text>

                <Text style={{ ...Fonts.heading, color: '#222', textAlign: 'left', marginLeft: 20 }}                >
                    15 minute
                </Text>

                <Text style={{ ...Fonts.bigDescription, color: '#222', textAlign: 'left', marginLeft: 20 }}                >
                    Web conferencing details provided upon confirmation.
                </Text>

                <Text style={{ ...Fonts.bigDescription, color: '#222', textAlign: 'left', marginLeft: 20 }}                >
                    Please use the zoom details
                </Text>

                <Space pixels={15} />

                <Text style={{ ...Fonts.smallDescription, color: '#222', textAlign: 'left', marginLeft: 20 }}                >
                    Jay K is inviting you to a scheduled Zoom meeting.
                </Text>

                <Space pixels={5} />



                <Text style={{ ...Fonts.smallDescription, color: '#222', textAlign: 'left', marginLeft: 20 }}                >
                    Join Zoom Meeting
                </Text>

                <Space pixels={5} />

                <Text style={{ ...Fonts.smallDescription, color: 'blue', textAlign: 'left', cursor: 'pointer', marginLeft: 20 }}                >
                    https://us04web.zoom.us/j/5627289823?pwd=M1R5UTUvRzhOdVJLbTF5djFKM2lCZz09
                </Text>

                <Space pixels={5} />


                <Text style={{ ...Fonts.smallDescription, color: '#222', textAlign: 'left', marginLeft: 20 }}                >
                    Meeting ID: 562 728 9823
                </Text>

                <Text style={{ ...Fonts.smallDescription, color: '#222', textAlign: 'left', marginLeft: 20 }}                >
                    Passcode: 67ybKc
                </Text>

                <Space pixels={20} />


                <Calendar
                    initialDate={'2022-03-01'}
                    minDate={'2020-05-10'}
                    maxDate={'2050-05-30'}
                    onDayPress={day => {
                        console.log('selected day', day);
                    }}
                    onDayLongPress={day => {
                        console.log('selected day', day);
                    }}
                    monthFormat={'yyyy MM'}
                    onMonthChange={month => {
                        console.log('month changed', month);
                    }}
                    hideArrows={true}
                    renderArrow={direction => <Arrow />}
                    hideExtraDays={false}
                    disableMonthChange={false}
                    firstDay={1}
                    hideDayNames={false}
                    showWeekNumbers={true}
                    onPressArrowLeft={subtractMonth => subtractMonth()}
                    onPressArrowRight={addMonth => addMonth()}
                    disableArrowLeft={false}
                    disableArrowRight={false}
                    disableAllTouchEventsForDisabledDays={true}
                    renderHeader={date => {
                        /*Return JSX*/
                    }}
                    enableSwipeMonths={true}
                />






            </ScrollView>
        </FlexView>
    )
}
