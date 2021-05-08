import { Link } from 'gatsby';
import React from 'react'
import styled from 'styled-components';
import Img from 'gatsby-image';
import { H1, H2, H3, H4, PDesc } from '../text/TextStyles';
import PostCategory from '../blog/PostCategory';
import { largerThan, smallerThan } from '../../helpers/mediaQueries'; 
import Tag from '../library/Tag';
import Button from '../library/Button';
import MaxWidthLayout from '../../layouts/MaxWidthLayout';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 50px;
    overflow: hidden;
    height: 100%; /* new */
`;

const RenderPost = styled.div`
    cursor: pointer;
    width: 100%;
    height: 400px;
    position: relative;
    
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

const ImageWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .gatsby-image-wrapper {
        height: inherit;
        width: inherit;
        opacity: 0.5;
    }
`;

const Text = styled.div`
    ${smallerThan.mobile`
        padding: 20px;
        background: rgb(0,0,0);
        background: linear-gradient(0deg, rgba(0,0,0,0.8158508158508159) 0%, rgba(0,0,0,0) 100%);
    `};
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,0.8158508158508159) 0%, rgba(0,0,0,0) 100%);
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    padding: 40px;
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

    h4 {
        text-transform: uppercase;
        font-size: 15px;
        letter-spacing: 0.3px;
        opacity: 0.5;
        padding-top: 20px;
    }
`;

const ButtonWrapper = styled.div`
    z-index: -10;
`;

const RenderProjects = (props) => {
    return (
        <Wrapper>
            {props.projects.map((el, ind, arr) => {
                    return (
                        <Link to={`/project/${el.frontmatter.slug}`}>
                            <RenderPost>
                                    <ImageWrapper>
                                        <Img fluid={el.frontmatter.image.childImageSharp.fluid} />
                                    </ImageWrapper>
                                    <Text>
                                        <ProjectTags>
                                            <H4>{el.frontmatter.category}
                                            </H4>
                                        </ProjectTags>
                                        <H2 className="title">{el.frontmatter.title}</H2>
                                        <ProjectDescription>
                                            <PDesc>{el.frontmatter.description}</PDesc>
                                        </ProjectDescription>
                                        <ButtonWrapper>
                                            <Button>VIEW PROJECT</Button>
                                        </ButtonWrapper>
                                    </Text>
                            </RenderPost>
                        </Link>
                    )
                })}
        </Wrapper>
    )
}

export default RenderProjects
