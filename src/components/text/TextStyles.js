import { window, document, exists } from 'browser-monads';
import React from 'react'
import styled from 'styled-components'
import { myContext } from '../../layouts/provider';

const H1Wrapper = styled.h1`
    font-size: ${props => props.theme.fontSizes.H1};
    font-family: ${props => props.theme.fontFamilies.headings};
    font-weight: 900;
    line-height: 70px;
`;

const HTitleWrapper = styled(H1Wrapper)`
    font-size: ${props => props.theme.fontSizes.HTitle};
`;

const H2Wrapper = styled.h2`
    font-size: ${props => props.theme.fontSizes.H2};
    font-family: ${props => props.theme.fontFamilies.headings};
    font-weight: 900;
    line-height: 40px;
`;

const H3Wrapper = styled.h3`
    font-size: ${props => props.theme.fontSizes.H3};
    font-family: ${props => props.theme.fontFamilies.headings};
    font-weight: 900;
    line-height: 40px;
`;

const H4Wrapper = styled.h4`
    font-size: ${props => props.theme.fontSizes.H4};
    font-family: ${props => props.theme.fontFamilies.headings};
    font-weight: 900;
    line-height: 40px;
`;

const H5Wrapper = styled.h5`
    font-size: ${props => props.theme.fontSizes.H5};
    font-family: ${props => props.theme.fontFamilies.headings};
    font-weight: 900;
    line-height: 30px;
`;

const H6Wrapper = styled.h6`
    font-size: ${props => props.theme.fontSizes.H6};
    font-family: ${props => props.theme.fontFamilies.headings};
    font-weight: 900;
    line-height: 30px;
`;

// Paragraphs

const PWrapper = styled.p`
    line-height: 35px;
    opacity: 0.9;
    font-size: ${props => props.theme.fontSizes.paragraph};
    font-family: ${props => props.theme.fontFamilies.body};
    color: ${props => props.theme.colors.accentSecondary};

    code {
        background-color: #f2f2f2;
        padding: 5px;
        font-family: Fira Code,Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace!important;
        font-size: 14px;
        border: 1px solid #c7c7c7;
        border-radius: 5px;
    }
`;

const PDescWrapper = styled(PWrapper)`
    opacity: 0.5;
    display: inline-block;
`;

const BlockquoteWrapper = styled.blockquote`
    opacity: 0.9;

    p {
        font-weight: bold;
        font-style: italic;
        font-family: ${props => props.theme.fontFamilies.headings};
        font-size: ${props => props.theme.fontSizes.H1};
        line-height: 50px;
    }
`;

const AWrapper = styled.a`
    text-decoration: none;
    color: black;
    padding-bottom: 0px;
    line-height: 33px;
    border-bottom: 2px dotted ${props => props.theme.colors.accent};
    opacity: 0.7;
    transition: all ease .3s;
    cursor: pointer;
    font-weight: 700;
    display: inline-block;

    &:hover {
        opacity: 1;
        color: black;
    }

    &.dark {
        color: ${props => props.theme.colors.accent};
        opacity: 1;

        svg {
            filter: invert();
        }
    }
`;

const ListItemWrapper = styled.li`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 30px 0;

    div {
        line-height: 25px;
        flex: 9;
    }

    svg {
        min-width: 20px;
        max-width: 20px;
        margin-right: 20px;
    }

    &.dark {
        svg {
            filter: invert();
        }
    }
`;

const TLDRWrapper = styled.div`
    margin-top: 40px;
    padding: 30px;
    background-color: #f2f2f2 !important;
    border-left: 7px solid black;
    position: relative;

    &.dark {
        background-color: black !important;
        border-left: 7px solid white;
    }

    .tldr {
        font-weight: 700;
        font-size: 20px;
        margin-bottom: 20px;
    }
`;

const GetIsDark = styled.div``;

const CW = (props) => {
    return (
        <myContext.Consumer>
            {context => (
                <GetIsDark isDark={context.isDark}>{props.children}</GetIsDark>
            )}
        </myContext.Consumer>
    )
}

export const HTitle = (props) => {
    return (
        <myContext.Consumer>
        {context => (
            <HTitleWrapper className={`htitle ${context.isDark ? 'dark' : null}`}>{props.children}</HTitleWrapper>
        )}
        </myContext.Consumer>
    )
};

export const H1 = (props) => {
    return (
        <myContext.Consumer>
        {context => (
            <H1Wrapper className={`h1 ${context.isDark ? 'dark' : null}`}>{props.children}</H1Wrapper>
        )}
        </myContext.Consumer>
    )
};

export const H2 = (props) => {
    return (
        <myContext.Consumer>
        {context => (
            <H2Wrapper className={`h2 ${context.isDark ? 'dark' : null}`}>{props.children}</H2Wrapper>
        )}
        </myContext.Consumer>
    )
};

export const H3 = (props) => {
    return (
        <myContext.Consumer>
        {context => (
            <H3Wrapper className={`h3 ${context.isDark ? 'dark' : null}`}>{props.children}</H3Wrapper>
        )}
        </myContext.Consumer>
    )
};
export const H4 = (props) => {
    return (
        <myContext.Consumer>
        {context => (
            <H4Wrapper className={`h4 ${context.isDark ? 'dark' : null}`}>{props.children}</H4Wrapper>
        )}
        </myContext.Consumer>
    )
};
export const H5 = (props) => {
    return (
        <myContext.Consumer>
        {context => (
            <H5Wrapper className={`h5 ${context.isDark ? 'dark' : null}`}>{props.children}</H5Wrapper>
        )}
        </myContext.Consumer>
    )
};
export const H6 = (props) => {
    return (
        <myContext.Consumer>
        {context => (
            <H6Wrapper className={`h6 ${context.isDark ? 'dark' : null}`}>{props.children}</H6Wrapper>
        )}
        </myContext.Consumer>
    )
};
export const P = (props) => {
    return (
        <myContext.Consumer>
        {context => (
            <PWrapper className={`p ${context.isDark ? 'dark' : null}`}>{props.children}</PWrapper>
        )}
        </myContext.Consumer>
    )
};
export const PDesc = (props) => {
    return (
        <myContext.Consumer>
        {context => (
            <PDescWrapper className={`p-desc ${context.isDark ? 'dark' : null}`}>{props.children}</PDescWrapper>
        )}
        </myContext.Consumer>
    )
};
export const A = (props) => {
    return (
        <myContext.Consumer>
        {context => (
            <AWrapper onClick={props.onClick} className={`a ${context.isDark ? 'dark' : null}`} href={props.href} target="_blank">{props.children} </AWrapper>
        )}
        </myContext.Consumer>
    )
};
export const Blockquote = (props) => {
    return (
        <myContext.Consumer>
        {context => (
            <BlockquoteWrapper className={`Blockquote ${context.isDark ? 'dark' : null}`} href={props.href}>{props.children} </BlockquoteWrapper>
        )}
        </myContext.Consumer>
    )
};
export const ListItem = (props) => {
    return (
        <myContext.Consumer>
        {context => (
            <ListItemWrapper className={`li ${context.isDark ? 'dark' : null}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg><P>{props.children}</P></ListItemWrapper>
        )}
        </myContext.Consumer>
    )
};

export const TLDR = (props) => {
    return (
        <myContext.Consumer>
        {context => (
            <TLDRWrapper className={`tldr ${context.isDark ? 'dark' : null}`}><H4>TL;DR</H4><PDesc>{props.children}</PDesc></TLDRWrapper>
        )}
        </myContext.Consumer>
    )
};



