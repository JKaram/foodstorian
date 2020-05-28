import React from "react"
import styled from "styled-components"
import { StyledLink } from "./index"

export const BlogItem = ({
  slug,
  image,
  title,
  createdAt,
  description,
  country,
}) => {
  return (
    <Wrapper key={`post-${slug}`}>
      <StyledLink to={`/${slug}`}>
        <img src={image} />
      </StyledLink>
      <div style={{ padding: "20px 22px " }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h2 style={{ fontSize: "22px" }}>
            <StyledLink to={`/${slug}`}>{title}</StyledLink>
          </h2>
          {country && (
            <Flag>
              <div>{country}</div>
              <img
                src={require(`../../static/images/flags/${country}.svg`)}
                height="30px"
                style={{
                  margin: "0 0 0 5px",
                  width: "30px",
                  display: "inline-block",
                }}
              />
            </Flag>
          )}
        </div>
        <time style={{ "font-size": "12px", display: "block" }}>
          {createdAt}
        </time>

        {description && (
          <div style={{ marginTop: "10px", "font-size": "14px" }}>
            <p>{description}</p>
            <StyledLink
              to={`/${slug}`}
              style={{
                "font-size": "18px",
                textAlign: "center",
                display: "block",
                marginTop: "15px",
                letterSpacing: "1px",
                color: "#000",
              }}
            >
              Read More
            </StyledLink>
          </div>
        )}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  margin: 10px auto;
  max-width: 640px;
  width: 100%;
  background-color: #fff;
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
  font-size: 16px;
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
`
