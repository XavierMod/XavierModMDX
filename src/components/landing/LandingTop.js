import React, { useEffect } from 'react'
import styled from 'styled-components'
import XavierImage from '../library/XavierImage'
import {P, PDesc, A, HTitle, H2, H1} from '../text/TextStyles';
import MaxWidthLayout from '../../layouts/MaxWidthLayout';
import Video from '../library/Video';
import { largerThan, smallerThan } from '../../helpers/mediaQueries'; 

const Wrapper = styled.div`
    text-align: center;

    .w1 {
        position: absolute;
        top: 0;
    }

    .w2 {
        position: absolute;
        right: 0;
    }
`;

const Title = styled.h1`
    font-size: 55px !important;
    font-weight: 100 !important;
    max-width: 1100px !important;
    margin: 50px auto !important;
    line-height: 80px !important;
    font-family: ${props => props.theme.fontFamilies.body} !important;

    ${smallerThan.mobile`
          font-size: 28px !important;
          padding: 0 10px;
          line-height: 40px !important;
    `};
`;

const ImageWrapper = styled.div`
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    position: relative;
`;

const VideoWrapper = styled.div`
    position: absolute;
    top: 60px;
    left: 0;
    z-index: -1;
    width: 100%;
    transform: scale(1.8);

    video {
        z-index: -1000;
    }
`;

const LandingTop = (props) => {
    return (
        <Wrapper>
            <MaxWidthLayout>
                <ImageWrapper><XavierImage /></ImageWrapper>
                <Title>I'm <strong>Xavier Mod</strong>. <br />Passionate front-end developer and curious about how the world works.</Title>
                <PDesc>Working as a front-end dev at <A href={props.landing_role_link}>{props.landing_role}</A> </PDesc>
                <VideoWrapper>
                    <Video />
                </VideoWrapper>    
            </MaxWidthLayout>
        </Wrapper>
    )
}

export default LandingTop
