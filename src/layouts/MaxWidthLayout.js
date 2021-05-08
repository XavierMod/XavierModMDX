import React from 'react'
import styled from 'styled-components'

const MWLayout = styled.div`
    max-width: 1200px;
    margin: auto;
    padding: 20px;
    position: relative;
`;

const MaxWidthLayout = (props) => {
    return (
        <MWLayout>
            {props.children}
        </MWLayout>
    )
}

export default MaxWidthLayout
