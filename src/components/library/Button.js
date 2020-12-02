import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.a`
    text-decoration: none;
    color: black;
    padding-bottom: 5px;
    border-bottom: 1px solid black;
    opacity: 0.5;
    transition: all ease .3s;
    display: inline-block; 
    cursor: pointer;

    &:hover {
        opacity: 1;
    }
`;

const Button = (props) => {
    return (
        <Wrapper className="button">
            {props.children}
        </Wrapper>
    )
}

export default Button