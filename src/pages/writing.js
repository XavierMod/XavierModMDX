import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { A, H1, H2, H3, P } from "../components/text/TextStyles"
import Layout from "../layouts/layout"
import MaxWidthLayout from "../layouts/MaxWidthLayout"
import Icon from "react-eva-icons"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { window, document, exists } from "browser-monads"
import { largerThan, smallerThan } from "../helpers/mediaQueries"

const Wrapper = styled.div`
  .MaxWidthLayout {
    height: 100%;
  }
`

const TitlePage = styled.div`
  padding: 60px;
  max-width: 1500px;
  margin: auto;

  h1 {
    font-size: 60px;
    font-weight: 400px !important;
  }

  ${smallerThan.mobile`
    padding: 20px;

    h1 {
      font-size: 30px;
      text-align: center;
      line-height: 30px;
      margin-bottom: 40px;
    }
  `};
`

const Highlight = styled.div`
  display: inline-block;
  background: ${props => props.theme.colors.accentSecondary};
  font-weight: 700;
  padding: 0 5px;
  margin: 10px 0;
`

const Posts = styled.div`
  max-width: 1500px;
  margin: auto;
  margin-top: 20px;

  ${smallerThan.mobile`
    margin-top: 0;
  `};
`

const Post = styled.div`
  position: relative;
  height: 450px;
  z-index: 1;
  border-top: 1px dotted rgba(255, 255, 255, 0.4);
  border-bottom: 1px dotted rgba(255, 255, 255, 0.4);

  .gatsby-image-wrapper {
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -1;
  }
`

const PostData = styled.div`
  background: rgba(0, 0, 0, 0.95);
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all ease 1s;

  h1 {
    position: absolute;
    bottom: 40px;
    left: 0;
  }

  p {
    position: absolute;
    top: 40px;
    left: 0;
  }

  a {
    position: absolute;
    top: 40px;
    right: 0;
    font-size: 20px;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.6);
    transition: all ease 1s;
  }

  ${smallerThan.mobile`
    padding: 30px;

    a {
      display: none;
    }

    p {
      top: 0;
    }
  `};
`

const Filter = styled.ul`
  text-align: right;
  position: absolute;
  right: 30px;
  top: -50px;

  li {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    font-size: 25px;
    opacity: 0.9;
  }

  svg {
    margin-right: 20px;
  }

  ${smallerThan.mobile`
    display: none;
  `};
`

const ScrollDown = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  svg {
    margin-right: 10px;
  }

  ${smallerThan.mobile`
    display: none;
    margin-top: 0;
  `};
`;

const Writing = ({ data }) => {
  const allPosts = data.allPosts?.nodes || []
  const projectPosts = data.projectPosts?.nodes || []
  const techPosts = data.techPosts?.nodes || []
  const codingPosts = data.codingPosts?.nodes || []
  const otherPosts = data.otherPosts?.nodes || []

  const [posts, setPosts] = useState(null)

  useEffect(() => {
    let search = window.location.search
    let params = new URLSearchParams(search)
    let getParam = params.get("category")

    console.log("get", getParam)

    if (getParam === null) {
      setPosts({ type: "allPosts", nodes: allPosts })
    } else if (getParam === "project") {
      setPosts({ type: "projectPosts", nodes: projectPosts })
    } else if (getParam === "tech") {
      setPosts({ type: "techPosts", nodes: techPosts })
    } else if (getParam === "coding") {
      setPosts({ type: "codingPosts", nodes: codingPosts })
    } else if (getParam === "other") {
      setPosts({ type: "otherPosts", nodes: otherPosts })
    }
  }, [])

  return (
    <Wrapper>
      <Layout>
        <TitlePage>
          <MaxWidthLayout>
          <H1>
            I write about <Highlight>coding</Highlight> and the impact of{" "}
            <Highlight>tech</Highlight> in our daily lives.
          </H1>
          <ScrollDown>
            <Icon
              name="arrow-downward-outline"
              size="large" // small, medium, large, xlarge
              color="red"
              animation={{
                type: "pulse", // zoom, pulse, shake, flip
                hover: true,
                infinite: false,
              }}
            />
            Scroll down
          </ScrollDown>
          </MaxWidthLayout>
        </TitlePage>
        <MaxWidthLayout addHeight={true}>
          <Filter>
            <li onClick={() => setPosts({ type: "allPosts", nodes: allPosts })}>
              <Icon
                name="checkmark-square-2-outline"
                size="large" // small, medium, large, xlarge
                color="red"
                animation={{
                  type: "pulse", // zoom, pulse, shake, flip
                  hover: true,
                  infinite: false,
                }}
              />
              <span>All</span>
            </li>
            <li
              onClick={() =>
                setPosts({ type: "projectPosts", nodes: projectPosts })
              }
            >
              <Icon
                name="checkmark-square-2-outline"
                size="large" // small, medium, large, xlarge
                color="red"
                animation={{
                  type: "pulse", // zoom, pulse, shake, flip
                  hover: true,
                  infinite: false,
                }}
              />
              <span>Project</span>
            </li>
            <li
              onClick={() => setPosts({ type: "techPosts", nodes: techPosts })}
            >
              <Icon
                name="checkmark-square-2-outline"
                size="large" // small, medium, large, xlarge
                color="red"
                animation={{
                  type: "pulse", // zoom, pulse, shake, flip
                  hover: true,
                  infinite: false,
                }}
              />
              <span>Technology</span>
            </li>
            <li
              onClick={() =>
                setPosts({ type: "codingPosts", nodes: codingPosts })
              }
            >
              <Icon
                name="checkmark-square-2-outline"
                size="large" // small, medium, large, xlarge
                color="red"
                animation={{
                  type: "pulse", // zoom, pulse, shake, flip
                  hover: true,
                  infinite: false,
                }}
              />
              <span>Coding</span>
            </li>
            <li
              onClick={() =>
                setPosts({ type: "otherPosts", nodes: otherPosts })
              }
            >
              <Icon
                name="checkmark-square-2-outline"
                size="large" // small, medium, large, xlarge
                color="red"
                animation={{
                  type: "pulse", // zoom, pulse, shake, flip
                  hover: true,
                  infinite: false,
                }}
              />
              <span>Other</span>
            </li>
          </Filter>
        </MaxWidthLayout>
        <Posts>
          {posts?.nodes
            ? posts?.nodes.map((el, ind) => {
                return (
                  <Link to={`/post/${el.frontmatter.slug}`}>
                    <Post>
                      <PostData>
                        <MaxWidthLayout>
                          <P>
                            {el.frontmatter.date || "Date"} ·{" "}
                            {el.frontmatter.category || "Date"}
                          </P>
                          <H1>{el.frontmatter.title || "Title"}</H1>
                          <A>Read</A>
                        </MaxWidthLayout>
                      </PostData>
                      <Img
                        fluid={el.frontmatter.image?.childImageSharp.fluid}
                      />
                    </Post>
                  </Link>
                )
              })
            : null}
        </Posts>
      </Layout>
    </Wrapper>
  )
}

export const query = graphql`
  {
    projectPosts: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { category: { eq: "project" } } }
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
    techPosts: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { category: { eq: "technology" } } }
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
    codingPosts: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { category: { eq: "coding" } } }
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
    otherPosts: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { category: { eq: "other" } } }
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
    allPosts: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
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

export default Writing
