import React, { useState } from "react"
import Layout from "../layouts/layout"
import SEO from "../components/seo"

import { graphql } from "gatsby"
import Landing from "../components/Landing"
import { DarkModeToggler } from "react-darkmode-toggler"
import {lightTheme, darkTheme} from '../theme/theme';
import styled, { ThemeProvider } from 'styled-components'
import FixedLayout from "../layouts/FixedLayout/FixedLayout"
import Cursor from "../services/Cursor"
import { window, document, exists } from 'browser-monads';

const IndexPage = ({data}) => {
  const posts = data.posts.nodes;
  const projects = data.projects.nodes;

  const testObject = {
    landing_title: "Front-End Developer & UX/UI",
    landing_role: "Tui Interactive Media",
    landing_role_link: "https://www.tuimedia.com/",
    landing_stack: "React · Vue · Node · Symfony",
    landing_description: "👋 I'm Xavier Mod. Junior/Mid Front-End Dev with UX/UI. Based in London. Open to full-time roles from March/April 2021."
  }
  
  return (
      <FixedLayout>
        <SEO title="Home" />
        <Landing 
          markdownData={testObject}
          posts={posts}
          projects={projects} />
      </FixedLayout>
  )
}

export const query = graphql`
  {
    posts: allMdx(sort: {fields: frontmatter___date, order: DESC}, limit: 4, filter: {frontmatter: {type: {eq: "post"}}}) {
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
    projects: allMdx(sort: {fields: frontmatter___date, order: DESC}, limit: 4, filter: {frontmatter: {featured: {eq: true}}}) {
      nodes {
        frontmatter {
              title
              description
              slug
              category
              date(formatString: "Do MMMM, YYYY")
              image {
                  childImageSharp {
                      fluid {
                          ...GatsbyImageSharpFluid
                      }
                  }
              }
              client
              client_URL
              tags
              ageWarning
              inDevelopment
              repo_link
              live_link
              featured
            }
        id
      }
    }
  }
`

export default IndexPage
