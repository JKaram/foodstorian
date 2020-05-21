import React from "react"
import styled from "styled-components"

export const Footer = () => (
  <StyledFooter>
    <p>Christina Stokes</p>
  </StyledFooter>
)

const StyledFooter = styled.footer`
  background-color: #fff;
  width: 100%;
  border-top: 1px solid #efefef;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
`
