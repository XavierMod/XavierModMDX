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

const TextEffect = styled.div`
    margin: 60px 0;

    ${smallerThan.mobile`
        transform: scale(0.5);
    `};

h1{
	margin: 0 15px;
	line-height: .7;
	text-shadow: 0 0 2px rgba(0, 0, 0, .45);
	animation: span 3s ease-in infinite alternate;
    font-family: inherit
}
.main{
	display: flex;
	justify-content: center;
	align-items: flex-start;
}
.letter{
	display: inline-flex;
	height: 30px;
	width: 27px;
	/* border: 2.5px solid #FF1EAD; */
	border: 5.3px solid white;
	border-radius: 14px;
	box-shadow:
		0 0 2px rgba(0, 0, 0, .75),
		inset 0 0 2px rgba(0, 0, 0, .45);

	animation: letter 3s ease-in-out infinite alternate;
}
@keyframes span {
	0%,30%{ margin: 0 15px; }
	70%,100%{ margin: 0 5px; }
}
@keyframes letter {
	0%,30%{ width: 27px; }
	70%,100%{ width: 30vw; }
}
`;

const LandingLatestPosts = (props) => {
    return (
        <MaxWidthLayout>
            <Wrapper>
                <Header>
                    <WireframeOne delay="700" />
                    <WireframeTwo delay="1000" />
                    <TextEffect>
                        <div class="main">
                            <h1>M</h1>
                            <h1 style={{paddingRight: '30px'}}>Y</h1>
                            <h1>J</h1>
                            <h1 class="letter"></h1>
                            <h1>U</h1>
                            <h1>R</h1>
                            <h1>N</h1>
                            <h1>A</h1>
                            <h1>L</h1>
                        </div>
                    </TextEffect>
                </Header>
                <PostsPreview {...props} />
            </Wrapper>
        </MaxWidthLayout>
    )
}

export default LandingLatestPosts
