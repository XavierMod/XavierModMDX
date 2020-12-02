import React from 'react'
import styled from 'styled-components'
import { window, document, exists } from 'browser-monads';

const Wrapper = styled.div`
    background-color: #e8e8e8;
    display: inline-block;
    padding: 10px;
    border-radius: 2px;
    text-transform: uppercase;
    font-size: 11px;

    &.dark {
        background-color: black;
        color: white;
    }
`;

const PostCategory = (props) => {
    console.log(props);
        return (
            <Wrapper className={`category ${props.isDark ? 'dark' : null}`}>
                {props.category}
            </Wrapper>
        )
}

export default PostCategory
