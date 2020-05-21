import React from "react"
import styled from "styled-components"

import { StyledLink } from "../components"

const Wrapper = styled.header`
  height: 100px;
  max-width: 800px;
  width: 100%;
  margin: 0 auto 20px;
  display: flex;
  justify-content: center;

  h1 {
    font-size: 2.5em;
    font-family: "Oxygen", sans-serif;
  }
`

export const Header = () => (
  <Wrapper>
    <h1>
      <StyledLink to="/">The Foodstorian</StyledLink>
    </h1>
  </Wrapper>
)
