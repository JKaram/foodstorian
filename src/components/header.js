import React, { useState } from "react"
import styled from "styled-components"

import { StyledLink, mobileMenu } from "../components"

export const Header = ({ toggleNav }) => {
  return (
    <Wrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          margin: "auto 0",
        }}
      >
        <Title>
          <StyledLink to="/">Foodstorian</StyledLink>
        </Title>

        <MobileMenuIcon onClick={() => toggleNav()}>
          <div />
          <div />
          <div />
        </MobileMenuIcon>
      </div>
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
  font-size: 1.5em;
  font-family: "Oxygen", sans-serif;
  padding: 15px 40px;
  border: 4px solid black;
`
