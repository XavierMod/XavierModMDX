import React from 'react'
import styled from 'styled-components'
import { largerThan, smallerThan } from '../../helpers/mediaQueries'; 

const PostImageWrapper = styled.div`
    .gatsby-image-wrapper, .gatsby-resp-image-wrapper {
        box-shadow: 0 30px 60px -10px rgba(0,0,0,0.25), 0 18px 36px -18px rgba(0,0,0,0.25);        
        height: 500px !important;

        ${smallerThan.mobile`
            height: 240px !important;
        `};
    }
`;

const PostImage = ({children}) => {
    return (
        <PostImageWrapper>
            {children}
        </PostImageWrapper>
    )
}

export default PostImage
