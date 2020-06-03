import React, { useState } from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"

import { Header, Footer } from "./index"
import theme from "../themes/theme"
import { MobileMenu } from "./mobileMenu"

const GlobalStyle = createGlobalStyle`
  body {
    background: #FFF;
    min-height: 100vh;
    margin: 0;
    font-family: Helvetica, sans-serif;

    position: ${p => (p.isNavOpen ? "fixed" : "realtive")};
    
    h1,
    h2,
    p {
      margin: 0;
      font-size: 18px;
      font-family: 'Lato', sans-serif;
      color: #262626;
    }
  }
`

const Main = styled.div`
  display: flex;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding-top: 120px;
  min-height: calc(100vh - 50px - 100px); /* Sticky Footer */
`

export const Layout = ({ children }) => {
  const [isNavOpen, setNavOpen] = useState(false)
  const toggleNav = () => {
    setNavOpen(!isNavOpen)
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle isNavOpen={isNavOpen} />
      <Header toggleNav={toggleNav} />
      <Main>
        {isNavOpen && <MobileMenu />}
        {children}
      </Main>
      <Footer />
    </ThemeProvider>
  )
}
