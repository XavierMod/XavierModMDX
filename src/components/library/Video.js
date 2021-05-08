import React from "react"
import styled from 'styled-components';
import Cube from '../../videos/cube.mp4';
import WireframeOne from "./wireframes/WireframeTwo";

const Wrapper = styled.div`
`;

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
    <Wrapper>
        <video style={{opacity: '0.7'}} autoPlay loop autoplay='true' loop='true' muted='true'>
            <source src={Cube} type="video/mp4" />
        </video>
    </Wrapper>
)
export default Video