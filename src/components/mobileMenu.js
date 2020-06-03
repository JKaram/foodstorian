import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { StyledLink } from "./index"

export const MobileMenu = () => {
  return (
    <Wrapper>
      <StyledLink to="/contact">Contact</StyledLink>
      <StyledLink to="/">About</StyledLink>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: red;
  position: fixed;
  top: 100px;
  right: -100vh;
  background: white;
  height: 100vh;
  width: 100vh;
`
