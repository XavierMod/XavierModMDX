import React, { useState } from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { window, document, exists } from 'browser-monads';

const Wrapper = styled.div`
    width: 30px;

    &.dark {
        filter: invert();
    }
`;

const CrownShape = (props) => {



    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "shapes/xmod-shape-1.png" }) {
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

    return <Wrapper className={`shape shape-crown ${props.isDark ? 'dark' : null}`}><Img fluid={data.placeholderImage.childImageSharp.fluid} /></Wrapper>
}

export default CrownShape
