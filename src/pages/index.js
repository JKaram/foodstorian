import React from "react"
import { graphql, Link } from "gatsby"

import { Layout } from "../components/index"

export const query = graphql`
  {
    posts: allContentfulPost {
      nodes {
        title
        slug
        createdAt
        image {
          fluid {
            src
          }
        }
      }
    }
  }
`

export default ({ data }) => (
  <Layout>
    {data.posts.nodes.map(post => (
      <div key={`post-${post.slug}`}>
        <Link to={`/${post.slug}`}>{post.title}</Link>
      </div>
    ))}
  </Layout>
)
