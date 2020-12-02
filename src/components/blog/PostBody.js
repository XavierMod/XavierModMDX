import React from 'react'
import styled from 'styled-components'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const Wrapper = styled.div`

`;
const PostBody = ({children}) => {
    return (
        <Wrapper>
            <MDXRenderer>
                {children}
            </MDXRenderer>
        </Wrapper>
    )
}

export default PostBody
