import React from "react"
import styled from "styled-components"
import { StyledLink } from "./index"

export const BlogItem = ({ slug, image, title, createdAt, description }) => (
  <Wrapper key={`post-${slug}`}>
    <StyledLink to={`/${slug}`}>
      <img src={image} />
    </StyledLink>
    <div style={{ padding: "20px 28px " }}>
      <h2>
        <StyledLink to={`/${slug}`}>{title}</StyledLink>
      </h2>
      <time style={{ "font-size": "smaller", display: "block" }}>
        {createdAt}
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
      {description && (
        <div style={{ "margin-top": "15px", "font-size": "16px" }}>
          {description}
          <StyledLink to={`/${slug}`} style={{ "font-size": "12px" }}>
            read more
          </StyledLink>
        </div>
      )}
    </div>
  </Wrapper>
)

const Wrapper = styled.article`
  margin: 0 auto 36px;
  max-width: 640px;
  width: 97%;
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
