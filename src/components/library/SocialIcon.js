import { Link } from 'gatsby';
import React from 'react'
import styled from 'styled-components'
import { largerThan, smallerThan } from '../../helpers/mediaQueries'; 

const Wrapper = styled.div`
    opacity: 0.5;
    display: inline-block;
    transition: all ease .5s;
    margin-left: 20px;

    &:hover {
        opacity: 1;
    }

    img {
        filter: invert();
    }

    ${smallerThan.mobile`
        margin-left: 0;
        margin: 0 10px;
    `};
`;

const SocialIcon = ({link, children}) => {
    return (
        <Link to={link}>
            <Wrapper>
                {children}
            </Wrapper>
        </Link>
    )
}

export default SocialIcon
