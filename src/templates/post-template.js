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
import PostFooter from '../components/blog/PostFooter';
import Snakke from 'react-snakke'
import { window, document, exists } from 'browser-monads';


const postTemplate = ({data}) => {
    
    const {
        mdx: {
            frontmatter: { title, category, image, date, readTime, TLDR }, 
            body, 
        }
    } = data;
    
    return (
        <Layout>
            <article>
                <PostLayout>
                    <PostHeader 
                        text={title}
                        date={date}
                        description={TLDR}
                        readTime={readTime}
                        category={category} />
                </PostLayout>
                <PostImage>
                    <Img fluid={image.childImageSharp.fluid} />
                </PostImage>
                <PostLayout>
                    <Styles.TLDR>{TLDR}</Styles.TLDR>
                    <PostBody>
                        {body}
                    </PostBody>
                    <PostFooter />
                    <div style={{margin: '40px 0'}}>
                        <Link to="/">
                            <Styles.A>Back to all posts</Styles.A>
                        </Link>
                    </div>
                </PostLayout>
            </article>
        </Layout>
    )
}

export const query = graphql`
    query GetSinglePost($slug: String) {
        mdx(frontmatter: {slug: {eq: $slug}}) {
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
`;

export default postTemplate;
