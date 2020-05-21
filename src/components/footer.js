import React from "react"
import styled from "styled-components"

export const Footer = () => (
  <StyledFooter>
    <a
      href="http://www.github.com/JKaram"
      target="_blank"
      rel="noopener norefferer"
    >
      Developed by Jamie Karam
    </a>
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
