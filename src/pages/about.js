import React from "react"
import styled from 'styled-components'
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { A } from "../components/text/TextStyles"
import PostImage from "../components/blog/PostImage"
import Img from 'gatsby-image'
import PostLayout from '../layouts/post-layout';
import PostFooter from "../components/blog/PostFooter"

const Wrapper = styled.div`
  padding-top: 40px;

  .gatsby-image-wrapper {
    height: 300px;
    margin: 30px 0;
  }
`;

const AboutPage = ({data}) => {
  const aboutBody = data.aboutBody.body;
  const aboutPhoto = data.aboutPhoto.childImageSharp.fluid;
  
  return (
    <Layout>
      <SEO title="About" />
      <Wrapper>
          <Link to="/"><A>Back</A></Link>
          <PostImage>
            <Img fluid={aboutPhoto} />
          </PostImage>
          <PostLayout>
            <MDXRenderer>
              {aboutBody}
            </MDXRenderer>
            <PostFooter />
          </PostLayout>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  {
    aboutBody: mdx(frontmatter: {type: {eq: "about"}}) {
      body
    }
    aboutPhoto: file(name: {eq: "xmod-about"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default AboutPage