import { Link } from 'gatsby';
import React from 'react'
import styled from 'styled-components'
import Button from '../library/Button';
import Logo from '../library/Logo';

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 200px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;

    .logo {
        filter: invert();
    }
`;

const ProjectsTop = () => {
    return (
        <Wrapper>
            <Link to="/">
                <Button>Back to home</Button>
            </Link>
        </Wrapper>
    )
}

export default ProjectsTop
