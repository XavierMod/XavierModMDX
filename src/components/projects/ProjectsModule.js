import React from 'react'
import styled from 'styled-components'
import ProjectsSlider from "./ProjectsSlider"
import ReadingIndicator from '../library/ReadingIndicator'
import SliderIndicator from './SliderIndicator';
import ProjectsTop from './ProjectsTop';
import Video from '../library/Video';

const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -10000;
`;

const SliderBlock = styled.div`
  position: relative;
  height: 100%;
  flex: 10;
`;

const VideoWrapper = styled.div`
  position: absolute;
  top: -85px;
  left: 0;
  z-index: -1000;
  width: 100%;
  text-align: center;

  video {
    z-index: -1000;
  }
`;


const ProjectsModule = (props) => {
    return (
    <PageWrapper>
        <ProjectsTop />
        <SliderBlock>
          <ProjectsSlider slides={props.slides} />
        </SliderBlock>
        <SliderIndicator />
        <VideoWrapper>
          <Video />
        </VideoWrapper>
      </PageWrapper>
    )
}

export default ProjectsModule
