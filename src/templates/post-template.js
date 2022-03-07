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

const BackgroundColor = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1000000;

  .w1 {
    position: absolute;
    top: 200px;
    left: 80px;
  }

  .w2 {
    position: absolute;
    top: 600px;
    right: 50px;
  }

  ${smallerThan.mobile`
      .w1, .w2 {
        display: none;
      }
  `};
`

const PostImage = styled.div`
  opacity: 1;

  .gatsby-image-wrapper {
    height: 300px;
  }
`

const postTemplate = ({ data }) => {
  const {
    mdx: {
      frontmatter: { title, category, image, date, readTime, TLDR },
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
