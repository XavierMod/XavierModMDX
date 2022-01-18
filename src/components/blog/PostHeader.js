import React from "react"
import styled from "styled-components"
import PostCategory from "./PostCategory"
import { HTitle, P, PDesc, A, Blockquote, TLDR, H1 } from "../text/TextStyles"
import { myContext } from "../../layouts/provider"
import { largerThan, smallerThan } from "../../helpers/mediaQueries"
import Tag from "../library/Tag"
import XavierImage from "../../components/library/XavierImage"

const PostHeaderWrapper = styled.div`
  padding-bottom: 20px;

  h1 {
    font-size: 50px;
    line-height: 60px;
  }

  ${smallerThan.mobile`
      h1 {
        font-size: 42px !important;
        line-height: 55px !important;
      }
      
      padding-bottom: 0;
  `};
`

const Subtitle = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0;

  ${smallerThan.mobile`
    p {
      font-size: 17px !important;
    }
  `};
`

const Text = styled.div``

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .xavier-image {
    width: auto;
    margin-right: 20px;
  }
  .gatsby-image-wrapper {
    width: 50px;
    border-radius: 100px;
  }
`

const PostHeader = props => {
  return (
    <myContext.Consumer>
      {context => (
        <div>
          <PostHeaderWrapper>
            <div style={{ marginBottom: "10px" }}>
              <Tag>{props.category}</Tag>
            </div>
            <H1>{props.text}</H1>
            <InfoWrapper>
              <XavierImage />
              <Subtitle>
                <Text>
                  <PDesc>
                    <span style={{ fontWeight: 700 }}>
                      By{" "}
                      <A href="https://www.linkedin.com/in/xavier-mod-22a25964/">
                        Xavier Mod
                      </A>
                    </span>{" "}
                    on {props.date} · {props.readTime} min read
                  </PDesc>
                </Text>
              </Subtitle>
            </InfoWrapper>
          </PostHeaderWrapper>
        </div>
      )}
    </myContext.Consumer>
  )
}

export default PostHeader
