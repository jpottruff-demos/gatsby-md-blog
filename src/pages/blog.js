import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

const BlogPage = ({data}) => (
  <Layout>
    <SEO title="Blog" />
    <h1>Latests Posts</h1>
    {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id}>
            <h3>{post.node.frontmatter.title}</h3>
            <small>Post by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
            <br />
            <br />
            <Link to={post.node.frontmatter.path}>Read More</Link>
            <br />
            <br />
            <hr />
        </div>
    ))}
  </Layout>
)

// For getting the blog posts
// NOTE: using id below for react (unique id warning)
export const pageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark {
            edges {
            node{
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
`


export default BlogPage
