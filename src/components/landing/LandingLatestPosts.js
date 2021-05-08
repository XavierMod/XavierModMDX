import React from 'react'
import styled from 'styled-components'
import CrownShape from '../library/shapes/CrownShape';
import CirclesShape from '../library/shapes/CirclesShape';
import BigCircleShape from '../library/shapes/BigCircleShape';
import LineShape from '../library/shapes/LineShape';
import PostsPreview from './PostsPreview';
import {A, H1, H2} from '../text/TextStyles';
import JournalSVG from '../../images/journal.svg';
import MaxWidthLayout from '../../layouts/MaxWidthLayout';
import WireframeOne from '../library/wireframes/WireframeOne';
import WireframeTwo from '../library/wireframes/WireframeTwo';
import { largerThan, smallerThan } from '../../helpers/mediaQueries'; 

const Wrapper = styled.div`
    position: relative;
    text-align: center;
    margin: 20px;

    .w1 {
        position: absolute;
        bottom: 0;
        left: 0;
    }

    .w2 {
        position: absolute;
        bottom: 0;
        right: 0;
    }
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    ${smallerThan.mobile`
          .w1, .w2 {
              width: 20px;
          }
    `};
`;

const TitleHeader = styled.div`
    flex: 7;
    margin: 30px 0;
`;

const LandingLatestPosts = (props) => {
    return (
        <MaxWidthLayout>
            <Wrapper>
                <Header>
                    <WireframeOne delay="700" />
                    <WireframeTwo delay="1000" />
                    <TitleHeader>
                        <H1>Journal</H1>
                    </TitleHeader>
                </Header>
                <PostsPreview {...props} />
            </Wrapper>
        </MaxWidthLayout>
    )
}

export default LandingLatestPosts
