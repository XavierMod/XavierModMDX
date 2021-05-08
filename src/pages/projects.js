import React from "react"
import styled from 'styled-components'
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import BlankLayout from '../layouts/blankLayout';
import ProjectsModule from "../components/projects/ProjectsModule"
import MaxWidthLayout from "../layouts/MaxWidthLayout";
import Layout from "../layouts/layout";

const Wrapper = styled.div`
  height: 100vh;
`;

const Projects = ({data}) => {

  console.log(data.frontEndProjects);

  return (
    <Wrapper>
      <BlankLayout>
          <SEO title="Projects" />
          <ProjectsModule slides={data.frontEndProjects.nodes} />
      </BlankLayout>
    </Wrapper>
  )
}

export const query = graphql`
  {
    frontEndProjects: allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {category: {eq: "Front-End Development"}}}) {
      nodes {
        frontmatter {
            title
            description
            slug
            category
            image {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            tags
            featured
          }
      }
    }
    fullStackProjects: allMdx(sort: {fields: frontmatter___date, order: DESC}, limit: 4, filter: {frontmatter: {category: {eq: "Full-Stack Development"}}}) {
      nodes {
        frontmatter {
            title
            description
            slug
            category
            image {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            tags
            featured
          }
      }
    }
    UIProjects: allMdx(sort: {fields: frontmatter___date, order: DESC}, limit: 4, filter: {frontmatter: {category: {eq: "UI Design"}}}) {
      nodes {
        frontmatter {
            title
            description
            slug
            category
            image {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            tags
            featured
          }
      }
    }
    academicProjects: allMdx(sort: {fields: frontmatter___date, order: DESC}, limit: 4, filter: {frontmatter: {category: {eq: "Academic"}}}) {
      nodes {
        frontmatter {
            title
            description
            slug
            category
            image {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            tags
            featured
          }
      }
    }
  }
`

export default Projects