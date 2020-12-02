import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    background: ${props => props.theme.colors.accent};
    display: inline-block;
    color: ${props => props.theme.colors.mainBG};
    padding: 20px;
    font-weight: 700;
    border-radius: 2px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;

    svg {
        width: 15px;
        margin-right: 10px;
        fill: ${props => props.theme.colors.mainBG};
    }
`;

const ButtonPrimary = (props) => {
    return (
        <Wrapper onClick={props.onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>{props.children}
        </Wrapper>
    )
}

export default ButtonPrimary
