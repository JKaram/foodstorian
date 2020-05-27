import React from "react"
import styled from "styled-components"

import { StyledLink } from "../components"

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #efefef;

  height: 80px;
  width: 100%;

  h1 {
    font-size: 2.5em;
    font-family: "Oxygen", sans-serif;
  }
`

export const Header = () => (
  <Wrapper>
    <h1>
      <StyledLink to="/">Foodstorian</StyledLink>
    </h1>
  </Wrapper>
)
