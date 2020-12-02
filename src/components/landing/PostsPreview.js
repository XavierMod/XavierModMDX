import React from 'react'
import styled from 'styled-components'
import Img from "gatsby-image"
import {HTitle, H3, PDesc, A} from '../text/TextStyles';
import PostCategory from '../blog/PostCategory';
import { Link } from 'gatsby';
import { largerThan, smallerThan } from '../../helpers/mediaQueries'; 
import Tag from '../library/Tag';

const Wrapper = styled.div`

`;

const Line = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding-bottom: 60px;

    ${smallerThan.mobile`
      display: block;
    `};
`;

const RenderPost = styled.div`
    cursor: pointer;

    &:hover {
        .gatsby-image-wrapper {
            box-shadow: 0 30px 60px -10px rgba(0,0,0,0.35), 0 18px 36px -18px rgba(0,0,0,0.35);
        }

        h3 {
            color: ${props => props.theme.colors.accent};
        }
    }
    
    .gatsby-image-wrapper {
        transition: all ease .3s;
        height: 330px;
        box-shadow: 0 30px 60px -10px rgba(0,0,0,0.3), 0 18px 36px -18px rgba(0,0,0,0.23);
    }
    &.long {
        flex: 6;
        padding-right: 30px;

        ${smallerThan.mobile`
            padding: 0;
        `};
    }

    &.short {
        flex: 4;
        padding-left: 30px;

        ${smallerThan.mobile`
            padding: 0;
        `};
    }

    h3 {
        padding-top: 30px;
        padding-bottom: 10px;
        font-family: ${props => props.theme.fontFamilies.secondary};
        font-size: 22px;
    }

    ${smallerThan.mobile`
        margin-bottom: 40px;
    `};
`;


const PostsPreview = (props) => {

    return (
        <Wrapper>
            <Line>
                {props.posts.map((el, ind, arr) => {
                    if (ind == '0' || ind == '1') {
                        return (
                            <RenderPost className={ind == '0' ? 'long' : 'short'}>
                                <Link to={`/post/${props.posts[ind].frontmatter.slug}`}>
                                    <Img fluid={props.posts[ind].frontmatter.image.childImageSharp.fluid} />
                                    <H3 className="title">{props.posts[ind].frontmatter.title}</H3>
                                    <PDesc>{props.posts[ind].frontmatter.readTime} minutes read</PDesc> · <PDesc>{props.posts[ind].frontmatter.date}</PDesc> · <Tag>{props.posts[ind].frontmatter.category}</Tag>
                                </Link>
                            </RenderPost>
                        )
                    }
                })}
            </Line>
            <Line>
                {props.posts.map((el, ind, arr) => {
                    if (ind == '2' || ind == '3') {
                        return (
                            <RenderPost className={ind == '2' ? 'long' : 'short'}>
                                <Link to={`/post/${props.posts[ind].frontmatter.slug}`}>
                                    <Img fluid={props.posts[ind].frontmatter.image.childImageSharp.fluid} />
                                    <H3 className="title">{props.posts[ind].frontmatter.title}</H3>
                                    <PDesc>{props.posts[ind].frontmatter.readTime} minutes read</PDesc> · <PDesc>{props.posts[ind].frontmatter.date}</PDesc> · <Tag>{props.posts[ind].frontmatter.category}</Tag>
                                </Link>
                            </RenderPost>
                        )
                    }
                })}
            </Line>
        </Wrapper>
    )
}

export default PostsPreview
