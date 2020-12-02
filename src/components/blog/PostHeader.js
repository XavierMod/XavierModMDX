import React from 'react'
import styled from 'styled-components'
import XavierImage from '../library/XavierImage'
import PostCategory from './PostCategory';
import {HTitle, P, PDesc, A, Blockquote, TLDR, H1} from '../text/TextStyles';
import { myContext } from '../../layouts/provider';
import { largerThan, smallerThan } from '../../helpers/mediaQueries'; 
import Tag from '../library/Tag';


const PostHeaderWrapper = styled.div`
    padding-bottom: 20px;

    .h1 {
        ${smallerThan.mobile`
            font-size: 30px !important;
            line-height: 40px !important;
        `};
    }
`;

const Subtitle = styled.div`
    display: flex;
    align-items: center;
    margin: 30px 0;
`;


const Text = styled.div`
`;

const PostHeader = (props) => {
    return (
        <myContext.Consumer>
            {context => (
                <PostHeaderWrapper>
                    <H1>{props.text}</H1>
                    <div style={{marginTop: '10px'}}><Tag>{props.category}</Tag></div>
                    <Subtitle>
                        <Text>
                            <PDesc><span style={{fontWeight: 700}}>By Xavier Mod</span> on {props.date} · {props.readTime} min read</PDesc>
                        </Text>
                    </Subtitle>
                </PostHeaderWrapper>
            )}
        </myContext.Consumer>
    )
}

export default PostHeader
