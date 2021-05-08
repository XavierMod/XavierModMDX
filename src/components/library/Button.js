import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.a`
    text-transform: uppercase;
    font-weight: 700;
    z-index: 200000;
    .button_slide {
        color: ${props => props.theme.colors.text};
        border: 2px solid ${props => props.theme.colors.text};
        border-radius: 0px;
        padding: 18px 36px;
        display: inline-block;
        font-size: 14px;
        letter-spacing: 1px;
        cursor: pointer;
        box-shadow: inset 0 0 0 0 ${props => props.theme.colors.accent};
        -webkit-transition: ease-out 0.7s;
        -moz-transition: ease-out 0.7s;
        transition: ease-out 0.7s;
    }

    .slide_right:hover {
        box-shadow: inset 400px 0 0 0  ${props => props.theme.colors.accent};
        color: ${props => props.theme.colors.mainBG};
    }
`;

const Button = (props) => {
    return (
    <Wrapper>
        <div class="button button_slide slide_right">{props.children}</div>
    </Wrapper>
    )
}

export default Button