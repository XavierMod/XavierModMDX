import React from "react"
import styled from "styled-components"
import ReactAnime from "react-animejs"
import { largerThan, smallerThan } from "../../helpers/mediaQueries"

const { Anime, stagger } = ReactAnime

const Wrapper = styled.div`
    overflow: hidden;
    
  .slide-text {
    width: 100%;
    background-color: ${props => props.data?.background || 'blue'};
    padding: 0.4vw 0;
    display: flex;
    flex-direction: row;
    white-space: nowrap; /* important */
    margin-top: 0.4vw;
    color: ${props => props.data?.text || 'white'};

    ${smallerThan.mobile`
       padding: 2vw 0;
  `};
  }

  h1,
  span {
    display: inline-block;
    font-size: ${props => props.data?.fontSize || '2.4vw'};
    font-weight: normal;
    margin-left: 0.4vw;

    ${smallerThan.mobile`
       font-size: 8vw;
  `};
  }
`

const MovingText = (props) => {
  return (
    <Wrapper data={props.data}>
      <Anime
        initial={[
          {
            targets: ".text",
            translateX: "-100%",
            duration: 12000,
            easing: "linear",
            loop: true,
          },
        ]}
      >
        <div class="slide-text">
          <span className="text">{props.text}</span>
          <span className="text">{props.text}</span>
          <span className="text">{props.text}</span>
          <span className="text">{props.text}</span>
          <span className="text">{props.text}</span>
        </div>
      </Anime>
    </Wrapper>
  )
}

export default MovingText
