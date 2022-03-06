/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import styled, { ThemeProvider } from 'styled-components'
import { largerThan, smallerThan } from "../helpers/mediaQueries"

const Wrapper = styled.div`
  max-width: 850px;
  margin: auto;
  padding-top: 30px;

  ${smallerThan.mobile`
      padding: 20px;
  `};
`;

const PostLayout = ({children}) => {
  return (
      <Wrapper>
          {children}
      </Wrapper>
  )
}

export default PostLayout
