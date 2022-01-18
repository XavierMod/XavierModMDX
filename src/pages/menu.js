import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Footer from "../components/library/Footer"
import Layout from "../layouts/layout"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { largerThan, smallerThan } from "../helpers/mediaQueries"
import MaxWidthLayout from "../layouts/MaxWidthLayout"

const Wrapper = styled.div`
  height: 100vh;
  overflow: hidden;
  overflow-y: hidden;

  ul {
    padding-top: 70px;

    li {
      font-size: 90px;
      padding: 20px 0;
      font-family: ${props => props.theme.fontFamilies.body} !important;
      opacity: 0.5;
      transition: all ease 0.5s;
      width: 100%;
      max-width: 700px;

      &:hover {
        opacity: 1;
      }

      span {
        font-size: 30px;
        margin-left: 20px;
      }
    }
  }

  ${smallerThan.mobile`
    ul {
      li {
        padding-left: 0;
        padding: 30px 40px;
        text-align: center;
        font-size: 50px;
      }
    }
  `};
`

const Separator = styled.div`
  border-bottom: 1px dotted rgba(255, 255, 255, 0.3);
  margin-top: 10px;
`

const Close = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 40px;
  font-family: ${props => props.theme.fontFamilies.body} !important;
  font-size: 20px;
  text-decoration: underline;

  ${smallerThan.mobile`
    font-size: 18px;
    padding: 30px;
  `};
`

const ImageOverlay = styled.div`
  position: absolute;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 0.4;
  z-index: -100000000;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all ease 1s;
  }
`

const Menu = ({ data }) => {
  const [activeImage, setActiveImage] = useState(null)

  return (
    <Layout hideHeader hideFooter>
      <Link to="/">
        <Close>Close</Close>
      </Link>
      <ImageOverlay>
        {activeImage !== null ? (
          <Img
            className="fade-in"
            fluid={
              activeImage === "about"
                ? data.aboutPhoto.childImageSharp.fluid
                : data.writingPhoto.childImageSharp.fluid
            }
          />
        ) : null}
      </ImageOverlay>
      <Wrapper>
        <ul>
          <Link to="/about">
            <MaxWidthLayout>
              <li
                onMouseEnter={() => setActiveImage("about")}
                onMouseLeave={() => setActiveImage(null)}
              >
                About<span>(1)</span>
              </li>
            </MaxWidthLayout>
          </Link>
          <Separator />
          <Link to="/writing">
            <MaxWidthLayout>
              <li
                onMouseEnter={() => setActiveImage("writing")}
                onMouseLeave={() => setActiveImage(null)}
              >
                Writing and Work<span>(2)</span>
              </li>
            </MaxWidthLayout>
          </Link>
          <Separator />
        </ul>
        <Footer />
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  {
    writingPhoto: file(name: { eq: "desk" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    aboutPhoto: file(name: { eq: "about-me" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Menu
