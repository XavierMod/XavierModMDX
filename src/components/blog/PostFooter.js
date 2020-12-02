import { Link } from 'gatsby';
import React from 'react'
import styled from 'styled-components'
import { A, P, PDesc } from '../text/TextStyles';
import { window, document, exists } from 'browser-monads';

const PostFooterWrapper = styled.div`
    padding: 30px 0;
`;

const LinkedinMessage = styled.div`
    background-color: ${props => props.theme.colors.mainBG} !important;
    padding: 30px;
    border: 1px solid #c7c7c7;
    border-radius: 5px;
    color: black;
`;

const PostFooter = () => {
    return (
        <PostFooterWrapper>
            <LinkedinMessage className={`${window.localStorage.getItem('xm_set_mode')}`}>
                <P>And... that's it! Brilliant! If you'd like to have a chat with me, consider following me on <A href="https://www.linkedin.com/in/xavier-mod-22a25964/">Linkedin</A> .</P>
            </LinkedinMessage>
        </PostFooterWrapper>
    )
}

export default PostFooter
