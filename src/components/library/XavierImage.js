import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Wrapper = styled.div`
    width: 60px;
`;

const Logo = () => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "xmod-photo-xmas.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1800) {
                        ...GatsbyImageSharpFluid_noBase64
                    }
                }
            }
        }
    `)

    if (!data?.placeholderImage?.childImageSharp?.fluid) {
        return <div>Picture not found</div>
    }

    return <Wrapper className="xavier-image"><Img fluid={data.placeholderImage.childImageSharp.fluid} /></Wrapper>
}

export default Logo
