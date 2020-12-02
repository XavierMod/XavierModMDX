import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { window, document, exists } from 'browser-monads';

const BackTopWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Button = styled.div`
    padding: 8px;
    background-color: ${props => props.theme.colors.text};
    cursor: pointer;
    transition: all ease .3s;
    opacity: ${props => props.show ? '1' : '0'};

    &:hover {
        transform: scale(1.1);
    }

    svg {
        transform: rotate(-90deg) scale(0.7);
        fill: ${props => props.theme.colors.mainBG};
    }
`;

const BackTop = () => {

    const [show, setShow] = useState(false);

    const scrollListener = (target) => {
        console.log(window.scrollY)
        if (window.scrollY  > 500) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    
    useEffect(() => {
      window.addEventListener("scroll", scrollListener);
      return () => window.removeEventListener("scroll", scrollListener);
    });
    
    return (
        <BackTopWrapper>
            <Button onClick={() => topFunction()} show={show}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>
            </Button>
        </BackTopWrapper>
    )
}

export default BackTop
