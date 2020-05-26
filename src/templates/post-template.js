import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { INLINES, BLOCKS } from "@contentful/rich-text-types"

import { Layout, SEO } from "../components"

export const query = graphql`
  query($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      subtitle
      createdAt(formatString: "DD MMMM YYYY")
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
    <div styled={{ display: "flex" }}>
      <img
        src={post.image.resize.src}
        alt={post.title}
        style={{
          "margin-top": "1em",
          width: "100%",
        }}
      />
      <h1
        style={{
          "font-size": "2.5em",
          margin: "10px 0 ",
          "letter-spacing": "1px",
        }}
      >
        {post.title}
      </h1>
      <h2 style={{ "font-size": "1.2em", "margin-bottom": "10px" }}>
        {post.subtitle}
      </h2>
      <time style={{ "font-size": "smaller" }}>{post.createdAt}</time>

      <div style={{ "line-height": "32px", "margin-top": "30px" }}>
        {documentToReactComponents(post.content.json, {
          renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => {
              return <Paragraph>{children}</Paragraph>
            },
            [INLINES.HYPERLINK]: (node, children) => {
              console.log("> children", children)
              return <a style={{ color: "red" }}>{children}</a>
            },
            [BLOCKS.QUOTE]: (node, children) => (
              <Blockquote>{children}</Blockquote>
            ),
            [BLOCKS.EMBEDDED_ASSET]: node => (
              <img
                src={`${node.data.target.fields.file["en-US"].url}?w=300&q=90`}
                alt={node.data.target.fields.title["en-US"]}
              />
            ),
            [BLOCKS.HYPERLINK]: (node, children) => <p></p>,
          },
          [INLINES.ENTRY_HYPERLINK]: (node, next) => {
            console.log("HERE")

            return `<a class='spectrum-Link' href=''>${next(node.content)}</a>`
          },
          renderText: text =>
            text.split("\n").flatMap((text, i) => [i > 0 && <br />, text]),
        })}
      </div>
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

  &:before {
    color: #ccc;
    content: open-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
  }
  p {
    display: inline-block;
  }
`

const Paragraph = styled.p`
  margin-bottom: 12px;
`
