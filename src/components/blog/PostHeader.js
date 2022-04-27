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
        font-size: 10vw !important;
        line-height: 15vw !important;
      }
      
      padding-bottom: 0;
  `};
`

const Text = styled.div`
  font-size: 23px;
  margin-top: 30px;
  opacity: 0.5;
`

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

const Subtitle = styled.h3`
  font-size: 23px;
  margin-bottom: 20px;
`

const PrivateRepo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px dotted rgba(255, 255, 255, 0.5);
  padding: 20px;

  line-height: 30px;

  svg {
    margin-right: 10px;
  }

  div {
    margin: 0;
  }
`

const PostHeader = props => {
  console.log(props)
  return (
    <myContext.Consumer>
      {context => (
        <div>
          <PostHeaderWrapper>
            <Subtitle>journal - {props.category}</Subtitle>
            <H1>{props.text}</H1>
            <InfoWrapper>
              <Subtitle>
                <Text>
                  <span style={{ fontWeight: 700 }}>
                    By{" "}
                    <A href="https://www.linkedin.com/in/xavier-mod-22a25964/">
                      Xavier Mod
                    </A>
                  </span>{" "}
                  on {props.date} · {props.readTime} min read
                </Text>
              </Subtitle>
            </InfoWrapper>
          </PostHeaderWrapper>
          {props.privateRepo ? (
            <PrivateRepo>
              <div>
                <svg
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 1l-12 22h24l-12-22zm-1 8h2v7h-2v-7zm1 11.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" />
                </svg>
              </div>
              <Text>
                I worked on this product while working for {props.company}, and
                therefore I can't publicly share its full repository. For more
                information, please contact me.
              </Text>
            </PrivateRepo>
          ) : null}
          <Text style={{lineHeight: '35px'}}>Technologies used: {props.technologies}</Text>
        </div>
      )}
    </myContext.Consumer>
  )
}

export default PostHeader
