import React from 'react'
import styled from 'styled-components'
import XavierImage from '../library/XavierImage'
import {P, PDesc, A, HTitle} from '../text/TextStyles';
import { largerThan, smallerThan } from '../../helpers/mediaQueries'; 
import CodeBlock from '../text/CodeBlock';
import Tag from '../library/Tag';

const Wrapper = styled.div`
    padding: 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 130px;


    ${smallerThan.mobile`
        display: block;
    `};
`;

const FlexLeft = styled.div`
flex: 5;
    .htitle {
        ${smallerThan.mobile`
            font-size: 50px !important;
            line-height: 50px;
        `};
    }
`;

const FlexRight = styled.div`
    flex: 5;

    .xavier-image {
        width: 100%;
        margin-left: 50px;
        ${smallerThan.mobile`
            width: 100%;
            margin-left: 0;
        `};
    }
`;

const Subtitle = styled.div`
    display: flex;
    align-items: center;
    padding: 30px 0;

    ${smallerThan.mobile`
        display: block;

        .p {
            text-align: left !important;
            margin: 20px 0; 
        }
    `};
`;

const TechStack = styled.div`
    flex: 5;
    text-align: right;
    width: 100%;

`;

const LandingTop = (props) => {
    return (
        <Wrapper>
            <FlexLeft>
                <div style={{marginBottom: '20px'}}>
                    {props.landing_stack.split(" · ").map((el, ind, arr) => {
                        return <Tag>#{el}</Tag>
                    })}  
                </div>              
                <HTitle>{props.landing_title}</HTitle>
                <Subtitle>
                    <PDesc style={{textAlign: 'left'}}>at <A href={props.landing_role_link}>{props.landing_role}</A></PDesc>
                </Subtitle>
            </FlexLeft>
            <FlexRight>
                <XavierImage />
            </FlexRight>
        </Wrapper>
    )
}

export default LandingTop
