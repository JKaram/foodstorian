import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"

import { Layout } from "../components"

export const query = graphql`
  query($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      subtitle
      createdAt
      country
      image {
        resize(width: 800) {
          width
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
    <img
      src={post.image.resize.src}
      alt={post.title}
      style={{
        width: "100%",
      }}
    />
    <div>
      {documentToReactComponents(post.content.json, {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: node => (
            <Img
              src={`${node.data.target.fields.file["en-US"].url}?w=300`}
              alt={node.data.target.fields.title["en-US"]}
            />
          ),
          [BLOCKS.QUOTE]: (_node, children) => (
            <Blockquote>{children}</Blockquote>
          ),
        },
      })}
    </div>
  </Layout>
)

export default PostTemplate

const Img = styled.img`
  display: block;
  margin: 0 auto;
`

const Blockquote = styled.blockquote`
  background: #f9f9f9;
  border-left: 10px solid #ccc;
  margin: 1.5em 10px;
  padding: 0.5em 10px;
  quotes: "\201C""\201D""\2018""\2019";

  &:before {
    color: #ccc;
    content: open-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
  }
  p {
    display: inline;
  }
`
