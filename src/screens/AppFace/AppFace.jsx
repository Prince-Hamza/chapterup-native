import React from 'react'
import FlexView from '../../components/FlexView'
import { StyleSheet, Dimensions, Text } from 'react-native'
import ImageWrap from '../../components/ImageWrap'
import { Content, Fonts } from '../../styles/styles'
import YoutubePlayer from "react-native-youtube-iframe";
import Space from '../../components/Space'
import ChapButton from '../../components/ChapButton'

export default function AppFace() {
  return (
    <ImageWrap style={{ height: 550, ...Content.colCentrify }} source={{ uri: 'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/129325364/original/afaddcb9d7dfaaf5bff7ef04101935814665ac16/design-an-attractive-background-for-your-website.png' }}>

      <Space pixels={10} />

      <Text style={Fonts.heading}>
        Chapterup
      </Text>

      <Space pixels={10} />

      <Text style={Fonts.bigDescription}>
        Safe and Supportive Mental Wellbeing Group Support Video Calls on topics such as Separation, Divorce, Relationships & Grief.
      </Text>


      <Space pixels={50} />


      <YoutubePlayer
        height={200}
        width={300}
        play={false}
        videoId={"uzSoHuVkHSk"}
      />

      <Text style={Fonts.quote}>
        "I had major life changes that impacted my mental wellbeing. I was struggling to cope and needed the emotional support ChapterUp provided to get me through and plan my future"
      </Text>
      <Space pixels={12} />
      <ChapButton title={'Start Today'} />

    </ImageWrap>
  )
}

const Styles = StyleSheet.create({
  wrap: {
    width: Dimensions.get('screen').width
  },
  text: {
    color: 'white'
  }
})
