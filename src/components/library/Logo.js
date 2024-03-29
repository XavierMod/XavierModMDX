import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { window, document, exists } from 'browser-monads';
import { H2 } from '../text/TextStyles';

const Wrapper = styled.div`
    width: 45px;
    transition: ease .3s all;
    padding: 10px;

    &.dark {
        filter: invert();
    }

    &:hover {
        transform: scale(1.2) rotate(90deg);
    }
`;

const Logo = (props) => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "xmod-logo.png" }) {
                childImageSharp {
                    fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
        }
    `)

    if (!data?.placeholderImage?.childImageSharp?.fluid) {
        return <div>Picture not found</div>
    }

    return <Link to="/"><H2>Xavier Mod</H2></Link>
}

export default Logo
