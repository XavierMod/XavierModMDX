import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { window, document, exists } from 'browser-monads';

const ReadingProgressWrapper = styled.div`
    position: relative;
    height: 2px;
    top: 0;
    background: rgba(255, 255, 255, 0.2);
    width: 100%;
`;

const ReadingProgressBar = styled.div`
    width: ${props => props.width};
    background-color: ${props => props.theme.colors.accent};
    position: absolute;
    z-index: 1;
    height: 2px;
`;

const ReadingProgress = () => {
    const target = useRef(null);
    const [readingProgress, setReadingProgress] = useState(0);

    const scrollListener = (target) => {
        var scrollMaxY = window.scrollMaxY || (document.documentElement.scrollHeight - document.documentElement.clientHeight)

        setReadingProgress(`${Math.floor((window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop) / scrollMaxY * 100)}%`);

        console.log(readingProgress)
    };
    
    useEffect(() => {
      window.addEventListener("scroll", scrollListener);
      return () => window.removeEventListener("scroll", scrollListener);
    });
  
    return (
        <ReadingProgressWrapper className="ReadingIndicator">
            <ReadingProgressBar width={readingProgress} />
        </ReadingProgressWrapper>
    );
  };

  export default ReadingProgress;
