import React, { useState } from "react"
import styled from "styled-components"

import { StyledLink, mobileMenu, SearchBar } from "../components"

export const Header = ({ toggleNav }) => {
  return (
    <Wrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          maxWidth: "900px",
          width: "100%",
          margin: "auto 0",
        }}
      >
        <Title>
          <StyledLink to="/">Foodstorian</StyledLink>
        </Title>
        <SearchBar />
        {/* <MobileMenuIcon onClick={() => toggleNav()}>
          <div />
          <div />
          <div />
        </MobileMenuIcon> */}
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
  position: fixed;
  background: #fff;
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
