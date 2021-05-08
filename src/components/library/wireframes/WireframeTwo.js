import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { myContext } from '../../../layouts/provider';

const Wrapper = styled.div`
    width: 90px;
    z-index: 1000;
    transition: all .4s ease;
    filter: none;

    &:hover {
        transform: scale(0.9)
    }

    &.isDark {
        filter: invert();    
    }
`;

const WireframeOne = (props) => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "wireframes/w2.png" }) {
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

    return (
    <myContext.Consumer>
        {context => (
            <Wrapper 
            data-sal="slide-up"
            data-sal-delay={props.delay}
            data-sal-easing="ease" 
            className={`wireframe w2 ${context.isDark ? 'isDark' : null}`}><Img fluid={data.placeholderImage.childImageSharp.fluid} /></Wrapper>
        )}
    </myContext.Consumer>
    )


}

export default WireframeOne