import React from 'react'
import styled from 'styled-components'
import XavierImage from '../library/XavierImage'
import {P, PDesc, A, HTitle, H2, H1} from '../text/TextStyles';
import MaxWidthLayout from '../../layouts/MaxWidthLayout';
import WireframeOne from '../library/wireframes/WireframeOne';
import WireframeTwo from '../library/wireframes/WireframeTwo';
import Button from '../library/Button';
import Video from '../library/Video';
import AniLink from "gatsby-plugin-transition-link/AniLink";
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

    ${smallerThan.mobile`
          .w1, .w2 {
            width: 50px;
          }
    `};
`;

const Title = styled.h1`
    font-size: 70px;
    font-weight: 100;
    max-width: 1100px;
    margin: 50px auto;
    line-height: 80px;
    font-family: ${props => props.theme.fontFamilies.headings};

    ${smallerThan.mobile`
          font-size: 40px;
          line-height: 50px;
    `};
`;

const ImageWrapper = styled.div`
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    position: relative;
`;

const Facts = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px 0;
    text-align: center;

    ${smallerThan.mobile`
          display: block;
          margin: 20px 0;
    `};
`;

const Fact = styled.div`
    padding: 40px;
    flex: 3;
`;

const VideoWrapper = styled.div`
    position: absolute;
    top: 60px;
    left: 0;
    z-index: -1;
    width: 100%;
    transform: scale(1.5);

    video {
        z-index: -1000;
    }
`;

const LandingTop = (props) => {
    return (
        <Wrapper>
            <MaxWidthLayout>
                <WireframeOne delay="700" />
                <WireframeTwo delay="1000" />
                <ImageWrapper ><XavierImage /></ImageWrapper>
                <Title>It's Xavier. Front-End Dev with UX/UI. Fan of design systems, Dieter Rams and nice fonts.</Title>
                <PDesc>Working as a front-end dev at <A href={props.landing_role_link}>{props.landing_role}</A> </PDesc>
                <Facts>
                    <Fact 
                        data-sal="slide-up"
                        data-sal-delay="300"
                        data-sal-easing="ease">
                        <H1>Education</H1>
                        <PDesc>BSc Digital Design at <A>Brunel University</A></PDesc>
                    </Fact> 
                    <Fact 
                        data-sal="slide-up"
                        data-sal-delay="600"
                        data-sal-easing="ease">
                        <H1>Experience</H1>
                        <PDesc>Junior/Mid (+3 years)</PDesc>
                    </Fact>
                    <Fact 
                        data-sal="slide-up"
                        data-sal-delay="900"
                        data-sal-easing="ease">
                        <H1>Tech Stack</H1>
                        <PDesc>{props.landing_stack.split(" · ").map((el, ind, arr) => {
                            return <span>{el} | </span>
                        })}</PDesc>
                    </Fact>   
                </Facts>   

                <AniLink cover
                        to="/about"
                        direction="left"
                        duration={1}
                        bg="#212120">
                    <Button>About me</Button> 
                </AniLink>


                <VideoWrapper>
                    <Video />
                </VideoWrapper>
                         
            </MaxWidthLayout>
        </Wrapper>
    )
}

export default LandingTop
