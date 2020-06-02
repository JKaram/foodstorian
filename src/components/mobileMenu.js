import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const MobileMenu = () => {
  return (
    <Wrapper>
      <Link to="/contact">Contact</Link>
      <Link to="/">About</Link>

      <p>ABout</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vh;
  z-index: 9999;
  color: red;
  position: absolute;
  background: #fff;
`
