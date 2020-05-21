import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"

import { Layout, StyledLink } from "../components/index"

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
        <StyledLink to={`/${post.slug}`}>
          <img src={post.image.resize.src} />
        </StyledLink>
        <div style={{ padding: "20px 28px " }}>
          <h2>
            <StyledLink to={`/${post.slug}`}>{post.title}s</StyledLink>
          </h2>
          <time style={{ "font-size": "smaller" }}>{post.createdAt}</time>
          {post.description && (
            <div style={{ "margin-top": "15px", "font-size": "16px" }}>
              {post.description.description}
              <StyledLink to={`/${post.slug}`} style={{ "font-size": "12px" }}>
                read more
              </StyledLink>
            </div>
          )}
        </div>
      </Wrapper>
    ))}
  </Layout>
)

const Wrapper = styled.article`
  margin: 0 auto 36px;
  max-width: 640px;
  width: 100%;
  background-color: #fff;
  border: 1px solid #dbdbdb;
  color: #262626;

  h2 {
    font-size: 24px;
  }

  img {
    max-width: 640px;
    width: 100%;
  }

  transition: all 0.2s ease-in-out;

  &:hover {
    /* transform: scale(1.01); */
  }
`
