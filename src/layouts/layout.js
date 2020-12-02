/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState, useRef } from "react"
import Header from "../components/library/Header";
import HomeFixedButton from "../components/library/HomeFixedButton";
import Footer from "../components/library/Footer";
import { largerThan, smallerThan } from '../helpers/mediaQueries'; 
import Logo from "../components/library/Logo";
import { window, document, exists } from 'browser-monads';
import { Link } from "gatsby";
import {lightTheme, darkTheme} from '../theme/theme';
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from '../theme/globalStyles';
import { MDXProvider } from '@mdx-js/react'
import MDXComponents from '../../src/helpers/MDXComponents';
import {myContext} from './provider'
import ReadingIndicator from "../components/library/ReadingIndicator";
import BackTop from "../components/library/BackTop";
import MobileBar from "../components/library/MobileBar";

const LayoutWrapper = styled.div`
  max-width: ${props => props.theme.options.max_layout_width};
  margin: auto;
  padding: ${props => props.theme.options.layout_padding};
  display: flex;

  ${smallerThan.mobile`
      padding: 25px;
      display: block;
  `};
`;

const LogoWrapper = styled.div`
  flex: 10%;

  ${smallerThan.mobile`
      display: none;
  `};

  .logo {
    margin: 50px;
    margin-bottom: 30px;
  }
`;

const ChildrenWrapper = styled.div`
  flex: 90%;
`;

const LogoWrapperContent = styled.div`
  position: sticky;
  width: 100%;
  top: 40px;
`;

const ReadingWrapper = styled.div`
  width: 50%;
  margin: auto;
  transform: rotate(90deg);
  margin-top: 70px;
`;

const BackTopWrapper = styled.div`
  margin-top: 100px;
`;

const Layout = ({children}) => {

  return (
    <myContext.Consumer>
      {context => (
        <ThemeProvider theme={context.isDark ? darkTheme : lightTheme}>
        <MDXProvider components={MDXComponents}>
          <GlobalStyle />
            <LayoutWrapper>
              <LogoWrapper>
                <LogoWrapperContent>
                  <Link to="/">
                    <Logo isDark={context.isDark} />
                  </Link>
                  <ReadingWrapper>
                    <ReadingIndicator />
                  </ReadingWrapper>
                  <BackTopWrapper>
                    <BackTop />
                  </BackTopWrapper>
                </LogoWrapperContent>
              </LogoWrapper>
              <ChildrenWrapper>
                <Header />
                  {children}
                <Footer />
              </ChildrenWrapper>
              <MobileBar />
            </LayoutWrapper>
          </MDXProvider>
        </ThemeProvider>
      )}
      </myContext.Consumer>
  )
}

export default Layout
