import React from "react"
import styled from "styled-components"
import { largerThan, smallerThan } from "../helpers/mediaQueries"

const MWLayout = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  position: relative;
  ${smallerThan.mobile`
      padding: 0;
  `};
`

const MaxWidthLayout = props => {
  return <MWLayout className="MaxWidthLayout">{props.children}</MWLayout>
}

export default MaxWidthLayout
