import React from 'react'
import styled from 'styled-components'
import XavierImage from '../library/XavierImage'
import PostCategory from '../blog/PostCategory';
import {HTitle, P, PDesc, A, Blockquote, TLDR} from '../text/TextStyles';
import Tag from '../library/Tag';


const PostHeaderWrapper = styled.div`
    padding-bottom: 30px;

    .htitle {
        font-size: 50px;
    }
`;

const PostTitle = styled.div`
    font-size: 50px;
    font-weight: 700;
    opacity: 0.8;
    line-height: 60px;
`;

const Subtitle = styled.div`
    display: flex;
    align-items: center;
    margin: 30px 0;

    span {
        margin: 0 10px;
    }

    .category {
        margin-left: 30px;
    }
`;

const ProjectStatus = styled.div`
    margin-bottom: 30px;
`;

const ProjectInfoBottom = styled.div`
`;

const ProjectLinks = styled.div`
    flex: 5;
    display: flex;
`;

const ProjectLink = styled.div`
    margin-right: 20px;
`;

const PostHeader = (props) => {
    return (
        <PostHeaderWrapper>
            <PostTitle>{props.title}</PostTitle>
            <br />
            {props.featured ? <Tag className="featured">Featured</Tag> : null}
            {props.tags.split(", ").map((el, ind, arr) => {
                return <Tag>{el}</Tag>
            })}
            <Subtitle>
                <A href={props.client_URL}>{props.client}</A> <span><PDesc> · {props.date}</PDesc></span>
            </Subtitle>
            <ProjectInfoBottom>
                <ProjectStatus>
                        <P><strong>Status</strong></P>
                        
                        {props.inDevelopment ? <Tag className="dev">In Development</Tag> : <Tag className="completed">Completed</Tag>}
                        {props.ageWarning ? <Tag className="age">Age warning</Tag> : null}
                </ProjectStatus>
                <P><strong>Links</strong></P>
                <ProjectLinks>
                    <ProjectLink>
                        {props.repo_link !== 'Not available' ? <A href={props.repo_link}>Repo Link</A> : <PDesc>Repository not available</PDesc>}
                    </ProjectLink>
                    <ProjectLink>
                        {props.live_link !== 'Not available' ? <A href={props.live_link}>Live Site</A> : <PDesc>Live site not available</PDesc>}
                    </ProjectLink>
                </ProjectLinks>
            </ProjectInfoBottom>
        </PostHeaderWrapper>
    )
}

export default PostHeader