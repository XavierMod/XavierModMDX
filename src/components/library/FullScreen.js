import React, { useState } from 'react'
import SocialIcon from './SocialIcon';
import styled from 'styled-components'
import { largerThan, smallerThan } from '../../helpers/mediaQueries'; 

const Wrapper = styled.div`
    margin-left: 20px;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    ${smallerThan.mobile`
        display: none;
    `};
`;

const Banner = styled.div`
    background-color: #5432a8;
    font-size: 12px;
    padding: 5px;
    border-radius: 3px;
    margin-left: 10px;
`;

const FullScreen = () => {

    const [isFullScreen, setMode] = useState(true);

    const activateFullscreen = (element) => {

            if(element.requestFullscreen) {
              element.requestFullscreen();        // W3C spec
            }
            else if (element.mozRequestFullScreen) {
              element.mozRequestFullScreen();     // Firefox
            }
            else if (element.webkitRequestFullscreen) {
              element.webkitRequestFullscreen();  // Safari
            }
            else if(element.msRequestFullscreen) {
              element.msRequestFullscreen();      // IE/Edge
            }

      };


    return (
        <Wrapper onClick={() => activateFullscreen(document.documentElement)}>
            <SocialIcon><svg width="14px" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 9h-4v-5h-5v-4h9v9zm-9 15v-4h5v-5h4v9h-9zm-15-9h4v5h5v4h-9v-9zm9-15v4h-5v5h-4v-9h9z"/></svg></SocialIcon>
            <Banner>New!</Banner>
        </Wrapper>
    )

}

export default FullScreen
