import React from 'react'
import Cursor from '../services/Cursor'

const CursorLayout = ({children}) => {
    return (
        <div>
            <Cursor />
            {children}
        </div>
    )
}

export default CursorLayout
