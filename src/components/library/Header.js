import React from 'react'
import styled from 'styled-components'

import Logo from '../../components/library/Logo'
import CrownShape from '../library/shapes/CrownShape';
import ModeToggler from './ModeToggler';
import { myContext } from '../../layouts/provider';
import { largerThan, smallerThan } from '../../helpers/mediaQueries'; 
import WireframeOne from '../../components/library/wireframes/WireframeOne';

const Wrapper = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
`;

const LogoFlex = styled.div`
    flex: 3;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;

    .shape-crown {
        width: 80px;
        ${smallerThan.mobile`
            width: 35px;
        `};
    }
`;

const Header = () => {
    return (
        <myContext.Consumer>
            {context => (
                <Wrapper>
                    <LogoFlex>
                        <WireframeOne />
                    </LogoFlex>
                    <ModeToggler isDark={context.isDark} onClick={() => context.changeTheme()} />
                </Wrapper>
            )}
        </myContext.Consumer>
    )
}

export default Header
