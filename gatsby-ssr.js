import React from 'react'
import Provider from './src/layouts/provider';

export const wrapRootElement = ({ element }) => {

    return (
        <Provider>
            {element}
        </Provider>
    )
}