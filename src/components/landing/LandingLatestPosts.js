import React from 'react'
import styled from 'styled-components'
import CrownShape from '../library/shapes/CrownShape';
import CirclesShape from '../library/shapes/CirclesShape';
import BigCircleShape from '../library/shapes/BigCircleShape';
import LineShape from '../library/shapes/LineShape';
import PostsPreview from './PostsPreview';
import {A, H1, H2} from '../text/TextStyles';
import JournalSVG from '../../images/journal.svg';

const Wrapper = styled.div`
    margin: 80px 0;
    position: relative;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 70px;
`;

const TitleHeader = styled.div`
    flex: 7;
`;

const ButtonsHeader = styled.div`
    
`;

const JournalImage = styled.div`
`;

const LandingLatestPosts = (props) => {
    return (
        <Wrapper>
            <Header>
                <TitleHeader>
                    <H1>Journal</H1>
                </TitleHeader>
            </Header>
            <PostsPreview {...props} />
        </Wrapper>
    )
}

export default LandingLatestPosts
