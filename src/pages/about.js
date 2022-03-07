import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import PostImage from "../components/blog/PostImage"
import Img from "gatsby-image"
import PostLayout from "../layouts/post-layout"
import PostFooter from "../components/blog/PostFooter"
import MovingText from "../components/library/MovingText"

const Wrapper = styled.div`
  .gatsby-image-wrapper {
    height: 300px;
  }
`

const TextWrapper = styled.div`
  max-width: 400px;

  span {
    font-size: 40px;
    display: inline-block;
    background: white;
    margin: 0 5px;
    color: black;
    padding: 5px;
    border-radius: 10px;
  }
`

const AboutPage = ({ data }) => {
  const aboutBody = data.aboutBody.body
  const aboutPhoto = data.aboutPhoto.childImageSharp.fluid

  return (
    <Layout>
      <SEO title="About" />
      <Wrapper>
        <PostLayout>
          <PostImage>
            <Img style={{marginBottom: 50}} fluid={aboutPhoto} />
          </PostImage>
          <MDXRenderer>{aboutBody}</MDXRenderer>
          <PostFooter />
        </PostLayout>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  {
    aboutBody: mdx(frontmatter: { type: { eq: "about" } }) {
      body
    }
    aboutPhoto: file(name: { eq: "about-me" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default AboutPage
