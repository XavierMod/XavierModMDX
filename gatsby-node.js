/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path");

exports.createPages = async({graphql, actions}) => {
    const { createPage } = actions;
    const result = await graphql(`
        {
            projects: allMdx(filter: {frontmatter: {type: {eq: "project"}}}) {
            nodes {
                frontmatter {
                slug
                }
            }
            }
            posts: allMdx(filter: {frontmatter: {type: {eq: "post"}}}) {
            nodes {
                frontmatter {
                slug
                }
            }
            }
        }
    `);

    result.data.projects.nodes.forEach(({ frontmatter: {
        slug
    }}) => {
        createPage({
            path: `/project/${slug}`,
            component: path.resolve(`src/templates/project-template.js`),
            context: {
                slug
            }
        })
    });

    result.data.posts.nodes.forEach(({ frontmatter: {
        slug
    }}) => {
        createPage({
            path: `/post/${slug}`,
            component: path.resolve(`src/templates/post-template.js`),
            context: {
                slug
            }
        })
    })
}