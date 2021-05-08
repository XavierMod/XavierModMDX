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