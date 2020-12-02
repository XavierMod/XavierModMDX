import { Link } from 'gatsby';
import React from 'react'
import styled from 'styled-components';
import Img from 'gatsby-image';
import { H3, PDesc } from '../text/TextStyles';
import PostCategory from '../blog/PostCategory';
import { largerThan, smallerThan } from '../../helpers/mediaQueries'; 
import Tag from '../library/Tag';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;

    ${smallerThan.mobile`
        display: block;
    `};
`;

const RenderPost = styled.div`
    cursor: pointer;
    flex-grow: 1;
    width: 50%;
    padding-right: 30px;
    padding-bottom: 60px;

    ${smallerThan.mobile`
        width: 100%;
        padding: 0;
        margin-bottom: 30px;
    `};

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
    h3 {
        padding-top: 30px;
        font-family: ${props => props.theme.fontFamilies.secondary};
        font-size: 22px;

        ${smallerThan.mobile`
            padding-top: 10px;
            padding-bottom: 0;
        `};
    }

`;

const Text = styled.div`
    ${smallerThan.mobile`
        background: ${props => props.theme.colors.mainBG_lighter};
        padding: 20px;
    `};
`;

const ProjectDescription = styled.div`
    .p-desc {
        margin: 15px 0;
    }
`;

const ProjectTags = styled.div`
    .p-desc {
        font-weight: 500;
        opacity: 0.3 !important;
    }
`;

const RenderProjects = (props) => {
    return (
        <Wrapper>
            {props.projects.map((el, ind, arr) => {
                        return (
                            <RenderPost>
                                <Link to={`/project/${el.frontmatter.slug}`}>
                                    <Img fluid={el.frontmatter.image.childImageSharp.fluid} />
                                    <Text>
                                        <H3 className="title">{el.frontmatter.title}</H3>
                                        <br />
                                        {el.frontmatter.tags.split(", ").map((el, ind, arr) => {
                                                return <Tag className="block">{el}</Tag>
                                            })}
                                        <ProjectDescription>
                                            <PDesc>{el.frontmatter.description}</PDesc>
                                        </ProjectDescription>
                                        <ProjectTags>
                                            <PDesc>{el.frontmatter.category}
                                            </PDesc>
                                        </ProjectTags>
                                    </Text>
                                </Link>
                            </RenderPost>
                        )
                })}
        </Wrapper>
    )
}

export default RenderProjects
