import { Link } from "gatsby"
import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import FullScreen from "../../components/library/FullScreen"
import Logo from "../../components/library/Logo"
import ModeToggler from "../../components/library/ModeToggler"
import SocialIcon from "../../components/library/SocialIcon"
import Video from "../../components/library/Video"
import { A } from "../../components/text/TextStyles"
import MaxWidthLayout from "../MaxWidthLayout"
import Icon from "react-eva-icons"
import { largerThan, smallerThan } from '../../helpers/mediaQueries'; 

const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  &.show {
    display: none;
  }
`

const FlexLeft = styled.div`
  flex: 5;
  text-align: left;
`

const FlexRight = styled.ul`
  flex: 5;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  li {
    margin-left: 40px;
    opacity: 0.6;
    border-bottom: 2px dotted transparent;
    font-family: ${props => props.theme.fontFamilies.body} !important;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        margin-right: 10px;
    }

    &:hover {
      opacity: 0.9;
      transition: all ease 0.3s;
    }
  }

  ${smallerThan.mobile`
      margin-right: 15px;
  `};
`

const FooterFixedLayout = props => {
  const [show, setShow] = useState(false)

  const scrollListener = target => {
    console.log(window.scrollY)
    if (window.scrollY > 500) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollListener)
    return () => window.removeEventListener("scroll", scrollListener)
  })

  return (
    <MaxWidthLayout>
      <Wrapper className={`${show ? "show" : null}`}>
        <FlexLeft>
          <Logo isDark={props.context.isDark} />
        </FlexLeft>
      </Wrapper>
    </MaxWidthLayout>
  )
}

export default FooterFixedLayout
