import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"

import { Layout } from "../components"

export const query = graphql`
  query($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      subtitle
      createdAt(fromNow: true)
      country
      image {
        fluid {
          src
        }
      }
      content {
        json
      }
    }
  }
`

const PostTemplate = ({ data: { post } }) => (
  <Layout>
    {/* <SEO title={post.title} description={post.subtitle} /> */}
    <h1>{post.title}</h1>
    <h2>{post.subtitle}</h2>
    <p>{post.createdAt}</p>
    <img src={post.image.fluid.src} alt={post.title} />
    <div>
      {documentToReactComponents(post.content.json, {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: node => (
            <img
              src={`${node.data.target.fields.file["en-US"].url}?w=300&q=90`}
              alt={node.data.target.fields.title["en-US"]}
            />
          ),
        },
      })}
    </div>
  </Layout>
)

export default PostTemplate
