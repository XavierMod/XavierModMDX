import React from 'react'
import styled from 'styled-components'
import { A, P, PDesc } from '../text/TextStyles';
import Logo from './Logo';

const Wrapper = styled.div`
    border-top: 1px dotted #d9d9d9;
    padding: 30px 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const Left = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    * {
        font-size: 13px  !important;
    }

    .logo {
        width: 16px;
    }
`;

const Right = styled.div`
    flex: 9;
    text-align: right;

    .a {
        margin-left: 10px;
    }
`;

const Footer = () => {
    return (
        <Wrapper>
            <Left>
                <P>Crafted with ❤️ by <A href="https://www.linkedin.com/in/xavier-mod-22a25964/">Xavier Mod</A> © CC BY 2.0</P>
            </Left>
            <Right>
                <A href="https://github.com/XavierMod"><img height="17" width="17" src="https://unpkg.com/simple-icons@v4/icons/github.svg" /></A>
                <A href="https://www.linkedin.com/in/xavier-mod-22a25964/"><img height="17" width="17" src="https://unpkg.com/simple-icons@v4/icons/linkedin.svg" /></A>
                <A href="https://twitter.com/xaviermod"><img height="17" width="17" src="https://unpkg.com/simple-icons@v4/icons/twitter.svg" /></A>
            </Right>
        </Wrapper>
    )
}

export default Footer
