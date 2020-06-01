import React from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"

import { Header, Footer } from "./index"
import theme from "../themes/theme"

const GlobalStyle = createGlobalStyle`
  body {
    background: #FFF;
    min-height: 100vh;
    margin: 0;
    font-family: Helvetica, sans-serif;
    position: relative;
    
    
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
  min-height: calc(100vh - 50px - 100px); /* Sticky Footer */
`

export const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </ThemeProvider>
  )
}
