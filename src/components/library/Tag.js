import React from 'react'
import styled from 'styled-components'
import { myContext } from '../../layouts/provider';

const TagWrapper = styled.span`
    display: inline-block;
    text-transform: lowercase;
    background-color: #ededed;
    padding: 8px;
    font-weight: 600;
    font-size: 12px;
    color: grey;
    margin-right: 10px;

    &.featured {
        background-color: ${props => props.theme.colors.text};
        color: ${props => props.theme.colors.mainBG};
    }

    &.featured {
        background: black;
        border: 1px solid black;
        color: white;
    }

    &.dev {
        background: #d1e5ff;
        border: 1px solid #0571ff;
        color: #0571ff;
    }

    &.age {
        background: #ffe6e6;
        border: 1px solid #eb3434;
        color: #eb3434;
    }

    &.completed {
        background: #defcde;
        border: 1px solid #1e9c1e;
        color: #1e9c1e;
    }

    &.block {
        background-color: black;
        color: white;
    }

    &.isDark {
        background: black;
        color: ${props => props.theme.colors.accent};
        border: 1px solid ${props => props.theme.colors.mainBG};
    }
`;

const Tag = (props) => {
    return (
            <myContext.Consumer>
                {context => (
                    <TagWrapper className={`${props.className} ${context.isDark ? 'isDark' : null}`}>
                        {props.children}
                    </TagWrapper>
                )}
            </myContext.Consumer>
    )
}

export default Tag
