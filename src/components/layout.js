import React from "react"
import { Header } from "./index"

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  )
}
