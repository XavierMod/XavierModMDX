import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import Tag from '../library/Tag';
import { H1, HTitle } from '../text/TextStyles';
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Link } from 'gatsby';

const Wrapper = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    opacity: 0.5;
    transition: all ease .5s;
    cursor: pointer;

    &:hover {
        opacity: 1;

        .Image {
            width: 100%;
            height: 100%;
        }
    }
`;

const Image = styled.div`
    width: 90%;
    height: 100px;
    padding: 20px;
    z-index: -1;
    background: url(${props => props.src});
    transition: all ease .5s;
    background-repeat: no-repeat;
    background-position: center; 
    opacity: 0.5;
`;

const Center = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 60px;
    }
`;

const ProjectBlock = (props) => {
    const [ isCurrent, setCurrent ] = useState(false);

    useEffect(() => {
        console.log(isCurrent);
        console.log(props.data);
        props.slideNumber === props.currentSlide ? setCurrent(true) : setCurrent(false)
    }, []);

    return (
        <Link to={`/project/${props.data.frontmatter.slug}`}>
            <Wrapper>
                <Center>
                    <HTitle>{props.data.frontmatter.title}</HTitle>
                </Center>
                <Image>
                    <Img className="Image" isCurrent={isCurrent} fluid={props.data.frontmatter.image.childImageSharp.fluid} />
                </Image>
            </Wrapper>
        </Link>
    )
}

export default ProjectBlock
