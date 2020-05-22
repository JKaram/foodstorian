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
        country
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
    <div style={{ width: "260px" }}>
      <h1 style={{ "text-align": "center", "font-size": "24px" }}>About Me</h1>
      <img
        src={christina}
        alt="Christina Profile Photo"
        width="100px"
        style={{ margin: "15px auto 10px", display: "block" }}
      />
      <p style={{ padding: "0 10px" }}>
        Hello! My name is Christina and I like to cook. combine my two passions
        cooking and history! I will give you some helpful links to recipes.
      </p>
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
            <time style={{ "font-size": "smaller", display: "block" }}>
              {post.createdAt}
            </time>
            {/* <Flag>
              <img
                src={flags.china.flag}
                height="30px"
                style={{
                  margin: "0 10px 0 0",
                  width: "30px",
                  display: "inline-block",
                }}
              />
              China
            </Flag> */}
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
const Flag = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`
