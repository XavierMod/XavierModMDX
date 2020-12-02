import React from 'react'
import styled from 'styled-components'
import Img from "gatsby-image"
import {HTitle, H3, PDesc, A} from '../text/TextStyles';
import PostCategory from '../blog/PostCategory';
import { Link } from 'gatsby';
import { largerThan, smallerThan } from '../../helpers/mediaQueries'; 

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

const Text = styled.div`
    ${smallerThan.mobile`
        background: ${props => props.theme.colors.mainBG_lighter};
        padding: 20px;
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

        ${smallerThan.mobile`
            height: 140px;
        `};
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

        ${smallerThan.mobile`
            padding-top: 0;
        `};
    }

    ${smallerThan.mobile`
        margin-bottom: 40px;
    `};
`;


const ProjectsPreview = (props) => {
    console.log(props.projects);
    return (
        <Wrapper>
            <Line>
                {props.projects.map((el, ind, arr) => {
                    if (ind == '0' || ind == '1') {
                        return (
                            <RenderPost className={ind == '0' ? 'long' : 'short'}>
                                <Link to={`/project/${el.frontmatter.slug}`}>
                                    <Img fluid={el.frontmatter.image.childImageSharp.fluid} />
                                    <Text>
                                        <H3 className="title">{el.frontmatter.title}</H3>
                                        <PDesc>{el.frontmatter.tags}</PDesc> · <PostCategory category={el.frontmatter.category} />
                                    </Text>
                                </Link>
                            </RenderPost>
                        )
                    }
                })}
            </Line>
            <Line>
                {props.projects.map((el, ind, arr) => {
                    if (ind == '2' || ind == '3') {
                        return (
                            <RenderPost className={ind == '2' ? 'long' : 'short'}>
                                <Link to={`/project/${el.frontmatter.slug}`}>
                                    <Img fluid={el.frontmatter.image.childImageSharp.fluid} />
                                    <Text>
                                        <H3 className="title">{el.frontmatter.title}</H3>
                                        <PDesc>{el.frontmatter.tags}</PDesc> · <PostCategory category={el.frontmatter.category} />
                                    </Text>
                                </Link>
                            </RenderPost>
                        )
                    }
                })}
            </Line>
        </Wrapper>
    )
}

export default ProjectsPreview
