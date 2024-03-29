import React from "react"
import styled from "styled-components"
import { largerThan, smallerThan } from "../helpers/mediaQueries"
import { Link } from "gatsby"
import Logo from "./library/Logo"
import MovingText from "./library/MovingText"


const Wrapper = styled.div`
  padding: 0.6vw;
  ${smallerThan.mobile`
       padding: 4vw;
  `};
`

const HeaderWrapper = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
`

const Name = styled.div`
  font-size: 2.3vw;

  ${smallerThan.mobile`
       font-size: 7vw;
  `};
`

const Position = styled.div`
  font-size: 4vw;
  text-align: right;

  span {
    text-decoration: underline;
  }

  ${smallerThan.mobile`
       font-size: 5.5vw;
  `};
`

const Description = styled.div`
  display: block;
  font-size: 2.5vw;
  margin: 1vw;

  ${smallerThan.mobile`
       font-size: 5.5vw;
  `};
`

const Group = styled.div`
  margin-bottom: 8vw;
  ${smallerThan.mobile`
       margin-bottom: 25vw;
  `};
`

const Subtitle = styled.h3`
  font-size: 1.4vw;
  margin-bottom: 2.2vw;
  font-family: 'Press Start 2P', serif; 

  ${smallerThan.mobile`
       font-size: 4.5vw;
  `};
`

const GroupRows = styled.div``

const FreelanceRow = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 0.6fr 2fr 0.4fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  font-size: 2.3vw;
  border-bottom: 0.2vw solid white;
  padding-bottom: 1.4vw;
  margin-top: 1vw;

  ${smallerThan.mobile`
       display: block;
       font-size: 8vw;
       border-bottom: 0.7vw solid white;
       margin-top: 3vw;
       padding-bottom: 3vw;
  `};

  &.split {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr;
  }
`

const RowTitle = styled.a`
  ${smallerThan.mobile`
       margin: 10px 0;
  `};
`

const Job = styled.div`
  font-size: 2.5vw;
  line-height: 2.8vw;

  ${smallerThan.mobile`
      font-size: 6.5vw;
      line-height: 7.8vw;
  `};
`

const RowDescription = styled.div`
  opacity: 0.4;

  ${smallerThan.mobile`
       margin-top: 10px;
       max-width: 350px;
  `};
`

const RowYear = styled.div`
  text-align: right;
`
const OpenOpportunities = styled.div`
  .slide-text {
    width: 100%;
    background-color: blue;
    padding: 0.4vw 0;
    display: flex;
    flex-direction: row;
    white-space: nowrap; /* important */
    margin-top: 0.4vw;

    ${smallerThan.mobile`
       padding: 2vw 0;
  `};
  }

  h1,
  span {
    display: inline-block;
    font-size: 2.4vw;
    font-weight: normal;
    margin-left: 0.4vw;

    ${smallerThan.mobile`
       font-size: 8vw;
  `};
  }
`

const Hoverable = styled.a`
  transition: all ease 0.2s;
  &:hover {
    background: blue;
    transition: all ease 0.2s;
  }
`

const Info = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 2vw;

  ${smallerThan.mobile`
       display: block;
  `};
`

const InfoAbout = styled.div`
  font-size: 3.8vw;
  line-height: 4vw;

  ${smallerThan.mobile`
       font-size: 8vw;
       line-height: 9vw;
       margin-bottom: 40px;
  `};
`

const Footer = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 3.8vw;
`

const Socials = styled.div`
  font-size: 4.2vw;
  text-align: right;

  a {
    margin: 0.3vw 0;
    display: inline-block;
  }

  ${smallerThan.mobile`
       font-size: 7.8vw;

       a {
          margin: 1vw 0;
       }
  `};
`

const Email = styled.div`
  font-size: 4.2vw;
  display: flex;
  align-items: flex-end;

  ${smallerThan.mobile`
       font-size: 5.2vw;
  `};
`

const DegreeMessage = styled.div`
  font-size: 2.6vw;
  opacity: 0.4;
  margin-top: 30px;
  display: block;

  ${smallerThan.mobile`
       font-size: 5.2vw;
       line-height: 7vw;
  `};
`

