import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 200px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    pointer-events: none;
`;

const FooterFixedLayout = () => {
    return (
        <Wrapper>
            <svg style={{marginRight: '10px'}} fill="white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-4.418 0-8 3.582-8 8v8c0 4.418 3.582 8 8 8s8-3.582 8-8v-8c0-4.418-3.582-8-8-8zm0 7.5c-.829 0-1.5-.672-1.5-1.5s.671-1.5 1.5-1.5 1.5.672 1.5 1.5-.671 1.5-1.5 1.5z"/></svg>—— <span style={{marginLeft: '10px', fontSize: '12px'}}> scroll down</span>
        </Wrapper>
    )
}

export default FooterFixedLayout