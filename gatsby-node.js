/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// NOTE: path sis a standard node.js module
const path = require('path');

// NOTE: might be some redux stuff going on here with the ActioCreators;
// Basically trying to registering posts so we can use the urls (eg post-one)
exports.createPages = ({boundActionCreators, graphql}) => {
    // Destructing - pull out createPage
    const { createPage } = boundActionCreators;

    const postTemaplate = path.resolve('src/templates/blog-post.js');

    return graphql(`
        {
            allMarkdownRemark {
                edges {
                node{
                    html
                    id
                    frontmatter {
                    path
                    title
                    date
                    author
                    }
                }
                }
            }
        }
    `).then(res => {
        if (res.errors) {
            return Promise.reject(res.errors);
        }

        res.data.allMarkdownRemark.edges.forEach(({node}) => {
            createPage({
                path: node.frontmatter.path,
                component: postTemaplate,
            })
        })
    })
}
