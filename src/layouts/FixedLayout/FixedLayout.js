import React, { useState, useRef } from "react"
import Header from "../../components/library/Header";
import Footer from "../../components/library/Footer";
import { largerThan, smallerThan } from '../../helpers/mediaQueries'; 
import Logo from "../../components/library/Logo";
import { Link } from "gatsby";
import {lightTheme, darkTheme} from '../../theme/theme';
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from '../../theme/globalStyles';
import { MDXProvider } from '@mdx-js/react'
import MDXComponents from '../../helpers/MDXComponents';
import {myContext} from '../provider'
import MobileBar from "../../components/library/MobileBar";
import HeaderFixedLayout from "./HeaderFixedLayout";
import CursorLayout from "../CursorLayout";

const LayoutWrapper = styled.div`
  margin: auto;
  display: flex;
  width: 100%;

  ${smallerThan.mobile`
      display: block;
      padding: 0;
  `};
`;

const ChildrenWrapper = styled.div`
  width: 100%;
`;

const FixedLayout = ({children}) => {

  return (
    <CursorLayout>
      <myContext.Consumer>
        {context => (
          <ThemeProvider theme={context.isDark ? darkTheme : lightTheme}>
          <MDXProvider components={MDXComponents}>
            <GlobalStyle />
            <HeaderFixedLayout context={context} />
              <LayoutWrapper>
                <ChildrenWrapper>
                    {children}
                  <Footer />
                </ChildrenWrapper>
              </LayoutWrapper>
            </MDXProvider>
          </ThemeProvider>
        )}
        </myContext.Consumer>
      </CursorLayout>
  )
}

export default FixedLayout
