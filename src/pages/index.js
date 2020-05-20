import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"

import { Layout } from "../components/index"

export const query = graphql`
  {
    posts: allContentfulPost(sort: { fields: [createdAt], order: DESC }) {
      nodes {
        title
        slug
        createdAt(formatString: "DD MMMM YYYY")
        description {
          description
        }
        image {
          resize(width: 640, height: 400) {
            width
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
      <Wrapper key={`post-${post.slug}`}>
        <img src={post.image.resize.src} />
        <div style={{ padding: "20px" }}>
          <h2>
            <Link to={`/${post.slug}`}>{post.title}s</Link>
          </h2>
          <time>{post.createdAt}</time>
          {post.description && (
            <div style={{ "margin-top": "20px" }}>
              {post.description.description}
            </div>
          )}
        </div>
      </Wrapper>
    ))}
  </Layout>
)

const Wrapper = styled.article`
  margin: 0 auto;
  max-width: 640px;
  width: 100%;
  border: 1px solid black;
  margin-bottom: 36px;

  h1 {
    font-size: 42px;
    text-decoration: none;
  }
`
