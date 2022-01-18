import React from 'react'
import LandingLatestPosts from './landing/LandingLatestPosts'
import LandingTop from './landing/LandingTop'
import styled from 'styled-components'
import { myContext } from '../layouts/provider';

const Landing = (props) => {
    return (
        <myContext.Consumer>
            {context => (
                <div>
                    <LandingTop {...props.markdownData} />
                </div>
            )}
        </myContext.Consumer>
    )
}

export default Landing