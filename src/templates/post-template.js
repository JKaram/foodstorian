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
        resize(width: 900) {
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
    <Wrapper>
      <Img src={post.image.resize.src} alt={post.title} />

      <div style={{ width: "97%", margin: "0 auto" }}>
        <h1
          style={{
            "font-size": "1.8em",
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
              [BLOCKS.HEADING_1]: (node, children) => <H1>{children}</H1>,
              [BLOCKS.HEADING_2]: (node, children) => <H1>{children}</H1>,
              [BLOCKS.HEADING_3]: (node, children) => <H1>{children}</H1>,
              [INLINES.HYPERLINK]: (node, children) => {
                return <a style={{ color: "red" }}>{children}</a>
              },
              [BLOCKS.QUOTE]: (node, children) => (
                <Blockquote>{children}</Blockquote>
              ),
              [BLOCKS.EMBEDDED_ASSET]: node => (
                <img
                  src={`${node.data.target.fields.file["en-US"].url}?w=500&q=90`}
                  alt={node.data.target.fields.title["en-US"]}
                  style={{
                    margin: "20px auto",
                    display: "block",
                    maxWidth: "500px",
                    width: "100%",
                  }}
                />
              ),
              [BLOCKS.HYPERLINK]: (node, children) => <p></p>,
            },
            [INLINES.ENTRY_HYPERLINK]: (node, next) => {
              return `<a class='spectrum-Link' href=''>${next(
                node.content
              )}</a>`
            },
            renderText: text =>
              text.split("\n").flatMap((text, i) => [i > 0 && <br />, text]),
          })}
        </div>
      </div>
    </Wrapper>
  </Layout>
)

export default PostTemplate

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
`

const Img = styled.img`
  margin: 0 auto;
  max-width: 900px;
  width: 100%;
  display: block;
`

const H1 = styled.h1`
  margin: 20px 0 25px;
  font-size: 1.5em;
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
    display: inline;
  }
`

const Paragraph = styled.p`
  margin-bottom: 12px;
`
