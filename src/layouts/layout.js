/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState, useRef } from "react"
import Footer from "../components/library/Footer";
import { largerThan, smallerThan } from '../helpers/mediaQueries'; 
import {lightTheme, darkTheme} from '../theme/theme';
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from '../theme/globalStyles';
import { MDXProvider } from '@mdx-js/react'
import MDXComponents from '../../src/helpers/MDXComponents';
import {myContext} from './provider'
import MobileBar from "../components/library/MobileBar";
import Cursor from "../services/Cursor";
import HeaderFixedLayout from "./FixedLayout/HeaderFixedLayout"
import CursorLayout from "./CursorLayout";

const LayoutWrapper = styled.div`

`;

const Layout = (props) => {

  return (
    <CursorLayout>
      <myContext.Consumer>
        {context => (
          <ThemeProvider theme={context.isDark ? darkTheme : lightTheme}>
          <Cursor />
          <MDXProvider components={MDXComponents}>
              <GlobalStyle />
              <LayoutWrapper>
                  {!props.hideHeader ? <HeaderFixedLayout context={context} /> : null}
                    {props.children}
                  {!props.hideFooter ? <Footer /> : null}
              </LayoutWrapper>
            </MDXProvider>
          </ThemeProvider>
        )}
        </myContext.Consumer>
      </CursorLayout>
  )
}

export default Layout
