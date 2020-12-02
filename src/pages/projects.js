import React from "react"
import styled from 'styled-components'
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import { A, H1, HTitle } from "../components/text/TextStyles"
import RenderProjects from '../components/projects/RenderProjects.js'
import { largerThan, smallerThan } from '../helpers/mediaQueries'; 

const ProjectsWrapper = styled.div`
    padding: 60px 0;
    
    .htitle {
        padding-top: 40px;
    }

    ${smallerThan.mobile`
        .htitle {
          font-size: 50px;
        }

        padding: 20px 0 !important;
    `};
`;

const CategoryBlock = styled.div`

  h1 {
    padding-bottom: 30px;
  }
`;

const Projects = ({data}) => {

  console.log(data.frontEndProjects)

  return (
    <Layout>
    <SEO title="Projects" />
    <ProjectsWrapper>
        <Link to="/"><A>Back</A></Link>
        <HTitle>My work</HTitle>
        <br />
        <br />
        <br />
        <CategoryBlock>
          <H1>Front-End Development</H1>
          <RenderProjects projects={data.frontEndProjects.nodes} />
        </CategoryBlock>
        <CategoryBlock>
          <H1>Full-Stack Development</H1>
          <RenderProjects projects={data.fullStackProjects.nodes} />
        </CategoryBlock>
        <CategoryBlock>
          <H1>UX/UI Projects</H1>
          <RenderProjects projects={data.UIProjects.nodes} />
        </CategoryBlock>
        <CategoryBlock>
          <H1>Academic</H1>
          <RenderProjects projects={data.academicProjects.nodes} />
        </CategoryBlock>
    </ProjectsWrapper>
    </Layout>
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