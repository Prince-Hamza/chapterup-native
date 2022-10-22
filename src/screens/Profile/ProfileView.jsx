import React from 'react'
import FlexView from '../../components/FlexView'
import ImageWrap from '../../components/ImageWrap'

export default function ProfileView() {
    return (
        <FlexView>
            <ImageWrap source={''} >
                <RoundedImage style={Styles.roundImage} source={''} scale={100} />
            </ImageWrap>

        </FlexView>
    )
}