const Landing = props => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Logo />
        <Position>
          <div style={{ marginBottom: "2vw" }}>
            Software Developer / Designer
          </div>
          <Description>
            full-time front-end dev at{" "}
            <Hoverable target="_blank" href="https://www.tuimedia.com/">
              <span>tui media</span>
            </Hoverable>
          </Description>
        </Position>
      </HeaderWrapper>

      <Group>
        <Subtitle>featured</Subtitle>
        <MovingText text="Some cool projects I've worked on —" />

        <GroupRows>
          {props.posts.map((el, ind) => {
            console.log(el)
            return (
              <Link to={`/post/${el.frontmatter.slug}`}>
                <FreelanceRow key={ind} className="split">
                  <RowTitle target="_blank" href="https://www.obersis.com/">
                    {el.frontmatter.title}
                  </RowTitle>
                  <RowDescription style={{ textAlign: "right" }}>
                    {el.frontmatter.date}
                  </RowDescription>
                </FreelanceRow>
              </Link>
            )
          })}
        </GroupRows>
      </Group>
      <Group>
        <Info>
          <div>
            <Subtitle>
              about{" "}
              <Link to="/about">
                <Hoverable>(+ know more)</Hoverable>
              </Link>
            </Subtitle>
            <InfoAbout>
              25 y/o Software Developer. Based in London. I love to make things,
              inside and outside of work. Really interested in handcrafted
              digital experiences, user experience, human-computer interaction
              and design.
            </InfoAbout>
          </div>
          <div>
            <Subtitle>experience</Subtitle>
            <GroupRows>
              <FreelanceRow className="split">
                <Job>Software Dev (Front-End/Mobile)</Job>
                <Job style={{ textAlign: "right", opacity: 0.4 }}>
                  <Hoverable target="_blank" href="https://www.tuimedia.com/">
                    tuimedia.com
                  </Hoverable>{" "}
                  (since 2021)
                </Job>
              </FreelanceRow>
              <FreelanceRow className="split">
                <Job>Front-End Dev</Job>
                <Job style={{ textAlign: "right", opacity: 0.4 }}>
                  <Hoverable target="_blank" href="https://www.pinfluencer.io/">
                    pinfluencer.io
                  </Hoverable>{" "}
                  (2020)
                </Job>
              </FreelanceRow>
              <FreelanceRow className="split">
                <Job>Junior Front-End dev</Job>
                <Job style={{ textAlign: "right", opacity: 0.4 }}>
                  <Hoverable target="_blank" href="https://karmoon.co.uk/">
                    karmoon.co.uk
                  </Hoverable>{" "}
                  (2019)
                </Job>
              </FreelanceRow>
              <FreelanceRow className="split">
                <Job>UI Designer</Job>
                <Job style={{ textAlign: "right", opacity: 0.4 }}>
                  fitsprint (2018)
                </Job>
              </FreelanceRow>
              <FreelanceRow className="split">
                <Job>UI / Visual Designer</Job>
                <Job style={{ textAlign: "right", opacity: 0.4 }}>
                  furgo (2017)
                </Job>
              </FreelanceRow>
            </GroupRows>
          </div>
        </Info>
      </Group>
      <Group>
        <Subtitle>education — graduated in 2021</Subtitle>
        <InfoAbout>
          BSc (with Honours) in Digital Design from Brunel University London
          (College of Engineering, Design and Physical Sciences)
        </InfoAbout>
        <DegreeMessage>
          a modern degree with a mix of software development, UX and UI.
        </DegreeMessage>
      </Group>
      <footer>
        <Footer>
          <Email>hi.xavier.mod@gmail.com</Email>
          <Socials>
            <div>
              <Hoverable target="_blank" href="https://github.com/XavierMod">
                github
              </Hoverable>
            </div>
            <div>
              <Hoverable
                target="_blank"
                href="https://www.linkedin.com/in/xavier-mod-22a25964/"
              >
                linkedin
              </Hoverable>
            </div>
            <div>
              <Hoverable
                target="_blank"
                href="https://www.instagram.com/xaviermod/?hl=en"
              >
                instagram
              </Hoverable>
            </div>
          </Socials>
        </Footer>
      </footer>
    </Wrapper>
  )
}

export default Landing
