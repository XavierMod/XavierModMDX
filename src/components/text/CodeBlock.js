import React from 'react'
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from 'prism-react-renderer/themes/vsDark';
import styled from 'styled-components';

const CodeBlockWrapper = styled.div`
    pre {
        padding: 30px;
        background-color: #000829 !important;
        border-radius: 5px;
        position: relative;
        overflow: auto;
        font-family: Fira Code,Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace!important;
        font-weight: 100;
        width: 100%;
        margin: auto;

        span {
            margin: 5px 0;
        }
    }
`;

const LineNo = styled.span`
  display: inline-block;
  width: 2em;
  user-select: none;
  opacity: 0.3;
`

const LangTag = styled.div`
    display: inline-block;
    background-color: white;
    color: black;
    padding: 5px 10px;
    border-radius: 5px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    color: #000829;
    margin-bottom: 20px;
`;

const CodeBlock = (props) => {
    const className = props.children.props.className;
    const language = className.replace(/language-/, "");

    return (
        <CodeBlockWrapper>
            <Highlight {...defaultProps} code={props.children.props.children.trim()} language={language} theme={theme}>
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={style}>
                    <LangTag>{language}</LangTag>
                    {tokens.map((line, i) => (
                    <div {...getLineProps({ line, key: i })}>
                        <LineNo>{i + 1}</LineNo>
                        {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} />
                        ))}
                    </div>
                    ))}
                </pre>
                )}
            </Highlight>
        </CodeBlockWrapper>
    )
}

export default CodeBlock
