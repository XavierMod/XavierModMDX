import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Logo from '../../components/library/Logo';
import ModeToggler from '../../components/library/ModeToggler';

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 140px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px;

    &.show {
        display: none;
    }
`;

const FlexLeft = styled.div`
    flex: 5;
    text-align: left;
`;

const FlexRight = styled.div`
    flex: 5;
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const FooterFixedLayout = (props) => {
    const [show, setShow] = useState(false);

    const scrollListener = (target) => {
        console.log(window.scrollY)
        if (window.scrollY  > 500) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollListener);
        return () => window.removeEventListener("scroll", scrollListener);
    });


    return (
        <Wrapper className={`${show ? 'show' : null}`}>
            <FlexLeft>
                <Logo isDark={props.context.isDark} />
            </FlexLeft>
            <FlexRight>
                <ModeToggler isDark={props.context.isDark} onClick={() => props.context.changeTheme()} />
            </FlexRight>
        </Wrapper>
    )
}

export default FooterFixedLayout