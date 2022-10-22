import React from 'react'
import FlexView from './FlexView'
import { Dimensions, Image, StyleSheet, Text, TouchableHighlight } from 'react-native'
import logo from '../assets/logo.png'
import { Content } from '../styles/styles'
import ImageWrap from './ImageWrap'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Row from './Row'
import Col from './Col'
import { useNavigation } from '@react-navigation/native'


export default function Header({ navigation }) {

    return (
        <ImageWrap
            source={{ uri: 'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/129325364/original/afaddcb9d7dfaaf5bff7ef04101935814665ac16/design-an-attractive-background-for-your-website.png' }}
            style={{ ...Content.rowCentrify, ...Styles.wrapper }}
            resize={'cover'}
        >
            <Row style={Content.rowCentrify}>
                <FlexView style={Styles.col}>
                    <TouchableHighlight onPress={() => { navigation.navigate('Menu') }}>
                        <Ionicons
                            testID="nextButton"
                            name="menu"
                            color="rgba(255, 255, 255, .9)"
                            size={24}
                            style={{ backgroundColor: 'transparent', marginTop: 10 }}
                        />
                    </TouchableHighlight>
                </FlexView>

                <FlexView style={Styles.col}>
                    <Image style={Styles.roundImage} source={logo} />
                </FlexView>

                <FlexView style={Styles.col}>

                </FlexView>

                {/* 
                <Col style={Styles.col}>

                </Col>

                <Col style={Styles.col}>
                <Image style={Styles.roundImage} source={logo} />

                </Col> */}

            </Row>



        </ImageWrap>
    )
}

const Styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#222',
        backgroundImage: `url(https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/129325364/original/afaddcb9d7dfaaf5bff7ef04101935814665ac16/design-an-attractive-background-for-your-website.png)`,
        height: 100,
        width: Dimensions.get('screen').width,
        elevation: 100,
        shadowColor: 'white',
        shadowRadius: '50'
    },
    roundImage: {
        width: 100,/// 
        height: 100,
        borderRadius: 100,
        marginBottom: 20
    },
    col: {
       // width: Dimensions.get('screen').width / 3,
        padding: 10
    }
})