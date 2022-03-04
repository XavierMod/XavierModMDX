import React, { useEffect, useState } from "react"
import styled from "styled-components"
import SEO from "../components/seo"

import { graphql } from "gatsby"
import Landing from "../components/Landing"
import BlankLayout from "../layouts/blankLayout"

const Wrapper = styled.div`
  background: black;
`;

const IndexPage = ({ data }) => {
  const posts = data.posts.nodes
  const testObject = {
    landing_title: "Front-End Developer & UX/UI",
    landing_role: "Tui Interactive Media",
    landing_role_link: "https://www.tuimedia.com/",
    landing_stack: "React · Vue · Node · Symfony",
    landing_description:
      "👋 I'm Xavier Mod. Junior/Mid Front-End Dev with UX/UI. Based in London. Open to full-time roles from March/April 2021.",
  }

  return (
    <BlankLayout>
      <SEO title="Home" />
      <Landing markdownData={testObject} posts={posts} />
    </BlankLayout>
  )
}

export const query = graphql`
  {
    posts: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      limit: 4
      filter: { frontmatter: { type: { eq: "post" } } }
    ) {
      nodes {
        excerpt
        frontmatter {
          title
          author
          category
          date(formatString: "Do MMMM, YYYY")
          slug
          readTime
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
  }
`

export default IndexPage
