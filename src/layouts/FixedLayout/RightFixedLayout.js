import React from 'react'
import styled from 'styled-components'
import BackTop from '../../components/library/BackTop';
import Logo from '../../components/library/Logo';
import ModeToggler from '../../components/library/ModeToggler';
import ReadingProgress from '../../components/library/ReadingIndicator';

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 130px;
    height: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    pointer-events: none;


    .ReadingIndicator {
        width: 200px;
        margin: 0 20px;
    }
`;

const Rotate = styled.div`
    transform: rotate(90deg);
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const RightFixedLayout = (props) => {
    return (
        <Wrapper>
            <Rotate>
            <BackTop /> <ReadingProgress />das
            </Rotate>
        </Wrapper>
    )
}

export default RightFixedLayout