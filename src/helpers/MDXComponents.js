import React from 'react';
import * as Styles from '../components/text/TextStyles';
import CodeBlock from "../components/text/CodeBlock";

const components = {
    //all the logic
    h1: (props) => <Styles.H1><div style={{margin: '30px 0'}}>{props.children}</div></Styles.H1>,
    h2: (props) => <Styles.H2><div style={{margin: '30px 0'}}>{props.children}</div></Styles.H2>,
    h3: (props) => <Styles.H3><div style={{margin: '30px 0'}}>{props.children}</div></Styles.H3>,
    h4: (props) => <Styles.H4><div style={{margin: '30px 0'}}>{props.children}</div></Styles.H4>,
    h5: (props) => <Styles.H5><div style={{margin: '30px 0'}}>{props.children}</div></Styles.H5>,
    h6: (props) => <Styles.H6><div style={{margin: '30px 0'}}>{props.children}</div></Styles.H6>,
    p: (props) => <Styles.P><div style={{margin: '30px 0'}}>{props.children}</div></Styles.P>,
    li: (props) => <Styles.ListItem><Styles.P>{props.children}</Styles.P></Styles.ListItem>,
    a: (props) => {
        if (props.className == 'gatsby-resp-image-link') {
            return <div>{props.children}</div>
        }
        return (
            <Styles.A href={props.href}>{props.children}</Styles.A>
        )
    },
    pre: CodeBlock
}


export default components;