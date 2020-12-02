import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import ReadingProgress from './ReadingIndicator';
import Logo from './Logo';
import { myContext } from '../../layouts/provider';
import ModeToggler from './ModeToggler';
import BackTop from './BackTop';
import Tag from './Tag';
import { window, document, exists } from 'browser-monads';
import { largerThan, smallerThan } from '../../helpers/mediaQueries'; 

const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    top: -60px;
    left: 0;
    background: ${props => props.theme.colors.mainBG};
    transition: all ease .3s;

    ${largerThan.mobile`
        display: none;
    `};

    &.show {
        top: 0;
    }
`;

const ReadingWrapper = styled.div`

`;

const BarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;

    .logo {
        width: 40px;
    }

    &.isDark {
        .logo {
            filter: invert();
        }
    }
`;

const LogoWrapper = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const TagWrapper = styled.div`

`;

const ToggleWrapper = styled.div`
    padding-left: 10px;
`;

const BackTopWrapper = styled.div`
    margin-left: 20px;
`;

const MobileBar = () => {
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
        <myContext.Consumer>
            {context => (
                <Wrapper className={`${show ? 'show' : null}`}>
                    <BarWrapper className={context.isDark ? 'isDark' : null}>
                        <LogoWrapper>
                            <Logo />
                            <Tag>Xavier Mod</Tag>
                        </LogoWrapper>
                        <TagWrapper>
                        </TagWrapper>
                        <ToggleWrapper>
                            <ModeToggler isDark={context.isDark} onClick={() => context.changeTheme()} />
                        </ToggleWrapper>
                        <BackTopWrapper>
                            <BackTop />
                        </BackTopWrapper>
                    </BarWrapper>
                    <ReadingWrapper>
                        <ReadingProgress />
                    </ReadingWrapper>
                </Wrapper>
            )}
        </myContext.Consumer>
    )
}

export default MobileBar
