import { Link } from 'gatsby';
import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Logo from '../../components/library/Logo';
import ModeToggler from '../../components/library/ModeToggler';
import SocialIcon from '../../components/library/SocialIcon';
import Video from '../../components/library/Video';
import { A } from '../../components/text/TextStyles';
import MaxWidthLayout from '../MaxWidthLayout';

const Wrapper = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px;
    background-color: ${props => props.theme.colors.mainBG_2};

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
        <MaxWidthLayout>
            <Wrapper className={`${show ? 'show' : null}`}>
                <FlexLeft>
                    <Logo isDark={props.context.isDark} />
                </FlexLeft>
                <FlexRight>
                    <SocialIcon link="https://www.linkedin.com/in/xavier-mod-22a25964/">
                        <img height="25" width="25" src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/linkedin.svg" />
                    </SocialIcon>
                    <SocialIcon link="https://github.com/XavierMod">
                        <img height="25" width="25" src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/github.svg" />
                    </SocialIcon>
                </FlexRight>
            </Wrapper>
        </MaxWidthLayout>
    )
}

export default FooterFixedLayout