import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"

import { Layout, StyledLink } from "../components/index"
import christina from "../../static/images/christina-profile.png"

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
    <div style={{ width: "160px", display: "inline-block" }}>
      <h1>About Me</h1>
      <img src={christina} alt="Christina Profile Photo" width="80px" />
      <p>I like to cook</p>
    </div>
    <div style={{ display: "flex", "flex-direction": "column" }}>
      {data.posts.nodes.map(post => (
        <Wrapper key={`post-${post.slug}`}>
          <StyledLink to={`/${post.slug}`}>
            <img src={post.image.resize.src} />
          </StyledLink>
          <div style={{ padding: "20px 28px " }}>
            <h2>
              <StyledLink to={`/${post.slug}`}>{post.title}</StyledLink>
            </h2>
            <time style={{ "font-size": "smaller" }}>{post.createdAt}</time>
            {post.description && (
              <div style={{ "margin-top": "15px", "font-size": "16px" }}>
                {post.description.description}
                <StyledLink
                  to={`/${post.slug}`}
                  style={{ "font-size": "12px" }}
                >
                  read more
                </StyledLink>
              </div>
            )}
          </div>
        </Wrapper>
      ))}
    </div>
  </Layout>
)

const Wrapper = styled.article`
  margin: 0 auto 36px;
  max-width: 640px;
  width: 100%;
  background-color: #fff;
  border: 1px solid #dbdbdb;

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
