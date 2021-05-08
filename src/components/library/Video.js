import React from "react"
import Cube from '../../videos/cube.mp4';

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
    <video style={{opacity: '0.7'}} autoPlay loop autoplay='true' loop='true' muted='true'>
        <source src={Cube} type="video/mp4" />
    </video>
)
export default Video