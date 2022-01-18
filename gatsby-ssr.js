import Aos from 'aos';
import React, { useEffect } from 'react'
import Provider from './src/layouts/provider';
import Cursor from './src/services/Cursor';

export const wrapRootElement = ({ element }) => {

    return (
        <Provider>
            {element}
        </Provider>
    )
}