import { graphql, Link } from "gatsby"
import React from "react"
import styled, { ThemeProvider } from "styled-components"
import PostLayout from "../layouts/post-layout"
import PostHeader from "../components/blog/PostHeader"
import PostBody from "../components/blog/PostBody"
import Layout from "../layouts/layout"
import PostFooter from "../components/blog/PostFooter"
import WireframeTwo from "../components/library/wireframes/WireframeTwo"
import WireframeOne from "../components/library/wireframes/WireframeOne"
import ReadingProgress from "../components/library/ReadingIndicator"
import Img from "gatsby-image"
import { largerThan, smallerThan } from "../helpers/mediaQueries"
import MovingText from "../components/library/MovingText"

const ReadingWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 5px;
`

const postTemplate = ({ data }) => {
  const {
    mdx: {
      frontmatter: {
        title,
        category,
        image,
        date,
        readTime,
        company,
        areas,
        technologies,
        TLDR,
        privateRepo,
      },
      body,
    },
  } = data

  return (
    <Layout>
      <ReadingWrapper>
        <ReadingProgress />
      </ReadingWrapper>
      <article>
        <PostLayout>
          <PostHeader
            text={title}
            date={date}
            description={TLDR}
            company={company}
            areas={areas}
            technologies={technologies}
            privateRepo={privateRepo}
            readTime={readTime}
            category={category}
          />
          <PostBody>{body}</PostBody>
          <PostFooter />
        </PostLayout>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query GetSinglePost($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        category
        date(formatString: "Do MMMM, YYYY")
        readTime
        slug
        TLDR
        company
        technologies
        areas
        privateRepo
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body
    }
  }
`

export default postTemplate
