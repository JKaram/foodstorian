import React from "react"
import styled from "styled-components"
import christina from "../../static/images/christina-profile.png"

export const AboutSection = () => (
  <Wrapper>
    <h1 style={{ textAlign: "center", fontSize: "24px", marginBottom: "20px" }}>
      About The Blog
    </h1>
    {/* <img
             src={christina}
             alt="Christina Stokes"
             width="100px"
             style={{ margin: "15px auto 10px", display: "block" }}
           /> */}
    <p style={{ padding: "0 10px" }}>
      Proin at nunc id tellus tincidunt condimentum. Donec vitae euismod sapien,
      a placerat ligula. Nulla erat tellus, ullamcorper sed euismod vitae,
      interdum vel massa.
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
