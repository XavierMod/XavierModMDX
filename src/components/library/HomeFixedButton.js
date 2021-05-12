import React from 'react'
import styled from 'styled-components';
import Logo from './Logo';

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    padding: 20px;
    z-index: 10;
`;

const HomeFixedButton = () => {
    return (
        <Wrapper>
            <Logo />
        </Wrapper>
    )
}

export default HomeFixedButton
