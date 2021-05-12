import { graphql, Link } from 'gatsby';
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {theme, themeDark} from '../theme/theme';
import PostLayout from '../layouts/post-layout';
import Img from "gatsby-image"
import PostHeader from '../components/blog/PostHeader';
import PostImage from '../components/blog/PostImage';
import PostBody from '../components/blog/PostBody';
import Layout from '../layouts/layout';
import * as Styles from '../components/text/TextStyles';
import ProjectHeader from '../components/projects/ProjectHeader';
import PostFooter from '../components/blog/PostFooter';
import { window, document, exists } from 'browser-monads';
import Button from '../components/library/Button';

const AgeWarningNotice = styled.div`
    background: #ffe6e6;
    border: 1px solid #eb3434;
    color: #eb3434;
    z-index: 1;
    padding: 20px;
    margin-bottom: 30px;
    border-radius: 5px;
    text-align: center;
    margin-bottom: 40px;
    div {
        opacity: 1 !important;
    }
`;


const postTemplate = ({data}) => {
    
    const {
        mdx: {
            frontmatter: { 
                title,
                description,
                slug,
                category,
                date,
                image,
                client,
                client_URL,
                tags,
                ageWarning,
                inDevelopment, 
                repo_link,
                live_link,
                featured
             }, 
            body, 
        }
    } = data;
    
    return (
        <Layout>
            <article>
                <PostLayout>
                    <div style={{marginBottom: '30px'}} onClick={() => window.history.go(-1)}><Button>Go back</Button></div>
                <ProjectHeader {...data.mdx.frontmatter}/>
                {ageWarning ? <AgeWarningNotice className="age">This project is out of date. I have improved since I made it.</AgeWarningNotice> : null}
                </PostLayout>
                <PostImage>
                    <Img fluid={image.childImageSharp.fluid} />
                </PostImage>
                <PostLayout>
                    <Styles.TLDR>
                        {description}
                    </Styles.TLDR>
                </PostLayout>
                <PostLayout>
                    <PostBody>
                        {body}
                    </PostBody>
                    <PostFooter />
                    <div style={{margin: '40px 0'}}>
                        <Link to="/">
                            <Button>All projects</Button>
                        </Link>
                    </div>
                </PostLayout>
            </article>
        </Layout>
    )
}

export const query = graphql`
    query GetSingleProject($slug: String) {
        mdx(frontmatter: {slug: {eq: $slug}}) {
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
            body
        }
    }
`;

export default postTemplate;
