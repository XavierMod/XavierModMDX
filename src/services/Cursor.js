import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { window, document } from "browser-monads"
import { largerThan, smallerThan } from "../helpers/mediaQueries"

const CursorWrapper = styled.div`
  .cursor {
    z-index: -100000;

    width: 60px;
    height: 60px;
    opacity: 0.3;
    border-radius: 100%;
    position: fixed;
    transform: translate(-50%, -50%);
    animation: all 3.3s ease;
    transition-property: opacity, background-color, transform;
    -moz-transition: all 70ms ease;

    ${smallerThan.mobile`
      opacity: 0;
    `};

    &.c--hidden {
      opacity: 0;
    }

    &.c--click {
      width: 50px;
      height: 50px;
      opacity: 0.6;
      -moz-transition: all 100ms ease;
    }

    border: 3px solid white;
  }
`

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(false)
  const [click, setClick] = useState(false)

  useEffect(el => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", mMove)
      document.addEventListener("mouseenter", mEnter)
      document.addEventListener("mouseleave", mLeave)
      document.addEventListener("mousedown", mDown)
      document.addEventListener("mouseup", mUp)
      document.addEventListener("mouseover", mHover)
    }

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", mMove)
      document.removeEventListener("mouseenter", mEnter)
      document.removeEventListener("mouseleave", mLeave)
      document.removeEventListener("mousedown", mDown)
      document.removeEventListener("mouseup", mUp)
    }

    const mDown = () => {
      setClick(true)
      console.log("clicked down")
    }

    const mHover = () => {
      console.log("hover")
    }

    const mUp = () => {
      setClick(false)
      console.log("clicked up")
    }

    const mMove = el => {
      setPosition({ x: el.clientX, y: el.clientY })
    }

    const mLeave = () => {
      setHidden(true)
      console.log("mouse leaving")
    }

    const mEnter = () => {
      setHidden(false)
    }

    addEventListeners()
    return () => removeEventListeners()
  }, [])

  return (
    <CursorWrapper>
      <div
        className={
          "cursor " +
          (hidden ? "c--hidden " : " ") +
          (click ? "c--click " : " ")
        }
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </CursorWrapper>
  )
}

export default Cursor
