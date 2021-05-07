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

const ChildrenWrapper = styled.div`
`;

const FixedLayout = ({children}) => {

  return (
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
              <MobileBar />
            </LayoutWrapper>
          </MDXProvider>
        </ThemeProvider>
      )}
      </myContext.Consumer>
  )
}

export default FixedLayout
