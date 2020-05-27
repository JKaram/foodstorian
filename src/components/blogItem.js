import React from "react"
import styled from "styled-components"
import { StyledLink } from "./index"

export const BlogItem = ({ slug, image, title, createdAt, description }) => (
  <Wrapper key={`post-${slug}`}>
    <StyledLink to={`/${slug}`}>
      <img src={image} />
    </StyledLink>
    <div style={{ padding: "20px 22px " }}>
      <h2 style={{ fontSize: "18px" }}>
        <StyledLink to={`/${slug}`}>{title}</StyledLink>
      </h2>
      <time style={{ "font-size": "10px", display: "block" }}>{createdAt}</time>
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
      {description && (
        <div style={{ marginTop: "15px", "font-size": "12px" }}>
          {description}
          <StyledLink
            to={`/${slug}`}
            style={{ "font-size": "12px", marginLeft: "10px" }}
          >
            Read more
          </StyledLink>
        </div>
      )}
    </div>
  </Wrapper>
)

const Wrapper = styled.article`
  margin: 10px auto;
  max-width: 640px;
  width: 100%;
  background-color: #fff;
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
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
