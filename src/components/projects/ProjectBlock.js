import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import Tag from '../library/Tag';
import { H1, HTitle } from '../text/TextStyles';

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
`;

const Footer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 30px !important;
    width: 100%;
    margin: 40px;
    z-index: 1000;
`;

const ProjectBlock = (props) => {
    const [ isCurrent, setCurrent ] = useState(false);

    useEffect(() => {
        console.log(isCurrent);
        props.slideNumber === props.currentSlide ? setCurrent(true) : setCurrent(false)
    }, []);

    return (
        <Wrapper>
            <Center>
                <HTitle>{props.data.frontmatter.title}</HTitle>
            </Center>
            <Footer>
                <Tag>react</Tag>
                <Tag>react</Tag>
                <Tag>react</Tag>
            </Footer>
            <Image className="Image" isCurrent={isCurrent} src="https://picsum.photos/1200/1300" />
        </Wrapper>
    )
}

export default ProjectBlock
