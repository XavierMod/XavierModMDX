import React from 'react'
import styled from 'styled-components'
import CrownShape from '../library/shapes/CrownShape';
import CirclesShape from '../library/shapes/CirclesShape';
import BigCircleShape from '../library/shapes/BigCircleShape';
import LineShape from '../library/shapes/LineShape';
import PostsPreview from './PostsPreview';
import {A, H2} from '../text/TextStyles';
import ProjectsPreview from './ProjectsPreview';
import { Link } from 'gatsby';
import RenderProjects from '../projects/RenderProjects';
import MaxWidthLayout from '../../layouts/MaxWidthLayout';
import Button from '../library/Button';
import { largerThan, smallerThan } from '../../helpers/mediaQueries'; 

const Wrapper = styled.div`
    margin: 80px 0;
    position: relative;

    ${smallerThan.mobile`
        display: block;
    `};
`;

const Header = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    padding-bottom: 70px;

    ${smallerThan.mobile`
        display: block;

        .button {
            display: block;
            width: 90%;
            text-align: center;
            margin: auto;
            margin-top: 45px;
        }
    `};
`;

const TitleHeader = styled.div`
    flex: 7;
`;

const ButtonsHeader = styled.div`
    text-align: right;
`;

const LandingLatestPosts = (props) => {
    return (
        <MaxWidthLayout>
            <Header>
                <TitleHeader>
                    <H2>Featured Work</H2>
                </TitleHeader>
                <ButtonsHeader>
                <Link to="/projects" ><Button>All work</Button></Link>
                </ButtonsHeader>
            </Header>
            <RenderProjects {...props} />
        </MaxWidthLayout>
    )
}

export default LandingLatestPosts
