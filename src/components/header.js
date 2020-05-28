import React from "react"
import styled from "styled-components"

import { StyledLink } from "../components"

export const Header = () => (
  <Wrapper>
    <Title>
      <h1>
        <StyledLink to="/">Foodstorian</StyledLink>
      </h1>
    </Title>

    {/* <nav>
        <StyledLink style={{ marginRight: "10px" }} to="/contact">
          Contact
        </StyledLink>
        <StyledLink to="/">More</StyledLink>
      </nav> */}
    <MobileMenuIcon>
      <div />
      <div />
      <div />
    </MobileMenuIcon>
  </Wrapper>
)

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
const Wrapper = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  width: 100%;
`
const Title = styled.h1`
  h1 {
    font-size: 1.5em;
    font-family: "Oxygen", sans-serif;
    padding: 15px 40px;
    border: 4px solid black;
  }
`
