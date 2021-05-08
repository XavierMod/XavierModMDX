import React, { useState } from 'react';
import styled from 'styled-components'
import { window, document, exists } from 'browser-monads';
import {A} from '../../components/text/TextStyles';

const Wrapper = styled.div`
    width: 20px;
    margin: 0;
    padding: 0;
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.5;
    transition: all ease .4s;
    transform: rotate(180deg);

    
    &.dark {
        transform: rotate(0deg);
    }

    &:hover {
        opacity: 1;
    }

    svg {
        width: 40px;
        fill: ${props => props.theme.colors.paragraphColor};
    }
`;

const ModeToggler = (props) => {

    return (
        <Wrapper className={props.isDark ? 'dark' : 'light'} onClick={props.onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z"/></svg>
        </Wrapper>
    )
}

export default ModeToggler
