import React from 'react'
import styled from 'styled-components'
import MaxWidthLayout from '../../layouts/MaxWidthLayout';
import { A, P, PDesc } from '../text/TextStyles';
import SocialIcon from '../library/SocialIcon';
import { largerThan, smallerThan } from '../../helpers/mediaQueries'; 

const Wrapper = styled.div`
    border-top: 1px dotted #d9d9d9;
    padding: 30px 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    ${smallerThan.mobile`
        display: block;

        .right {
            text-align: center;
            margin-top: 40px;
        }
    `};
`;

const Left = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;

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
        <MaxWidthLayout>
            <Wrapper>
                <Left>
                    <P>Crafted with ❤️ by <A href="https://www.linkedin.com/in/xavier-mod-22a25964/">Xavier Mod</A> © CC BY 2.0</P>
                </Left>
                <Right className="right">
                    <SocialIcon link="https://github.com/XavierMod"><img height="25" width="25" src="https://unpkg.com/simple-icons@v4/icons/github.svg" /></SocialIcon>

                    <SocialIcon link="https://www.linkedin.com/in/xavier-mod-22a25964/"><img height="25" width="25" src="https://unpkg.com/simple-icons@v4/icons/linkedin.svg" /></SocialIcon>

                    <SocialIcon link="https://twitter.com/xaviermod"><img height="25" width="25" src="https://unpkg.com/simple-icons@v4/icons/twitter.svg" /></SocialIcon>
                </Right>
            </Wrapper>
        </MaxWidthLayout>
    )
}

export default Footer
