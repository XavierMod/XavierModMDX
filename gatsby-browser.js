/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
import ReactDOM from 'react-dom';
import Provider from './src/layouts/provider';
import MDXComponents from './src/helpers/MDXComponents';

export const wrapRootElement = ({ element }) => {
    return (
        <Provider>
            {element}
        </Provider>
    )
}

// This fixes the bug i've had for a fucking year -- https://stackoverflow.com/questions/62945943/styles-disappear-on-page-reload-using-gatsbyjs-and-material-ui
export function replaceHydrateFunction() {
    return (element, container, callback) => {
      ReactDOM.render(element, container, callback)
    }
  }
  
