import React, { useState } from "react"
import styled from "styled-components"

import { StyledLink } from "../components"

export const Header = () => {
  const [toggleNav, setToggleNav] = useState(false)

  return (
    <Wrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          margin: "10px 0",
        }}
      >
        <Title>
          <h1>
            <StyledLink to="/">Foodstorian</StyledLink>
          </h1>
        </Title>

        <MobileMenuIcon onClick={() => setToggleNav(!toggleNav)}>
          <div />
          <div />
          <div />
        </MobileMenuIcon>
      </div>

      {toggleNav && (
        <nav>
          <StyledLink style={{ marginRight: "10px" }} to="/contact">
            Contact
          </StyledLink>
          <StyledLink to="/">More</StyledLink>
        </nav>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100px;
  width: 100%;
`
const MobileMenuIcon = styled.div`
  width: 25px;
  > div {
    height: 3px;
    background: #000;
    margin: 5px 0;
    width: 100%;
  }
  @media (min-width: 768px) {
    display: none;
  }
`
const Title = styled.h1`
  h1 {
    font-size: 1.5em;
    font-family: "Oxygen", sans-serif;
    padding: 15px 40px;
    border: 4px solid black;
  }
`
