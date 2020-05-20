import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Wrapper = styled.header`
  height: 100px;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;

  h1 {
    font-size: 2em;
    width: fit-content;
    margin: 0 auto;
  }
`

export const Header = () => (
  <Wrapper>
    <h1>
      <Link to="/">Foodstorian</Link>
    </h1>
    <nav></nav>
  </Wrapper>
)
