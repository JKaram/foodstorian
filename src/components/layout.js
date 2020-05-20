import React from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"

import { Header } from "./index"
import theme from "../themes/theme"

const GlobalStyle = createGlobalStyle`
  body {
    background: ${p => p.theme.colors.white};
    min-height: 100vh;
    margin: 0;
    font-family: Helvetica, sans-serif;;
    color: ${p => p.theme.colors.black};
    
    h1,
    h2,
    p {
      margin: 0;
      font-size: 18px;
      font-family: 'Lato', sans-serif;
    }
  }
`

const Main = styled.div`
  max-width: 744px;
  width: 100%;
  margin: 0 auto;
`

export const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Main>{children}</Main>
      {/* <footer>Footer</footer> */}
    </ThemeProvider>
  )
}
