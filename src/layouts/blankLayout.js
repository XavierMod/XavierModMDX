import React, { useState, useRef } from "react";
import {lightTheme, darkTheme} from '../theme/theme';
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from '../theme/globalStyles';
import { MDXProvider } from '@mdx-js/react'
import MDXComponents from '../../src/helpers/MDXComponents';
import {myContext} from './provider'
import CursorLayout from "./CursorLayout";

const Layout = ({children}) => {

  return (
    <CursorLayout>
      <myContext.Consumer>
        {context => (
          <ThemeProvider theme={context.isDark ? darkTheme : lightTheme}>
          <MDXProvider components={MDXComponents}>
            <GlobalStyle />
              {children}
            </MDXProvider>
          </ThemeProvider>
        )}
        </myContext.Consumer>
      </CursorLayout>
  )
}

export default Layout
