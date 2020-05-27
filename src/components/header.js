import React from "react"
import styled from "styled-components"

import { StyledLink } from "../components"

export const Header = () => (
  <Wrapper>
    <Title>
      <h1>
        <StyledLink to="/">Foodstorian</StyledLink>
      </h1>

      <nav>
        <StyledLink style={{ marginRight: "10px" }} to="/contact">
          Contact
        </StyledLink>
        <StyledLink to="/">More</StyledLink>
      </nav>
    </Title>
  </Wrapper>
)

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #efefef;

  height: 80px;
  width: 100%;
`
const Title = styled.h1`
  max-width: 900px;
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;

  margin: 0 auto;

  h1 {
    font-size: 1.5em;
    font-family: "Oxygen", sans-serif;
  }
`
