import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
    }
  }
`

const PostTemplate = ({ data: { post } }) => (
  <div>
    <h1>{post.title}</h1>
  </div>
)

export default PostTemplate
