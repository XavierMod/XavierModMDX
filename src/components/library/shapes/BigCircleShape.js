import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Wrapper = styled.div`
    width: 30px;
`;

const CrownShape = () => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "shapes/xmod-shape-bigcircle.png" }) {
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

    return <Wrapper className="shape shape-crown"><Img fluid={data.placeholderImage.childImageSharp.fluid} /></Wrapper>
}

export default CrownShape