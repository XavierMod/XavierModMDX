import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../library/Button';
import {HTitle, P, PDesc, A} from '../text/TextStyles';
import { Link } from 'gatsby';
import ButtonPrimary from '../library/ButtonPrimary';

const Wrapper = styled.div`    
    .a {
        padding-top: 20px;
        display: inline-block;
    }
`;

const LandingAboutPreview = (props) => {
    return (
        <Wrapper 
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-easing="ease">
            <P>{props.landing_description}</P>
            <Link to="/about"><ButtonPrimary>About me</ButtonPrimary></Link>
        </Wrapper>
    )
}

export default LandingAboutPreview
