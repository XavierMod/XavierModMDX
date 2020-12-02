import React from 'react'
import styled from 'styled-components'
import CrownShape from '../library/shapes/CrownShape';
import CirclesShape from '../library/shapes/CirclesShape';
import BigCircleShape from '../library/shapes/BigCircleShape';
import LineShape from '../library/shapes/LineShape';
import PostsPreview from './PostsPreview';
import {A, H2} from '../text/TextStyles';

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

const LandingLatestPosts = (props) => {
    return (
        <Wrapper>
            <Header>
                <TitleHeader>
                    <H2>Journal</H2>
                </TitleHeader>
                <ButtonsHeader>
                    {/*<A>All posts</A> */}
                </ButtonsHeader>
            </Header>
            <PostsPreview {...props} />
        </Wrapper>
    )
}

export default LandingLatestPosts
