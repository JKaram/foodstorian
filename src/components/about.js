import React from "react"
import styled from "styled-components"
import christina from "../../static/images/christina-profile.png"

export const AboutSection = () => (
  <Wrapper>
    <h1 style={{ textAlign: "center", fontSize: "24px" }}>About Me</h1>
    <img
      src={christina}
      alt="Christina Stokes"
      width="100px"
      style={{ margin: "15px auto 10px", display: "block" }}
    />
    <p style={{ padding: "0 10px" }}>
      Hello! My name is Christina and I like to cook. combine my two passions
      cooking and history! I will give you some helpful links to recipes.
    </p>
  </Wrapper>
)

const Wrapper = styled.div`
  max-width: 260px;
  width: 100%;
  display: none;

  @media (min-width: 900px) {
    display: block;
  }
`
