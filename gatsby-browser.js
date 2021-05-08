/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
import Provider from './src/layouts/provider';
import Cursor from './src/services/Cursor';

export const wrapRootElement = ({ element }) => {

    return (
        <Provider>
            {element}
        </Provider>
    )
}

export const onRouteUpdate = ({ location, prevLocation }) => {
    console.log("new pathname", location.pathname)
    console.log("old pathname", prevLocation ? prevLocation.pathname : null)
  }

export const onClientEntry = () => {
    console.log("We've started!");
}