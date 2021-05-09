import { createGlobalStyle } from 'styled-components';
import '../main.css'

const GlobalStyle = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */



    * {
        box-sizing: border-box;
        cursor: none;
    }

    html,body {
  cursor: none
}html *,body * {
  cursor: none;
}

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    p {
        color: ${props => props.theme.colors.paragraphColor} !important;
    }

    h1 {
        font-size: 40px;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 700;
    }

    strong {
        font-weight: 700;
    }

    a {
        text-decoration: none;
        color: ${props => props.theme.colors.text};
    }
    body {
        line-height: 1;
        font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        background: ${props => props.theme.colors.mainBG};
        color: ${props => props.theme.colors.text};
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`;
 
export default GlobalStyle;