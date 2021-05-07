import React from 'react'
import styled from 'styled-components'
import ProjectsSlider from "./ProjectsSlider"
import ReadingIndicator from '../library/ReadingIndicator'
import SliderIndicator from './SliderIndicator';
import ProjectsTop from './ProjectsTop';

const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.mainBG};
`;

const LeftBlock = styled.div`
  flex: 1.5;
`;

const SliderBlock = styled.div`
  position: relative;
  height: 100%;
  flex: 7;
`;

const RightBlock = styled.div`
  flex: 1.5;
`;

const ProjectsModule = (props) => {
    return (
    <PageWrapper>
        <ProjectsTop />
        <LeftBlock>
            
        </LeftBlock>
        <SliderBlock>
          <ProjectsSlider slides={props.slides} />
        </SliderBlock>
        <RightBlock>
        adsasd
        </RightBlock>
        <SliderIndicator />
      </PageWrapper>
    )
}

export default ProjectsModule
