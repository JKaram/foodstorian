import React from "react"
import { graphql, Link } from "gatsby"

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
  <div>
    {data.posts.nodes.map(post => (
      <p>
        <Link to={`/${post.slug}`}>{post.title}</Link>
      </p>
    ))}
  </div>
)
